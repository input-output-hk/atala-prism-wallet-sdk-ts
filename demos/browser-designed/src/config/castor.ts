import SDK from "@atala/prism-wallet-sdk";
import apollo from './apollo';

const castor = new SDK.Castor(apollo);

export default castor;

