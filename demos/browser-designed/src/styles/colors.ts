import { css } from 'styled-components';

export type Color = 'base' | 'gray' | 'primary' | 'error' | 'warning' | 'success' | 'blue';
export type Tints =
  | '25'
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'white'
  | 'black';

type ColorRecord = {
  25?: string;
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
  white?: string;
  black?: string;
};
const colors: Record<Color, ColorRecord> = {
  base: {
    white: '#ffffff',
    black: '#000000',
  },
  gray: {
    '25': '#FCFCFD',
    '50': '#F9FAFB',
    '100': '#F2F4F7',
    '200': '#EAECF0',
    '300': '#D0D5DD',
    '400': '#98A2B3',
    '500': '#667085',
    '600': '#475467',
    '700': '#344054',
    '800': '#1D2939',
    '900': '#101828',
  },
  primary: {
    '25': '#FCFAFF',
    '50': '#E9E8FE',
    '100': '#C7C5FA',
    '200': '#A0A0f7',
    '300': '#767AF5',
    '400': '#5559F2',
    '500': '#3038EC',
    '600': '#2C2FE0',
    '700': '#2121D4',
    '800': '#140EC9',
    '900': '#0B00B0',
  },
  blue: {
    '25': '#F5FBFF',
    '50': '#F0F9FF',
    '100': '#E0F2FE',
    '200': '#B9E6FE',
    '300': '#7CD4FD',
    '400': '#36BFFA',
    '500': '#0BA5EC',
    '600': '#0086C9',
    '700': '#026AA2',
    '800': '#065986',
    '900': '#0B4A6F',
  },
  error: {
    25: '#FFFBFA',
    50: '#FEF3F2',
    100: '#FEE4E2',
    200: '#FECDCA',
    300: '#FDA29B',
    400: '#F97066',
    500: '#F04438',
    600: '#D92D20',
    700: '#B42318',
    800: '#912018',
    900: '#7A271A',
  },
  warning: {
    25: '#FFFCF5',
    50: '#FFFAEB',
    100: '#FEF0C7',
    200: '#FEDF89',
    300: '#FEC84B',
    400: '#FDB022',
    500: '#F79009',
    600: '#DC6803',
    700: '#B54708',
    800: '#93370D',
    900: '#7A2E0E',
  },

  success: {
    25: '#F6FEF9',
    50: '#ECFDF3',
    100: '#D1FADF',
    200: '#A6F4C5',
    300: '#6CE9A6',
    400: '#32D583',
    500: '#12B76A',
    600: '#039855',
    700: '#027A48',
    800: '#05603A',
    900: '#054F31',
  },
};

export type ColorProps = {
  $color: Color;
  $tint: Tints;
};

export function getColor(props: ColorProps) {
  return colors[props.$color as keyof typeof colors][props.$tint as keyof object];
}

export type CSSColorProps = ColorProps & {
  $property?: 'color' | 'background-color' | 'background' | 'stroke' | 'fill';
};

export function getCSSColor(props: CSSColorProps) {
  return css`
    ${props?.$property ?? 'color'}: ${colors[props.$color as keyof object][
      props.$tint as keyof object
    ]};
  `;
}

export default colors;
