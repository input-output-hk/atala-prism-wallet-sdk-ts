import { MouseEventHandler, useCallback, useMemo, useState } from 'react';
import useInputChangeCallback from '../../hooks/use-input-change-callback';
import { useFormStore } from '../form/store';
import {
  InputGroup,
  InputHint,
  InputLabel,
  InputWrapper,
  StyledInput,
  StyledTextarea,
} from './index.style';
import IconButton from '../icon-button';
import Tooltip from '../tooltip';

type Field = {
  name: string;
  value: string;
};

type InputTypes = 'text' | 'password' | 'email' | 'hidden' | 'slug';

export type InputTextProps = {
  type: InputTypes;
  name: string;
  placeholderText?: string;
  labelText?: string;
  hintText?: string;
  disabled?: boolean;
  copyEnabled?: boolean;
  isLoading?: boolean;
  readonly?: boolean;
  onChange?: (prop: Field) => void;
};

export function TypeText({
  type,
  name,
  onChange,
  hintText = '',
  labelText = '',
  isLoading = false,
  placeholderText = 'place holder',
  disabled = false,
  readonly,
  copyEnabled = false,
}: InputTextProps) {
  const { update, errors, data } = useFormStore();
  const [copyTooltipVisible, setCopyTooltipVisible] = useState<boolean>(false);
  const error = useMemo(() => errors.find((item) => item.inputName === name), [errors, name]);
  const handleTextChange = useInputChangeCallback<string>(
    (props) => {
      update(props);
      onChange && onChange(props);
    },
    [type, name, onChange, update],
  );

  const handleCopy = useCallback<MouseEventHandler<HTMLButtonElement>>(
    async (event) => {
      await navigator.clipboard.writeText(data[event.currentTarget.dataset?.name as keyof object]);
      setCopyTooltipVisible(true);
      setTimeout(() => {
        setCopyTooltipVisible(false);
      }, 1000);
    },
    [data, setCopyTooltipVisible],
  );

  return (
    <InputGroup>
      {labelText && (
        <InputLabel as="label" $size="sm" $weight="medium" htmlFor={name}>
          {labelText}
        </InputLabel>
      )}
      <InputWrapper $errored={error ? !error?.valid : false} $isLoading={isLoading}>
        <StyledInput
          as="input"
          $size="sm"
          $weight="regular"
          autoComplete="off"
          type={type}
          placeholder={placeholderText}
          $isLoading={isLoading}
          name={name}
          readOnly={readonly}
          onChange={handleTextChange}
          value={(data[name as keyof object] as string) ?? ''}
          disabled={disabled ?? false}
        />
        {copyEnabled && (
          <Tooltip open={copyTooltipVisible} content="Copied!" position="top">
            <IconButton
              type="button"
              onClick={handleCopy}
              $variant="copy"
              dataName={name}
              name="copy"
              color="gray"
              disabled={!(data[name as keyof object] as string)?.length}
              tint={(data[name as keyof object] as string)?.length ? '500' : '300'}
              size={20}
            />
          </Tooltip>
        )}
      </InputWrapper>
      <InputHint $errored={!error?.valid} $size="sm" type="text" $weight="regular">
        <>
          {error && error.message && error.message}
          {!error?.message && hintText}
        </>
      </InputHint>
    </InputGroup>
  );
}

export function TypeSlug({
  type,
  name,
  onChange,
  hintText = '',
  labelText = '',
  isLoading = false,
  placeholderText = 'place holder',
  disabled = false,
  readonly,
  copyEnabled = false,
}: InputTextProps) {
  const { update, errors, data } = useFormStore();
  const [copyTooltipVisible, setCopyTooltipVisible] = useState<boolean>(false);
  const error = useMemo(() => errors.find((item) => item.inputName === name), [errors, name]);
  const handleTextChange = useInputChangeCallback<string>(
    (props) => {
      const formattedProps = {
        name: props.name,
        // eslint-disable-next-line react/prop-types
        value: props.value.replaceAll(' ', '-').toLowerCase(),
      };
      update(formattedProps);
      onChange && onChange(formattedProps);
    },
    [type, name, onChange, update],
  );

  const handleCopy = useCallback<MouseEventHandler<HTMLButtonElement>>(
    async (event) => {
      await navigator.clipboard.writeText(data[event.currentTarget.dataset?.name as keyof object]);
      setCopyTooltipVisible(true);
      setTimeout(() => {
        setCopyTooltipVisible(false);
      }, 1000);
    },
    [data],
  );

  return (
    <InputGroup>
      {labelText && (
        <InputLabel as="label" $size="sm" $weight="medium" htmlFor={name}>
          {labelText}
        </InputLabel>
      )}
      <InputWrapper $errored={error ? !error?.valid : false} $isLoading={isLoading}>
        <StyledInput
          as="input"
          $size="sm"
          $weight="regular"
          autoComplete="off"
          type={type}
          placeholder={placeholderText}
          $isLoading={isLoading}
          name={name}
          readOnly={readonly}
          onChange={handleTextChange}
          value={(data[name as keyof object] as string) ?? ''}
          disabled={disabled ?? false}
        />
        {copyEnabled && (
          <Tooltip open={copyTooltipVisible} content="Copied!" position="top">
            <IconButton
              type="button"
              onClick={handleCopy}
              dataName={name}
              name="copy"
              color="gray"
              disabled={!(data[name as keyof object] as string)?.length}
              tint={(data[name as keyof object] as string)?.length ? '500' : '300'}
              size={20}
            />
          </Tooltip>
        )}
      </InputWrapper>
      <InputHint $errored={!error?.valid} $size="sm" type="text" $weight="regular">
        <>
          {error && error.message && error.message}
          {!error?.message && hintText}
        </>
      </InputHint>
    </InputGroup>
  );
}

type HiddenInputType = {
  type: InputTypes;
  name: string;
};

export type InputProps = InputTextProps | HiddenInputType;

export function TypeHidden(props: HiddenInputType) {
  const form = useFormStore();
  const handleChange = useInputChangeCallback<string>((props) => {
    form.update(props);
  }, []);
  return (
    <input
      style={{ height: 0 }}
      type={props.type}
      name={props.name}
      value={form.data[props.name as keyof object] ?? ''}
      onChange={handleChange}
    />
  );
}

type TextareaProps = {
  name: string;
  placeholder?: string;
};

export function InputTypeTextarea(props: TextareaProps) {
  const form = useFormStore();
  const handleChange = useInputChangeCallback<string>((props) => {
    form.update(props);
  }, []);
  return (
    <StyledTextarea
      $errored={!!form.errors?.find((item) => item.inputName === props.name)}
      placeholder={props.placeholder}
      onChange={handleChange}
      name={props.name}
      value={form.data[props.name as keyof object]}
    ></StyledTextarea>
  );
}

const map: Record<InputTypes, typeof TypeText | typeof TypeHidden> = {
  text: TypeText,
  password: TypeText,
  email: TypeText,
  hidden: TypeHidden,
  slug: TypeSlug,
};

export default function Input({ type, ...props }: InputProps) {
  const Memoized = useMemo(() => map[type], [type]);
  return <Memoized type={type} {...props} />;
}
