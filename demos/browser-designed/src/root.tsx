import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingScreen from './screens/landing';
import SettingUpScreen from './screens/setting-up';
import DIDsScreen, {CreateOrViewDID} from './screens/dids';
import {GlobalStyles} from './styles/styles';
import WalletScreen from './screens/wallet';
import MnemonicsScreen from './screens/mnemonics';
import {QueryClientProvider} from 'react-query';
import queryClient from './config/query-client';
import React from 'react';
import ConnectionsScreen, {ViewOrAddConnectionScreen} from './screens/connections';
import CredentialsScreen from './screens/credentials';

export default function Root() {
  return (
      <QueryClientProvider client={queryClient}>
        <GlobalStyles/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingScreen/>}/>
            <Route path="/wallet" element={<WalletScreen/>}>
              <Route path="/wallet/setting-up" element={<SettingUpScreen/>}/>
              <Route path="/wallet/dids" element={<DIDsScreen/>}>
                <Route path="/wallet/dids/:did" element={<CreateOrViewDID/>}/>
              </Route>
              <Route path="/wallet/mnemonics" element={<MnemonicsScreen/>}/>
              <Route path="/wallet/credentials" element={<CredentialsScreen/>}/>
              <Route path="/wallet/connections" element={<ConnectionsScreen/>}>
                <Route path="/wallet/connections/:name" element={<ViewOrAddConnectionScreen/>}/>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
  );
}