import styled from 'styled-components';
import getSize from '../../utils';

type SpacerProps = {
  $top: number; // px
};
export default styled.div<SpacerProps>`
  margin-top: ${({ $top }) => `${getSize($top)}`};
`;
