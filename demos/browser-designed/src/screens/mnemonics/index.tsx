import WalletScreen from '../../components/wallet-screen';
import Typography from '../../components/typography';
import ButtonLink from '../../components/button-link';
import {CommonWrapperBox} from '../setting-up/index.style';
import Spacer from '../../components/spacer/spacer';
import Icon from '../../components/icon';
import React from 'react';
import useApolloState from '../../global/apollo-state';
import Badge from '../../components/badge';
import {MnemonicsWrapper} from './index.style';
import {HorizontalBox} from '../landing/index.style';
import Button from '../../components/button';

export default function MnemonicsScreen() {
  const {mnemonics, createMnemonics} = useApolloState();
  return (
      <WalletScreen>
        <CommonWrapperBox>
          <Spacer $top={60}/>
          <Icon name="reorder" size={20} color="primary" tint="600"/>
          <Typography type="display" $size="lg">Create your mnemonics</Typography>
          <Typography type="text" $size="md"><>No need to save them, you can always find them in <ButtonLink
              to="/wallet/mnemonics" $variant="link-color" text="here"/></>
          </Typography>
          <Spacer $top={40}/>
          <MnemonicsWrapper>
            {
              mnemonics.map(item => (
                  <Badge text={item} $kind="primary" key={item}/>
              ))
            }

          </MnemonicsWrapper>
          <Spacer $top={40}/>
          <HorizontalBox style={{justifyContent: "flex-end"}}>
            <Button text="Regenerate" iconTrailing="reorder" disabled={false} onClick={createMnemonics}/>
            <ButtonLink to="/wallet/dids" $variant="secondary-color" text="Continue"
                        disabled={!mnemonics}/>
          </HorizontalBox>
        </CommonWrapperBox>
      </WalletScreen>
  );
}