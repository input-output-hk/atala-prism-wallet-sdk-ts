import {StyledScreen} from './index.style';
import {ReactElement} from 'react';

export default function Screen({children}: { children: ReactElement }) {
  return (
      <StyledScreen>
        {children}
      </StyledScreen>
  );
}