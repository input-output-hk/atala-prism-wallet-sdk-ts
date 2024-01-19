import WalletScreen from '../../components/wallet-screen';
import Typography from '../../components/typography';
import Spacer from '../../components/spacer/spacer';
import Icon from '../../components/icon';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import useApolloState from '../../global/apollo-state';
import {HorizontalBox} from '../landing/index.style';
import Button from '../../components/button';
import {useMutation, useQuery} from 'react-query';
import SideNavigation, {SideNavigationCollectionItemProps} from '../../components/side-navigation';
import {makeRandomChars, truncateDID} from '../../utils';
import {CreateWrapperBox, StyledDIDsWrapper} from './index.style';
import {Outlet, useNavigate, useParams} from 'react-router-dom';
import Form, {FormHandler} from '../../components/form';
import schema from './create-did.schema.json';
import Input from '../../components/input';
import apollo from '../../config/apollo';
import * as SDK from "@atala/prism-wallet-sdk";
import {Domain} from "@atala/prism-wallet-sdk";
import castor from '../../config/castor';
import Dropdown from '../../components/dropdown';
import queryClient from '../../config/query-client';
import useAgentState from '../../global/agent-state';
import PRISMJSONView from '../../components/prism-json-view';

function usePeerDIDs() {
  const agent = useAgentState();
  return useQuery('get-all-peer-dids', () => {
    console.log(agent);
    return agent.pluto.getAllPeerDIDs();
  });
}

function usePrismDIDs() {
  const agent = useAgentState();
  return useQuery('get-all-prism-dids', () => {
    return agent.pluto.getAllPrismDIDs();
  });
}

const exampleService = new Domain.Service("didcomm", ["DIDCommMessaging"], {
  uri: "https://example.com/endpoint",
  accept: ["didcomm/v2"],
  routingKeys: ["did:example:somemediator#somekey"],
});

function useDid() {
  const agent = useAgentState();
  const param = useParams<{ did: string }>();
  const query = useQuery('get-current-did', async () => {
    if (param.did) {
      if (param.did.includes("peer")) {
        const peers = await agent.pluto.getAllPeerDIDs();
        return peers.find(item => item.did.toString() === param.did);
      }
      if (param.did.includes('prism')) {
        return agent.pluto.getDIDInfoByDID(SDK.Domain.DID.fromString(param.did));
      }
    }
  });

  return query;
}

function useCreatePrismDID() {
  const agent = useAgentState();
  const mutation = useMutation('create-prism-did',
      async (privateKey: SDK.Domain.PrivateKey) => {
        const did = await castor.createPrismDID(privateKey.publicKey(), [exampleService]);
        await agent.pluto.storePrismDID(did, 10, privateKey, did.methodId, "");
        await queryClient.fetchQuery("get-all-prism-dids");
      });

  return mutation;
}

function useCreatePeerDID() {
  const agent = useAgentState();
  const mutation = useMutation('create-peer-did', async () => {

    const authPrivateKey = apollo.createPrivateKey({
      type: SDK.Domain.KeyTypes.EC,
      curve: SDK.Domain.Curve.ED25519,
    });

    const keyAgreementPrivateKey = apollo.createPrivateKey({
      type: SDK.Domain.KeyTypes.Curve25519,
      curve: SDK.Domain.Curve.X25519,
    });

    const peerDID = await castor.createPeerDID(
        [authPrivateKey.publicKey(), keyAgreementPrivateKey.publicKey()],
        [exampleService]
    );
    await agent.pluto.storePeerDID(peerDID, [authPrivateKey, keyAgreementPrivateKey]);
    await queryClient.fetchQuery("get-all-peer-dids");
  });

  return mutation;
}


const INITIAL_DATA = {
  phasePhrase: makeRandomChars(4),
};

type FormData = {
  phasePhrase: string;
}

function ViewDID() {
  const did = useDid();
  const param = useParams<{ did: string }>();
  useEffect(() => {
    did.refetch();
  }, [param]);
  return (
      <div>
        <PRISMJSONView data={did.data}/>
      </div>
  );
}

