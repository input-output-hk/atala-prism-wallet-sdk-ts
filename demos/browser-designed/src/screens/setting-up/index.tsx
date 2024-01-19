import Typography from '../../components/typography';
import WalletScreen from '../../components/wallet-screen';
import React, {useCallback, useEffect} from 'react';
import SDK from "@atala/prism-wallet-sdk";
import {CommonWrapperBox} from './index.style';
import Spacer from '../../components/spacer/spacer';
import Form, {FormHandler} from '../../components/form';
import FORM_SCHEMA from './setup.schema.json';
import Input from '../../components/input';
import {HorizontalBox} from '../landing/index.style';
import Button from '../../components/button';
import useAgentState from '../../global/agent-state';
import Icon from '../../components/icon';
import {useNotification} from '../../components/notification/state';
import ButtonLink from '../../components/button-link';

/*
SDK improvements
* @todo:
*   - Export the AgentState from the build
*   - Consider adding AgentState errored?
* */

type FormData = {
  did: string;
}

enum AgentState {
  STOPPED = "stopped",
  STARTING = "starting",
  RUNNING = "running",
  STOPPING = "stopping"
}

const defaultMediatorDID = "did:peer:2.Ez6LSghwSE437wnDE1pt3X6hVDUQzSjsHzinpX3XFvMjRAm7y.Vz6Mkhh1e5CEYYq6JBUcTZ6Cp2ranCWRrv7Yax3Le4N59R6dd.SeyJ0IjoiZG0iLCJzIjoiaHR0cHM6Ly9iZXRhLW1lZGlhdG9yLmF0YWxhcHJpc20uaW8iLCJyIjpbXSwiYSI6WyJkaWRjb21tL3YyIl19";
const INITIAL_DATA = {
  did: defaultMediatorDID,
};
export default function SettingUpScreen() {
  const {pluto, agent, init: initAgent} = useAgentState();
  const notification = useNotification();

  // eslint-disable-next-line react-hooks/rules-of-hooks

  const [agentState, setState] = React.useState<AgentState>(agent?.state ?? AgentState.STOPPED);
  const [error, setError] = React.useState<any>();

  const [newMessage, setNewMessage] = React.useState<any>([]);
  const [messages, setMessages] = React.useState<SDK.Domain.Message[]>([]);

  const handleMessages = async (newMessages: SDK.Domain.Message[]) => {
    const joinedMessages = [...messages, ...newMessages];

    setMessages(joinedMessages);
    setNewMessage(joinedMessages.map(() => ""));

    const credentialOffers = newMessages.filter((message) => message.piuri === "https://didcomm.org/issue-credential/3.0/offer-credential");
    const issuedCredentials = newMessages.filter((message) => message.piuri === "https://didcomm.org/issue-credential/3.0/issue-credential");
    const requestPresentations = newMessages.filter((message) => message.piuri === "https://didcomm.atalaprism.io/present-proof/3.0/request-presentation");

    if (requestPresentations.length) {
      for (const requestPresentation of requestPresentations) {
        const lastCredentials = await pluto.getAllCredentials();
        const lastCredential = lastCredentials.at(-1);
        const requestPresentationMessage = SDK.RequestPresentation.fromMessage(requestPresentation);
        try {
          if (lastCredential === undefined) throw new Error("last credential not found");

          const presentation = await agent.createPresentationForRequestProof(requestPresentationMessage, lastCredential);
          await agent.sendMessage(presentation.makeMessage());
        } catch (err) {
          console.log("continue after err", err);
        }
      }
    }
    if (credentialOffers.length) {
      for (const credentialOfferMessage of credentialOffers) {
        const credentialOffer = SDK.OfferCredential.fromMessage(credentialOfferMessage);

        const requestCredential = await agent.prepareRequestCredentialWithIssuer(credentialOffer);
        try {
          await agent.sendMessage(requestCredential.makeMessage());
        } catch (err) {
          console.log("continue after err", err);
        }
      }
    }
    if (issuedCredentials.length) {
      for (const issuedCredential of issuedCredentials) {
        const issueCredential = SDK.IssueCredential.fromMessage(issuedCredential);
        await agent.processIssuedCredentialMessage(issueCredential);
      }
    }

  };

  useEffect(() => {
    agent?.addListener(SDK.ListenerKey.MESSAGE, handleMessages);
    return () => {
      agent?.removeListener(SDK.ListenerKey.MESSAGE, handleMessages);
    };
  });

  const handleOnChange = (e: any, i: number) => {
    setNewMessage([
      ...newMessage.map((message: any, z: number) => {
        if (z === i) {
          return e.target.value;
        }
        return message;
      })
    ]);
  };

  const handleStart = useCallback<FormHandler<FormData>>(async (data) => {
    const agentRef = await initAgent(SDK.Domain.DID.fromString(data.did));
    setState(AgentState.STARTING);
    try {
      const status = await agentRef.start();
      const mediator = agentRef.currentMediatorDID;
      if (!mediator) {
        notification.pushNotification({
          state: "error",
          message: "The agent does not have a mediator DID setup."
        });
        return;
      }

      setState(status);
    } catch (e) {
      setError(e);
      setState(AgentState.STOPPED);
      throw e;
    }

  }, [initAgent, notification]);


  const handleStop = useCallback(async () => {
    setState(AgentState.STOPPING);
    try {

      await agent.stop();
      setState(AgentState.STOPPED);
    } catch (error) {
      notification.pushNotification({
        state: "error",
        message: "Encountered an error while trying to stop agent. Please check the logs for more details"
      });
    }
  }, [agent, notification]);

  return (
      <WalletScreen>
        <CommonWrapperBox>
          <Spacer $top={60}/>

          <Icon name="reorder" size={20} color="primary" tint="600"/>
          <Typography type="display"><>First things first,<br/> begin a connection with the mediator</>
          </Typography>
          <Spacer $top={10}/>
          <Typography type="text" $color="gray" $size="md">
            This connection is needed in order to exchange messages with other agents, so please type in the remote
            DID peer.
          </Typography>
          <Spacer $top={20}/>
          <Form schema={FORM_SCHEMA} id="agent-connect" initialData={INITIAL_DATA} initialDataLoading={false}

                onSubmit={handleStart}>
            <Input type="text" name="did" placeholderText="did:peer:2:92i3209831209jndsajndiuadhiua"
                   disabled={agentState !== AgentState.STOPPED}
                   copyEnabled={true}
                   labelText="Your DID peer"/>
            <Spacer $top={20}/>
            <HorizontalBox>
              <Button text={error ? "Retry starting" : "Start agent"}
                      type="submit"
                      $destructive={!!error}
                      disabled={agentState !== AgentState.STOPPED}
                      isLoading={[AgentState.STARTING].includes(agentState)}/>
              <Button text="Stop"
                      $variant="secondary-gray"
                      onClick={handleStop}
                      disabled={agentState !== AgentState.RUNNING}
                      isLoading={[AgentState.STOPPING].includes(agentState)}/>
            </HorizontalBox>
          </Form>
          <Spacer $top={40}/>
          <HorizontalBox style={{justifyContent: "flex-end"}}>
            <ButtonLink to="/wallet/mnemonics" $variant="secondary-color" text="Continue"
                        disabled={!agent}/>
          </HorizontalBox>
        </CommonWrapperBox>
      </WalletScreen>
  );
}