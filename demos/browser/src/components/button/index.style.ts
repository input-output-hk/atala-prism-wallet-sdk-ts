import styled, {css} from 'styled-components';
import motion from '../../config/motion';
import colors from '../../styles/colors';
import {shadowXS} from '../../styles/styles';
import getSize from '../../utils';
import {IconType} from '../icon';
import config from '../../config';

export type $variant =
    | 'primary'
    | 'secondary-color'
    | 'secondary-gray'
    | 'tertiary-color'
    | 'tertiary-gray'
    | 'link-color'
    | 'link-gray'
    | 'dotted-outlined-primary'
    | 'delete-outlined';
export type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type Destructive = boolean;

export type StyledButtonProps = {
  $variant?: $variant;
  size?: Size;
  $disabled?: boolean;
  $destructive?: Destructive;
  iconLeading?: IconType;
  iconTrailing?: IconType;
  $block?: boolean;
};

const BUTTON_SM_GAP = getSize(8);
const BUTTON_SM_P_X = getSize(14);
const BUTTON_SM_P_Y = getSize(8);

const BUTTON_MD_GAP = getSize(8);
const BUTTON_MD_P_X = getSize(16);
const BUTTON_MD_P_Y = getSize(10);

const BUTTON_LG_GAP = getSize(8);
const BUTTON_LG_P_X = getSize(18);
const BUTTON_LG_P_Y = getSize(10);

const BUTTON_XL_GAP = getSize(8);
const BUTTON_XL_P_X = getSize(20);
const BUTTON_XL_P_Y = getSize(12);

const BUTTON_2XL_GAP = getSize(12); // rem
const BUTTON_2XL_P_X = getSize(28); // rem
const BUTTON_2XL_P_Y = getSize(16); // rem

const sizeCSS = {
  sm: css`
    gap: ${BUTTON_SM_GAP};
    padding: ${BUTTON_SM_P_Y} ${BUTTON_SM_P_X};
  `,
  md: css`
    gap: ${BUTTON_MD_GAP};
    padding: ${BUTTON_MD_P_Y} ${BUTTON_MD_P_X};
  `,
  lg: css`
    gap: ${BUTTON_LG_GAP};
    padding: ${BUTTON_LG_P_Y} ${BUTTON_LG_P_X};
  `,
  xl: css`
    gap: ${BUTTON_XL_GAP};
    padding: ${BUTTON_XL_P_Y} ${BUTTON_XL_P_X};
  `,
  '2xl': css`
    gap: ${BUTTON_2XL_GAP};
    padding: ${BUTTON_2XL_P_Y} ${BUTTON_2XL_P_X};
  `,
};

/*
 *   Translation between the figma design and the props given:
 * - Hierarchy -> $variant
 * - Size -> size
 * - Icon leading -> iconLeading
 * - Icon trailing -> iconTrailing
 * - Destructive -> destructive
 * - ???  -> layout
 * */

// Primary button CSS
function primaryCSS($destructive?: Destructive) {
  const tints = !$destructive ? colors.primary : colors.error;

  return css`
    color: ${colors.base.white};
    background-color: ${tints[$destructive ? '600' : '400']};

    svg {
      path {
        fill: ${colors.base.white};
      }
    }

    &:hover {
      &:not(:disabled) {
        background-color: ${tints['700']};
      }
    }

    &:focus {
      border-color: ${tints['100']};
      background-color: ${tints['600']};
    }

    &:disabled,
    .disabled {
      background-color: ${tints['200']};
    }
  `;
}

// Secondary button CSS
function secondaryCSS($destructive?: Destructive) {
  const tints = !$destructive ? colors.primary : colors.error;
  return css`
    color: ${tints['700']};
    background-color: ${tints['50']};
    border-color: ${tints['50']};

    svg {
      path {
        fill: ${tints['700']};
      }
    }

    &:hover {
      &:not(:disabled) {
        color: ${tints['800']};
        background-color: ${tints['100']};
      }
    }

    &:focus {
      color: ${tints['700']};
      border-color: transparent;
      background-color: ${tints['50']};
      box-shadow: 0px 0px 0px 4px ${tints['100']},
      0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    }

    &:disabled {
      background-color: ${tints['25']};
      border-color: ${tints['25']};
      color: ${tints['300']};

      svg {
        path {
          fill: ${tints['300']};
        }
      }
    }
  `;
}

// Secondary Gray button CSS
function secondaryGrayCSS($destructive?: Destructive) {
  const tints = !$destructive ? colors.gray : colors.error;
  return css`
    color: ${tints['700']};
    background-color: ${colors.base.white};
    border-color: ${tints['300']};

    svg {
      path {
        fill: ${tints['700']};
      }
    }

    &:hover {
      &:not(:disabled) {
        color: ${tints['800']};
        background-color: ${tints['50']};

        svg {
          path {
            fill: ${tints['800']};
          }
        }
      }
    }

    &:focus {
      color: ${tints['700']};
      background-color: ${colors.base.white};
      border-color: ${tints['300']};
      box-shadow: 0px 0px 0px 4px ${tints['100']},
      0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    }

    &:disabled {
      background-color: ${colors.base.white};
      border-color: ${tints['200']};
      color: ${tints['300']};

      svg {
        path {
          fill: ${tints['300']};
        }
      }
    }
  `;
}

// Secondary button CSS
function tertiaryCSS($destructive?: Destructive) {
  const tints = !$destructive ? colors.primary : colors.error;
  return css`
    color: ${tints['400']};
    border-color: transparent;
    background-color: transparent;
    box-shadow: unset;

    svg {
      path {
        fill: ${tints['400']};
      }
    }

    &:hover {
      &:not(:disabled) {
        color: ${tints['800']};
        background-color: ${tints['50']};
        border-color: ${tints['50']};
      }

      svg {
        path {
          fill: ${tints['800']};
        }
      }
    }

    &:focus {
      color: ${tints['700']};
    }

    &:disabled {
      color: ${colors.gray['300']};

      svg {
        path {
          fill: ${colors.gray['300']};
        }
      }
    }
  `;
}

