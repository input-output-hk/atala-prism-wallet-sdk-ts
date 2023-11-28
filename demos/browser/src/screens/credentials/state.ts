import {create} from 'zustand';
import * as SDK from '@input-output-hk/atala-prism-wallet-sdk';
import useAgentState from '../../global/agent-state';

type UseCredentialState = {
  credentials: SDK.Domain.Credential[],
  offers: SDK.OfferCredential[],
  addOffer: (param: SDK.OfferCredential) => void,
  postAcceptOffer: (credential: SDK.OfferCredential) => void,
  addCredential: (param: SDK.Domain.Credential) => void,
  init: () => Promise<void>;
}
/*
* @note
*  - IssueCredential interface name is confusing, CredentialOffer would make more sense.
* */

export const useCredentialsState = create<UseCredentialState>((setState, getState, store) => ({
  offers: [],
  credentials: [],
  addOffer(credential) {
    return setState(v => ({offers: [...v.offers, credential]}));
  },
  postAcceptOffer(credential: SDK.OfferCredential) {
    setState(v => ({offers: v.offers.filter(item => item.id !== credential.id)}));
  },
  addCredential(credential) {
    return setState(v => ({credentials: [...v.credentials, credential]}));
  },
  async init() {
    const credentials = await useAgentState.getState().pluto.getAllCredentials();
    setState({credentials: credentials});
  },
}));