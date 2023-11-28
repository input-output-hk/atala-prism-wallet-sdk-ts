import {StyledConnectionsScreen} from './style';
import Typography from '../../components/typography';
import useAgentState from '../../global/agent-state';
import Form, {FormHandler} from '../../components/form';
import schema from './invitation.schema.json';
import Input from '../../components/input';
import Button from '../../components/button';
import {useMutation} from 'react-query';
import {useCallback, useEffect, useMemo} from 'react';
import {useNotification} from '../../components/notification/state';
import Spacer from '../../components/spacer/spacer';
import SideNavigation, {SideNavigationCollectionItemProps} from '../../components/side-navigation';
import {Outlet, useNavigate, useParams} from 'react-router-dom';
import ReactJson from 'react-json-view';
import {truncateDID} from '../../utils';

type InputData = {
  oob: string;
}

const INITIAL_DATA = {
  oob: ""
};

function useAddConnectionQuery() {
  const {agent} = useAgentState();
  return useMutation("add-connection", async (oob: string) => {
    const invitation = await agent.parseOOBInvitation(new URL(oob));
    await agent.acceptInvitation(invitation);

    // const message = new SDK.BasicMessage({
    //   content: "Test Message"
    // }, peerDID, SDK.Domain.DID.from("did:peer:2.Ez6LSdcgH56C2pYjoKpzdsJRnqp9BdrynCXKu2gmNMGBGjRBd.Vz6MkgwCxdQ8fP1DuXyUM5FT6gCE9jmTDFgr8xc7ybvKE1uRD.SeyJ0IjoiZG0iLCJzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgxIiwiciI6W10sImEiOlsiZGlkY29tbS92MiJdfQ")).makeMessage();
    // // console.log({message});
    // return await agent.connectionManager.sendMessage(message);
  });
}

function ViewConnectionScreen() {
  const {name} = useParams<{ name: string }>();
  const {agent} = useAgentState();
  const connection = useMemo(() => {
    return agent?.connectionManager.pairings.find(item => item.name === name) ?? undefined;
  }, [agent, name]);

  useEffect(() => {
  }, [connection, agent]);
  return (
      <div>
        <Typography type="display">{name}</Typography>
        <ReactJson src={connection}/>
      </div>
  );
}

export function ViewOrAddConnectionScreen() {
  const agent = useAgentState();
  const notification = useNotification();
  const mutation = useAddConnectionQuery();
  const {name} = useParams<{ name: string }>();

  const handleSubmit = useCallback<FormHandler<InputData>>(async (data) => {
    try {
      await mutation.mutateAsync(data.oob);
    } catch (error) {
      notification.pushNotification({
        state: "error",
        message: "Wasn't able to accept invitation, please check the logs."
      });
      console.error(error);
    }

  }, [mutation, notification]);

  if (name !== 'create') {
    return <ViewConnectionScreen/>;
  }

  return (
      <div>
        <Typography type="display" $size="lg">Add invitation</Typography>
        <Typography type="text" $size="sm">Paste here the invitation</Typography>
        <Form schema={schema} initialData={INITIAL_DATA} initialDataLoading={false} onSubmit={handleSubmit}>
          <Input type="text" name="oob" copyEnabled={true} labelText="Invitation URL"
                 placeholderText="http://domain.com?oob={{very_long_hash}}"/>
          <Spacer $top={20}/>
          <Button text="Submit" type="submit" disabled={mutation.isLoading} isLoading={mutation.isLoading}/>
        </Form>
      </div>
  );
}

export default function ConnectionsScreen() {
  const {agent} = useAgentState();
  const param = useParams<{ name }>();
  const navigate = useNavigate();
  const abc = agent?.connectionManager?.pairings ?? [];
  const collection = useMemo<SideNavigationCollectionItemProps[]>(() => {
    return abc.map(item => ({
      name: item.name,
      description: `Host DID: ${truncateDID(item.host.toString())}\n Receiver DID: ${truncateDID(item.receiver.toString())}`,
      isLoading: false,
      linkTo: `/wallet/connections/${item.name}`
    })) ?? [];
  }, [abc]);
  useEffect(() => {
    param.name === undefined && navigate('/wallet/connections/create');
  }, [param, navigate]);

  return (
      <StyledConnectionsScreen>
        <SideNavigation createButtonLink="/wallet/connections/create" createButtonText="Add new invitation"
                        name="connections"
                        notFound={{title: "No connection found", description: "You don't have any connections"}}
                        collection={collection}/>
        <div style={{marginLeft: '2rem'}}>

          <Outlet/>
        </div>
      </StyledConnectionsScreen>
  );
}