// Secondary Gray button CSS
function tertiaryGrayCSS($destructive?: Destructive) {
  const tints = !$destructive ? colors.gray : colors.error;
  return css`
    color: ${tints[$destructive ? '700' : '600']};
    background-color: ${colors.base.white};
    border-color: transparent;
    box-shadow: unset;

    svg {
      path {
        fill: ${tints[$destructive ? '700' : '600']};
      }
    }

    &:hover {
      &:not(:disabled) {
        color: ${tints[$destructive ? '800' : '700']};
        background-color: ${tints['50']};

        svg {
          path {
            fill: ${tints['700']};
          }
        }
      }
    }

    &:disabled {
      color: ${tints['300']};

      svg {
        path {
          fill: ${tints['300']};
        }
      }
    }
  `;
}

function linkColorCSS($destructive?: Destructive) {
  const tints = !$destructive ? colors.primary : colors.error;
  return css`
    padding: 0;
    color: ${tints[$destructive ? '700' : '400']};
    background-color: ${colors.base.white};
    border-color: transparent;
    box-shadow: unset;

    svg {
      path {
        fill: ${tints[$destructive ? '700' : '400']};
      }
    }

    &:hover {
      &:not(:disabled) {
        color: ${tints['800']};

        svg {
          path {
            fill: ${tints['800']};
          }
        }
      }
    }

    &:focus {
      &:not(:disabled) {
        color: ${tints['700']};

        svg {
          path {
            fill: ${tints['700']};
          }
        }
      }
    }

    &:disabled {
      color: ${tints['300']};

      svg {
        path {
          fill: ${tints['300']};
        }
      }
    }
  `;
}

function linkGrayCSS($destructive?: Destructive) {
  const tints = !$destructive ? colors.gray : colors.error;
  return css`
    padding: 0;
    color: ${tints[$destructive ? '700' : '600']};
    background-color: ${colors.base.white};
    border-color: transparent;
    box-shadow: unset;

    svg {
      path {
        fill: ${tints[$destructive ? '700' : '600']};
      }
    }

    &:hover {
      &:not(:disabled) {
        color: ${tints['800']};

        svg {
          path {
            fill: ${tints['800']};
          }
        }
      }
    }

    &:focus {
      &:not(:disabled) {
        color: ${tints['700']};

        svg {
          path {
            fill: ${tints['700']};
          }
        }
      }
    }

    &:disabled {
      color: ${tints['300']};

      svg {
        path {
          fill: ${tints['300']};
        }
      }
    }
  `;
}

function getDashedOutlinedCSS() {
  return css`
    color: ${colors.primary['400']};
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%235559F2FF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
    transition: all ease-in-out ${config.motion.sm}ms;
    background-repeat: no-repeat;
    justify-content: center;
    background-size: cover;
    border: none;
    fill: ${colors.primary['400']};

    path {
      transition: all ease-in-out ${config.motion.sm}ms;
    }

    &:hover {
      background-image: unset;
      background-color: ${colors.primary['500']};
      color: ${colors.base.white};

      path {
        fill: ${colors.base.white};
      }
    }
  `;
}

function getDeleteOutlinedCSS() {
  return css`
    gap: 0.7rem;
    border: 1px solid ${colors.error['500']};
    color: ${colors.error['500']};
    background-color: ${colors.base.white};

    path {
      fill: ${colors.error['500']};
    }

    &:hover {
      background-color: ${colors.error['50']};
    }

    &:focus {
      background-color: ${colors.error['100']};
    }
  `;
}

function getVariantCSS({$variant = 'primary', $destructive}: StyledButtonProps) {
  let css;
  switch ($variant) {
    case 'primary':
      css = primaryCSS($destructive);
      break;
    case 'secondary-color':
      css = secondaryCSS($destructive);
      break;
    case 'secondary-gray':
      css = secondaryGrayCSS($destructive);
      break;
    case 'tertiary-color':
      css = tertiaryCSS($destructive);
      break;
    case 'tertiary-gray':
      css = tertiaryGrayCSS($destructive);
      break;

    case 'link-color':
      css = linkColorCSS($destructive);
      break;
    case 'link-gray':
      css = linkGrayCSS($destructive);
      break;

    case 'dotted-outlined-primary':
      css = getDashedOutlinedCSS();
      break;
    case 'delete-outlined':
      css = getDeleteOutlinedCSS();
      break;
    default:
      throw new Error(`No CSS found for case: ${$variant}`);
  }
  return css;
}

function getSizeCSS({size = 'sm'}: StyledButtonProps) {
  return sizeCSS[size];
}

function getBlockCSS({$block}: StyledButtonProps) {
  return css`
    display: ${$block ? 'flex' : 'inline-flex'};
    width: ${$block ? '100%' : 'initial'};
    justify-content: ${$block ? 'center' : 'initial'};
  `;
}

export const StyledButton = styled.button<StyledButtonProps>`
  margin: 0;
  border-radius: ${getSize(8)};
  border-width: 1px;
  border-style: solid;
  font-weight: 600;
  align-items: center;
  border-color: transparent;
  cursor: pointer;
  transition: all ease-in-out ${motion.sm}ms;
  text-decoration: none;

  ${getBlockCSS}
  path {
    transition: fill ease-in-out ${motion.sm}ms;
  }

  ${shadowXS};
  ${getSizeCSS};
  ${getVariantCSS};
`;
