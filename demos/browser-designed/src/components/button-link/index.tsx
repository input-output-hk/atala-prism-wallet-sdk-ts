import {Link} from 'react-router-dom';
import Icon from '../icon';
import {StyledButton, StyledButtonProps} from '../button/index.style';

type CommonButton = {
  text: string;
  disabled?: boolean;
};

export type ButtonAsLinkProps = {
  to: string;
} & CommonButton &
    StyledButtonProps;

function ButtonLink({
                      text,
                      to,
                      size,
                      $destructive,
                      iconTrailing,
                      iconLeading,
                      $variant,
                      ...restOfProps
                    }: ButtonAsLinkProps) {
  return (
      <StyledButton
          to={to}
          as={Link}
          className={restOfProps.disabled || restOfProps.disabled ? "disabled" : ""}
          $disabled={restOfProps.$disabled}
          size={size ?? 'sm'}
          $variant={$variant ?? 'primary'}
          $block={restOfProps.$block}
          $destructive={$destructive ?? false}
          {...restOfProps}
      >
        {iconLeading && <Icon name={iconLeading} size={20}/>}
        {text}
        {iconTrailing && <Icon name={iconTrailing} size={20}/>}
      </StyledButton>
  );
}

export default ButtonLink;
