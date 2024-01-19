import { css } from 'styled-components';
import colors from '../../styles/colors';

export const ShadowXSCSS = css`
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
`;

export const ShadowLGCSS = css`
  box-shadow:
    0px 4px 6px -2px rgba(16, 24, 40, 0.03),
    0px 12px 16px -4px rgba(16, 24, 40, 0.08);
`;

export default function getShadowXSFocusedCSS(color = 'primary' as 'primary' | 'error') {
  const tints = colors[color][color === 'error' ? '100' : '50'];
  return css`
    box-shadow:
      0px 0px 0px 4px ${tints},
      0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  `;
}
