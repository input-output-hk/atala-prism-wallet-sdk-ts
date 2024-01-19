import {create} from 'zustand';
import apollo from '../config/apollo';
import SDK from '@input-output-hk/atala-prism-wallet-sdk';

export type ApolloState = {
  mnemonics: SDK.Domain.MnemonicWordList,
  currentSeed: SDK.Domain.Seed;
  createMnemonics: () => void;
  createSeed: (mnemonics?: SDK.Domain.MnemonicWordList) => void;
}

const useApolloState = create<ApolloState>((setState, getState, store) => ({
  mnemonics: apollo.createRandomMnemonics(),
  currentSeed: null,
  createMnemonics() {
    setState({mnemonics: apollo.createRandomMnemonics()});
  },
  createSeed(mnemonics) {
    const fromMnemonics = mnemonics ? mnemonics : getState().mnemonics;
    const seed = apollo.createSeed(fromMnemonics);
    setState({currentSeed: seed});
  }
}));

export default useApolloState;