export function CreateOrViewDID() {
  const {mnemonics} = useApolloState();
  const param = useParams<{ did: string }>();
  const did = useDid();
  const [typeofDid, setTypeofDid] = useState<'PRISM' | "peer">('PRISM');
  const params = useParams<{ did: string }>();
  const createPrismDidQuery = useCreatePrismDID();
  const createPeerDidQuery = useCreatePeerDID();

  const handleCreatePRISMDID = useCallback(async (seed: SDK.Domain.Seed) => {

    const privateKey = apollo.createPrivateKey({
      type: SDK.Domain.KeyTypes.EC,
      curve: SDK.Domain.Curve.SECP256K1,
      seed: Buffer.from(seed.value).toString("hex"),
    });
    await createPrismDidQuery.mutateAsync(privateKey);
  }, [createPrismDidQuery]);

  const handleCreatePeerDID = useCallback(async () => {
    await createPeerDidQuery.mutateAsync();
  }, [createPeerDidQuery]);

  const handleSubmit = useCallback<FormHandler<FormData>>(async (data) => {
    const seed = apollo.createSeed(mnemonics, data.phasePhrase);
    if (typeofDid === 'PRISM') {
      await handleCreatePRISMDID(seed);
    }
    if (typeofDid === 'peer') {
      await handleCreatePeerDID();
    }
  }, [mnemonics, typeofDid, handleCreatePRISMDID, handleCreatePeerDID]);
  const handleSelect = useCallback((type: string) => {
    setTypeofDid(type as keyof object);
  }, []);

  if (param.did !== 'create') {
    return (
        <ViewDID/>
    );
  }

  return (
      <div>
        <Icon name="reorder" size={20} color="primary" tint="600"/>
        <Typography type="display" $size="md">Create DID</Typography>
        <Typography type="text" $size="md"><>You can create as many as you want</>
        </Typography>
        <Spacer $top={40}/>
        <Form schema={schema} id="create-did" initialData={INITIAL_DATA} initialDataLoading={false}
              onSubmit={handleSubmit}>
          <Typography type="text" $color="gray" $tint="900">Select type of the DID</Typography>
          <Spacer $top={10}/>
          <Dropdown placeholder="Select a did" initialSelected="PRISM" options={['PRISM', 'peer']}
                    onSelect={handleSelect}/>
          {
              typeofDid === 'PRISM' &&
              <>
                  <Spacer $top={20}/>
                  <Input type="text" name="phasePhrase" copyEnabled={true} labelText="Phase prase"
                         placeholderText="type phase prase ..."/>
              </>
          }
        </Form>
        <Spacer $top={20}/>
        <HorizontalBox style={{justifyContent: "flex-end"}}>
          <Button type="submit" formTarget="create-did" isLoading={createPrismDidQuery.isLoading} $variant="primary"
                  text="create DID"
                  iconTrailing="check"
                  disabled={!mnemonics}/>
        </HorizontalBox>
      </div>
  );
}


export default function DIDsScreen() {
  const param = useParams<{ did: string }>();
  const peerDIDs = usePeerDIDs();
  const prismDIDs = usePrismDIDs();
  const navigate = useNavigate();
  const loading = useMemo(() => {

    // return true;
    return peerDIDs.isLoading || prismDIDs.isLoading;
  }, [peerDIDs, prismDIDs]);
  const collection = useMemo(() => {
    return loading ? Array(10).fill("_").map(item => ({
      name: makeRandomChars(10),
      badge: {text: makeRandomChars(5), isLoading: true, $kind: "gray", icon: "dot"},
      linkTo: "/",
      isLoading: true
    })) as SideNavigationCollectionItemProps[] : [...prismDIDs?.data ?? [], ...peerDIDs?.data ?? []].map((item) => ({
      badge: {
        text: item.did.method,
        isLoading: false
      },
      name: truncateDID(item.did.toString()),
      linkTo: `/wallet/dids/${item.did.toString()}`,
      isLoading: false,
      description: ""
    })) as SideNavigationCollectionItemProps[];
  }, [peerDIDs, prismDIDs, loading]);

  useEffect(() => {
    !param.did && collection?.at(0) && !collection?.at(0).isLoading && navigate(collection?.at(0).linkTo);
  }, [collection, navigate, param]);

  return (
      <WalletScreen>
        <>
          <Spacer $top={20}/>
          <StyledDIDsWrapper>
            <SideNavigation collection={collection} createButtonLink="/wallet/dids/create" name="Your DIDs"
                            notFound={{
                              description: "Looks like you don't have any PRISM or peer DID. Create your first one, and it will be listed here.",
                              title: "No dids found"
                            }}
                            createButtonText="Create DID"/>
            <CreateWrapperBox>
              <Outlet/>
            </CreateWrapperBox>
          </StyledDIDsWrapper>

        </>
      </WalletScreen>
  );
}