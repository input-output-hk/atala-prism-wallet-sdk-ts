import styled, { css } from 'styled-components';
import colors from '../../styles/colors';
import { RadiusXSCSS } from '../../styles/radius';
import getSize from '../../utils';
import getShadowXSFocusedCSS, { ShadowXSCSS } from '../shadow';
import Typography, { TypographyProps } from '../typography';
import { Paragraph, TextStyleProps } from '../typography/index.style';

export const InputGroup = styled.div`
  margin: 0;
  padding: 0;
  //max-width: ${getSize(320)};
`;

export type StyledInputHintProps = {
  $errored: boolean;
} & TypographyProps;

export const InputLabel = styled(Paragraph)<TextStyleProps>`
  color: ${colors.gray['900']};
  margin-bottom: ${getSize(6)};
  display: inline-block;
`;

function getInputHintColor({ $errored }: StyledInputHintProps) {
  const color = $errored ? colors.error['500'] : colors.gray['600'];
  return css`
    color: ${color};
  `;
}

export const InputHint = styled(Typography)<StyledInputHintProps>`
  ${getInputHintColor};
`;

function getInputBorderColor({ $errored }: { $errored: boolean; focused?: boolean }) {
  const color = $errored ? colors.error['500'] : colors.gray['300'];
  return css`
    border-color: ${color};
  `;
}

function getInputFocusStyle({ $errored }: { $errored: boolean }) {
  const color = $errored ? colors.error['500'] : colors.primary['300'];
  const shadow = getShadowXSFocusedCSS($errored ? 'error' : 'primary');
  return css`
    border-color: ${color};
    ${shadow}
  `;
}

export const StyledInput = styled(Paragraph)`
  &:disabled {
    cursor: not-allowed;
  }

  &:read-only {
    cursor: auto;
  }
`;

type InputWrapperProps = {
  $errored: boolean;
  $isLoading?: boolean;
};

export const InputWrapper = styled.div<InputWrapperProps>`
  margin: 0;
  padding: ${getSize(10)} ${getSize(14)};
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  gap: 0.8rem;
  ${RadiusXSCSS};

  ${getInputBorderColor}
  &:has(input:disabled) {
    background-color: ${colors.gray['50']};
    color: ${colors.gray['500']};
    ${ShadowXSCSS};
  }

  &:has(input:focus) {
    &:has(:read-write) {
      ${getInputFocusStyle}
    }
  }

  input {
    width: 100%;
    height: auto;
    border: none;
    background-color: transparent;

    &::placeholder {
      color: ${({ $isLoading }) => ($isLoading ? 'transparent' : colors.gray['500'])};
    }

    &:focus {
      outline: none;
    }
  }
`;

export type StyledTextareaProps = {
  $errored: boolean;
};

export const StyledTextarea = styled.textarea<StyledTextareaProps>`
  border: 1px solid ${colors.gray['300']};
  resize: none;
  width: 100%;
  color: ${colors.gray['900']};
  border-radius: 8px;
  aspect-ratio: 288 / 98;
  padding: ${getSize(10)};

  &:focus {
    outline: none;
    ${getInputFocusStyle}
  }
`;
