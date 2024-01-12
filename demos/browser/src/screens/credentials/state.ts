import {create} from 'zustand';
import * as SDK from '@input-output-hk/atala-prism-wallet-sdk';
import useAgentState from '../../global/agent-state';

type UseCredentialState = {
  credentials: SDK.Domain.Credential[] | SDK.AnonCredsCredential[],
  offers: SDK.OfferCredential[],
  proofs: SDK.RequestPresentation[],
  addProof: (proof: SDK.RequestPresentation) => void;
  addOffer: (offer: SDK.OfferCredential) => void;
  postAcceptOffer: (credential: SDK.OfferCredential) => void,
  postRequestProof: (proof: SDK.RequestPresentation) => void,
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
  proofs: [],
  addProof(proof) {
    setState(v => ({proofs: [...v.proofs, proof]}));
  },
  addOffer(credential) {
    return setState(v => ({offers: [...v.offers, credential]}));
  },
  postAcceptOffer(credential: SDK.OfferCredential) {
    setState(v => ({offers: v.offers.filter(item => item.id !== credential.id)}));
  },
  postRequestProof(proof) {
    setState(v => ({proofs: v.proofs.filter(item => item.id !== proof.id)}));
  },
  addCredential(credential) {
    return setState(v => ({credentials: [...v.credentials, credential]}));
  },
  async init() {
    const credentials = await useAgentState.getState().pluto.getAllCredentials();
    setState({credentials: credentials});
  },
}));