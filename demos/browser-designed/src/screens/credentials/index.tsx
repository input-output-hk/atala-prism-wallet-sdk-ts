import {useCredentialsState} from './state';
import {ChangeEventHandler, useCallback, useEffect, useState} from 'react';
import Badge from '../../components/badge';
import Button from '../../components/button';
import * as SDK from '@input-output-hk/atala-prism-wallet-sdk';
import useAgentState from '../../global/agent-state';
import {useNotification} from '../../components/notification/state';
import {CredentialIssuedRecord, CredentialOfferRecord, CredentialRecords} from './style';
import {StyledHeading} from '../../components/typography/index.style';
import PRISMJSONView from '../../components/prism-json-view';
import Spacer from '../../components/spacer/spacer';
import Typography from '../../components/typography';
/*
* @notes:
*  - Credential offer is parsed wrong, "item.body.credential_preview.body" is missing.
* */
export default function CredentialsScreen() {
  const {agent} = useAgentState();
  const state = useCredentialsState();
  const notification = useNotification();
  const [proofId, setProofId] = useState<string | null>(null);
  const handleSelect = useCallback<ChangeEventHandler<HTMLSelectElement>>((event) => {
    setProofId(event.currentTarget.value);
  }, []);

  const handleAccept = useCallback((credentialOffer: SDK.OfferCredential) => {
    return async () => {
      const requestCredential = await agent.prepareRequestCredentialWithIssuer(credentialOffer);
      try {
        await agent.sendMessage(requestCredential.makeMessage());
        state.postAcceptOffer(credentialOffer);
        notification.pushNotification({state: "success", message: 'Success, waiting for credential issuance'});
      } catch (err) {
        /*
        * Anyway this method will throw "malformed" didcomm error,
        * but the credential will be issued 🤞
        * */
        state.postAcceptOffer(credentialOffer);
        notification.pushNotification({state: "success", message: 'Success, waiting for credential issuance'});
      }
    };
  }, [agent, notification, state]);


  const handleSelectForProof = useCallback((index: number) => {
    return () => {
      const proof = state.proofs.find(item => item.id === proofId);
      (async () => {
        try {

          const r = await agent.createPresentationForRequestProof(proof, state.credentials[index]);
          await agent.sendMessage(r.makeMessage());
          state.postRequestProof(proof);
        } catch (err) {
          state.postRequestProof(proof);
        }
      })();
    };
  }, [proofId, agent, state]);

  useEffect(() => {
    if (state.proofs?.length) {
      setProofId(state.proofs.at(0).id);
    }
  }, [state.proofs]);
  return (
      <CredentialRecords>
        <div>
          <StyledHeading $size="xs" $weight="semibold">Credential offers ({state.offers.length})</StyledHeading>
          {
            state.offers.map((item, index) => (
                <CredentialOfferRecord key={index}>
                  <Badge text="Credential offer" $kind="primary"/>
                  <StyledHeading $size="xs" $weight="semibold">Credential Attributes</StyledHeading>
                  <PRISMJSONView data={
                    // @ts-ignore
                    item.body.credential_preview!.body!.attributes
                  }/>
                  <Button type="button" onClick={handleAccept(item)} $variant="primary" iconTrailing="check"
                          disabled={false}
                          text="Accept"/>
                </CredentialOfferRecord>
            ))
          }

        </div>
        <div>
          <StyledHeading $size="xs" $weight="semibold">Credentials received ({state.credentials.length})</StyledHeading>
          {
              !!state.proofs.length &&
              <Typography type="text">
                  <>
                      <Badge text="Action required" $kind="warning"/> Please provide credentials for proof request
                  </>
              </Typography>
          }
          {
            state.credentials.map((item, index) => (
                <CredentialIssuedRecord key={index}>
                  {item instanceof SDK.JWTCredential && (
                      <>
                        <Badge text="JWTCredential" $kind="primary"/>
                        <StyledHeading $size="sm" $weight="semibold">Credential Values</StyledHeading>
                        <PRISMJSONView data={item.properties}/>
                      </>
                  )}
                  {item instanceof SDK.AnonCredsCredential && (
                      <>
                        <Spacer $top={20}/>
                        <Badge text="AnonCred" $kind="primary"/>
                        <StyledHeading $size="xs" $weight="semibold">Credential Values</StyledHeading>
                        <PRISMJSONView data={item.properties.get(SDK.AnonCredsCredentialProperties.values)}/>
                      </>
                  )}
                  {proofId &&
                      <Button text="Proof with this one" onClick={handleSelectForProof(index)} disabled={false}/>}
                </CredentialIssuedRecord>
            ))
          }
        </div>
      </CredentialRecords>
  );
}