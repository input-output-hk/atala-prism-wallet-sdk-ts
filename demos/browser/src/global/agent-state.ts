import {create} from 'zustand';
import * as SDK from "@atala/prism-wallet-sdk";
import {ListenerKey} from '@input-output-hk/atala-prism-wallet-sdk';
import {getDB} from '../config/pluto';
import {useNotification} from '../components/notification/state';
import {useCredentialsState} from '../screens/credentials/state';

type AgentState = {
  agent: SDK.Agent | null,
  init: (mediatorDID: SDK.Domain.DID) => Promise<SDK.Agent>;
  pluto: SDK.Domain.Pluto | null,
}


const useAgentState = create<AgentState>((setState) => ({
  agent: null,
  pluto: null,
  init: async (mediatorDID) => {
    const db = await getDB();
    const ref = SDK.Agent.initialize({
      pluto: db,
      mediatorDID
    });
    setState({agent: ref, pluto: db});
    return ref;
  }
}));

useAgentState.subscribe(({agent}) => {
  /*
  * @note:
  *  - Agent.status is "stopped" when the agent is changing state. It should be "starting".
  *  - "Offer Credential" goal code seems like is inconsistent with io.atalaprism.connect, I suggest to make it io.atalaprism.credential.offer
  * */
  if (agent) {
    agent.addListener(ListenerKey.MESSAGE, async (message) => {
      if (Array.isArray(message) && message.at(0)) {
        console.log(message);
        switch (message.at(0).piuri) {
          case 'https://didcomm.org/issue-credential/3.0/offer-credential':

            const credentialOffer = SDK.OfferCredential.fromMessage(message.at(0));
            useCredentialsState.getState().addOffer(credentialOffer);
            break;
          case "https://didcomm.org/issue-credential/3.0/issue-credential":
            const issuedCredential = SDK.IssueCredential.fromMessage(message.at(0));

            const credential = await agent.processIssuedCredentialMessage(issuedCredential);
            useCredentialsState.getState().addCredential(credential);
            useNotification.getState().pushNotification({state: "success", message: "New credential received"});
            break;
          case 'https://atalaprism.io/mercury/connections/1.0/response':
            // @ts-ignore
            useNotification.getState().pushNotification({state: "success", message: "Received a new connection"});
            break;
          case 'https://didcomm.atalaprism.io/present-proof/3.0/request-presentation':
            const proof = SDK.RequestPresentation.fromMessage(message.at(0));
            useCredentialsState.getState().addProof(proof);
            useNotification.getState().pushNotification({state: "success", message: "New proof request received"});
        }

      }
    });


    // agent.addListener(ListenerKey.CONNECTION, (connection) => {
    // console.log({connection});
    // useNotification.getState().pushNotification({state: "success", message: "Received a new connection"});
    /*
    * @note:
    *  - Invalid type for parameter connection. Connection is a single type not array.
    * */
    // });
  }
});
export default useAgentState;