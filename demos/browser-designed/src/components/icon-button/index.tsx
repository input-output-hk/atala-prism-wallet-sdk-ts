import { MouseEventHandler } from 'react';
import Icon, { IconProps } from '../icon';
import { StyledIconButton, StyledIconButtonProps } from './index.style';

export type IconButtonProps = {
  type: 'submit' | 'button' | 'reset';
  dataName?: string;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
} & IconProps &
  StyledIconButtonProps;
export default function IconButton({
  onClick,
  type,
  disabled,
  dataName,
  $variant,
  ...iconButtonProps
}: IconButtonProps) {
  return (
    <StyledIconButton
      onClick={onClick}
      type={type}
      data-name={dataName}
      disabled={disabled}
      $variant={$variant}
    >
      <Icon {...iconButtonProps} />
    </StyledIconButton>
  );
}
