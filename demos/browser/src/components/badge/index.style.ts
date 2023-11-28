import styled from 'styled-components';
import {Color, getCSSColor} from '../../styles/colors';

export type BadgeWrapperProps = {
  $kind: Color;
};
export const BadgeWrapper = styled.span<BadgeWrapperProps>`
  border-radius: 16px;
  mix-blend-mode: multiply;
  display: inline-flex;
  padding: 4px 10px 4px 10px;
  align-items: center;
  gap: 4px;

  ${(props) =>
          getCSSColor({
            $color: props?.$kind ?? 'gray',
            $tint: props.$kind === 'primary' ? '50' : '100',
            $property: 'background',
          })}
  svg {
    path {
      ${(props) => getCSSColor({$color: props.$kind ?? "gray", $tint: '500', $property: 'fill'})}
    }
  }
`;
