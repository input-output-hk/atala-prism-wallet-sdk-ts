import {createGlobalStyle, css} from 'styled-components';
import {ROOT_FONT_SIZE} from '../config/constants';
import fonts from './fonts';
import colors from './colors';

export const shadowXS = css`
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
`;

export const WithLoadingCSS = css`
  background: linear-gradient(to right,
  ${colors.gray['200']} 8%,
  ${colors.gray['100']} 38%,
  ${colors.gray['200']} 54%);
  border-radius: 8px;
  background-size: 400% 400%;
  -webkit-animation: gradient-loading-animation 4s ease-in-out infinite;
  -moz-animation: gradient-loading-animation 4s ease-in-out infinite;
  animation: gradient-loading-animation 4s ease-in-out infinite;
  animation-delay: 0s;
  animation-fill-mode: both;
`;

export const GlobalStyles = createGlobalStyle`
  ${fonts}
  html,
  body {
    font-size: ${ROOT_FONT_SIZE}px;
    margin: 0;
    padding: 0;
    font-family: Poppins, sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
  }


  * {
    font-family: inherit;
    box-sizing: border-box;
  }

  #root {
    height: 100%;
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
  }

  p {
    margin: 0;
  }

  @keyframes gradient-loading-animation {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 51%
    }
    100% {
      background-position: 0% 50%
    }
  }
`;
