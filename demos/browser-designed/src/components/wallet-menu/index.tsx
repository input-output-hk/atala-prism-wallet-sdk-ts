import {StyledWalletMenu} from './index.style';
import ButtonLink from '../button-link';
import Brand from '../brand';

export default function WalletMenu() {
  return (
      <StyledWalletMenu>
        <Brand/>
        <ButtonLink $variant="link-color" to="/wallet/setting-up" text="Setup"
                    iconTrailing="notification-message"/>
        <ButtonLink $variant="link-color" to="/wallet/credentials" text="Credentials"/>
        <ButtonLink $variant="link-color" to="/wallet/connections" text="Connections"/>
        <ButtonLink $variant="link-color" to="/wallet/dids" text="DIDs" iconTrailing="notification-message"/>
        <ButtonLink $variant="link-color" to="/wallet" text="Messages"
                    iconTrailing="notification-message"/>
      </StyledWalletMenu>
  );
}