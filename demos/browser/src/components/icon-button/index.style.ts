import styled from 'styled-components';
import colors from '../../styles/colors';
import config from '../../config';

export type StyledIconButtonProps = {
  $variant?: 'copy';
};
export const StyledIconButton = styled.button<StyledIconButtonProps>`
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 50%;

  &:disabled {
    cursor: not-allowed;
  }

  &:not(:disabled) {
    cursor: pointer;
  }
  path {
    transition: ease-in-out ${config.motion.sm}ms;
  }
  &:hover {
    path {
      fill: ${colors.primary['400']} !important;
    }
  }
`;
