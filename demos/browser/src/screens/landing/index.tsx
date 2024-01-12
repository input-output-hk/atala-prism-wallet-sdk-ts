import Screen from '../../components/screen';
import Typography from '../../components/typography';
import {HorizontalBox, LandingBox} from './index.style';
import ButtonLink from '../../components/button-link';
import Spacer from '../../components/spacer/spacer';

export default function LandingScreen() {
  return (
      <Screen>
        <LandingBox>
          <Typography type="display" $size="xl" $weight="semibold"><>Welcome to <br/><>wallet
            demo
          </>
          </>
          </Typography>
          <Spacer $top={30}/>
          <HorizontalBox>
            <ButtonLink to="/wallet/setting-up" text="Setup things"/>
            <ButtonLink to="https://docs.atalaprism.io" $variant="tertiary-gray" text="Read the docs"
                        iconTrailing="link-external"/>
          </HorizontalBox>
        </LandingBox>
      </Screen>
  );
}