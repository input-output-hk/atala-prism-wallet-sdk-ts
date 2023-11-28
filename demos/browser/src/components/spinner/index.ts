import styled, { css } from 'styled-components';
import colors, { Color } from '../../styles/colors';
import getSize from '../../utils';

function getCommonSpinnerCSS() {
  return css`
    border-color: transparent;
    border-style: solid;
    border-radius: 50%;
    -webkit-animation: rotating 2s linear infinite;
    -moz-animation: rotating 2s linear infinite;
    -ms-animation: rotating 2s linear infinite;
    -o-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;

    @keyframes rotating {
      from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  `;
}

function getSpinnerSizeCSS({ $size = 'md' }: { $size?: 'xs' | 'sm' | 'md' }) {
  let sizeCSS;
  switch ($size) {
    case 'xs':
      sizeCSS = css`
        width: 0.5rem;
        height: 0.5rem;
        border-width: 4px;
      `;
      break;
    case 'sm':
      sizeCSS = css`
        width: ${getSize(20)};
        height: ${getSize(20)};
        border-width: 4px;
      `;
      break;

    case 'md':
      sizeCSS = css`
        width: 2rem;
        height: 2rem;
        border-width: 4px;
      `;
      break;
    default:
      throw new Error(`The size ${$size} does not exist, please create it.`);
  }
  return sizeCSS;
}

function getSpinnerColorCSS({ $color = 'primary' }: { $color?: Color }) {
  if (!colors[$color as keyof object]['300']) {
    throw new Error(`Color does not exist: ${$color}`);
  }
  return css`
    border-top-color: ${colors[$color as keyof object]['300']};
    border-bottom-color: ${colors[$color as keyof object]['300']};
  `;
}

type SpinnerType = {
  $color?: Color;
  $size?: 'xs' | 'sm' | 'md';
};

export const SpinnerPrimary = styled.div<SpinnerType>`
  ${getCommonSpinnerCSS}
  ${getSpinnerSizeCSS}
  ${getSpinnerColorCSS}
`;
