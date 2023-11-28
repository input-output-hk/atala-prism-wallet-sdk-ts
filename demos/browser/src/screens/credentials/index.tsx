import {useCredentialsState} from './state';
import {useCallback} from 'react';
import ReactJson from 'react-json-view';
import Badge from '../../components/badge';
import Button from '../../components/button';
import * as SDK from '@input-output-hk/atala-prism-wallet-sdk';
import useAgentState from '../../global/agent-state';
import {useNotification} from '../../components/notification/state';
import {CredentialIssuedRecord, CredentialOfferRecord, CredentialRecords} from './style';

/*
* @notes:
*  - Credential offer is parsed wrong, "item.body.credential_preview.body" is missing.
* */
export default function CredentialsScreen() {
  const {agent} = useAgentState();
  const state = useCredentialsState();
  const notification = useNotification();
  const handleAccept = useCallback((credentialOffer: SDK.OfferCredential) => {
    return async () => {
      console.log({attrs: credentialOffer.body.credential_preview.body.attributes});
      console.log({attrs: credentialOffer.body.credential_preview.attributes});
      const requestCredential = await agent.prepareRequestCredentialWithIssuer(credentialOffer);
      console.log(requestCredential);
      try {
        await agent.sendMessage(requestCredential.makeMessage());
        state.postAcceptOffer(credentialOffer);
        notification.pushNotification({state: "error", message: 'Success, waiting for credential issuance'});
      } catch (err) {
        console.log(err);
        notification.pushNotification({
          state: "error",
          message: 'Failed sending the request for the offered credential'
        });
      }
    };
  }, [agent, notification, state]);
  // useEffect(() => {
  //   state.init();
  // }, [state]);


  return (
      <CredentialRecords>
        {
          state.offers.map((item, index) => (
              <CredentialOfferRecord key={index}>
                <Badge text={item.body.credential_preview.type} $kind="primary"/>
                <ReactJson src={item.body.credential_preview}/>
                <Button type="button" onClick={handleAccept(item)} $variant="primary" iconTrailing="check"
                        disabled={false}
                        text="Accept"/>
              </CredentialOfferRecord>
          ))
        }
        {
          state.credentials.map((item, index) => (
              <CredentialIssuedRecord key={index}>
                <ReactJson src={item}/>
              </CredentialIssuedRecord>
          ))
        }
      </CredentialRecords>
  );
}