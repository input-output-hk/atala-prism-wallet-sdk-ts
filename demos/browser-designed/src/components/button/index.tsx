import {MouseEventHandler} from 'react';
import Icon from '../icon';
import {StyledButton, StyledButtonProps} from './index.style';
import {SpinnerPrimary} from '../spinner';

type CommonButton = {
  text: string;
  disabled: boolean;
};

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  onClick?: MouseEventHandler;
  formTarget?: string;
} & CommonButton &
    StyledButtonProps;

function Button({
                  text,
                  disabled,
                  size,
                  $destructive,
                  iconTrailing,
                  iconLeading,
                  isLoading,
                  $variant,
                  onClick,
                  type = 'button',
                  formTarget,
                  ...restOfProps
                }: ButtonProps) {
  return (
      <StyledButton
          type={type}
          disabled={disabled}
          $disabled={disabled}
          onClick={onClick}
          size={size ?? 'sm'}
          $variant={$variant ?? 'primary'}
          form={formTarget}
          $block={restOfProps.$block}
          $destructive={$destructive ?? false}
      >
        {isLoading && (
            <SpinnerPrimary
                $size="sm"
                $color={$destructive || $variant === 'delete-outlined' ? 'error' : 'primary'}
            />
        )}
        {iconLeading && !isLoading && <Icon name={iconLeading} size={20}/>}
        {text}
        {iconTrailing && <Icon name={iconTrailing} size={20}/>}
      </StyledButton>
  );
}

export default Button;
