import {Outlet} from 'react-router-dom';
import WalletMenu from '../../components/wallet-menu';
import {StyledWallet, WalletContent} from './index.style';
import Notification from '../../components/notification';
import React from 'react';

export default function WalletScreen() {

  return (
      <StyledWallet>
        <Notification/>
        <WalletMenu/>
        <WalletContent>
          <Outlet/>
        </WalletContent>
      </StyledWallet>
  );
}