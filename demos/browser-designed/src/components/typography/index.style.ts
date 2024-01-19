import styled, { css } from 'styled-components';
import getSize from '../../utils';
import { DisplaySize, TextSize, Weight } from './index';
import { ColorProps, getColor } from '../../styles/colors';
import { WithLoadingCSS } from '../../styles/styles';

export const PARAGRAPH_SIZES = {
  xl: getSize(20),
  lg: getSize(18),
  md: getSize(15),
  sm: getSize(14),
  xs: getSize(12),
};

export const FONT_WEIGHTS = {
  bold: '700',
  regular: '400',
  medium: '500',
  semibold: '600',
};

export const HEADING_SIZES = {
  '2xl': getSize(72),
  xl: getSize(60),
  lg: getSize(48),
  md: getSize(36),
  sm: getSize(30),
  xs: getSize(24),
};

export type LoadingStyleProps = {
  $isLoading?: boolean;
};

export type DisplayStyleProps = {
  $size: DisplaySize;
  $weight: Weight;
} & Partial<ColorProps> &
  LoadingStyleProps;

export type TextStyleProps = {
  $size: TextSize;
  $weight: Weight;
} & Partial<ColorProps> &
  LoadingStyleProps;

export function getTextColor(props: Partial<ColorProps>) {
  return css`
    color: ${!props.$color || !props.$tint
      ? 'inherit'
      : getColor({ $color: props.$color, $tint: props.$tint })};
  `;
}

export function getDisplaySize(props: DisplayStyleProps) {
  return css`
    font-size: ${HEADING_SIZES[props.$size]};
  `;
}

export function getTextSize(props: TextStyleProps) {
  return css`
    font-size: ${PARAGRAPH_SIZES[props.$size ?? 'sm']};
  `;
}

export type GetWeightProps = {
  $weight: Weight;
};

export function getWeight(props: GetWeightProps) {
  return css`
    font-weight: ${FONT_WEIGHTS[props.$weight ?? 'regular']};
  `;
}

export function getLoadingCSS(props: LoadingStyleProps) {
  if (!props.$isLoading) {
    return '';
  }
  return css`
    display: inline-block;
    color: transparent;

    ${WithLoadingCSS};
  `;
}

export const StyledHeading = styled.h1<DisplayStyleProps>`
  margin: 0;
  padding: 0;
  ${getTextColor}
  ${getDisplaySize};
  ${getWeight};
  ${getLoadingCSS};
`;

export const Paragraph = styled.p<TextStyleProps>`
  margin: 0;
  padding: 0;
  ${getTextColor};
  ${getTextSize};
  ${getWeight};
  ${getLoadingCSS};
`;
