import {FormEventHandler, ReactElement, useCallback, useEffect, useState} from 'react';
import {addSchema, validate} from '@hyperjump/json-schema/draft-2020-12';
import {SchemaObject} from '@hyperjump/json-schema/lib/schema';
import {OutputUnit} from '@hyperjump/json-schema';
import {StyledForm} from './index.style';
import createFormStore, {DataType, FormContext, useFormStore} from './store';
import useFormChanged from './use-form-changed';
import Typography from '../typography';
import Spacer from '../spacer/spacer';
import {messages} from './messages';
import {hasObjectChanged} from '../../utils';

export type FormHandler<ExpectedData> = (prop: ExpectedData) => Promise<void>;

type FormProps<Type> = {
  onSubmit?: FormHandler<Type>;
  children: ReactElement | ReactElement[];
  schema: SchemaObject;
  initialData: DataType;
  initialDataLoading: boolean;
  onFormChanged?: (prop: boolean) => void;
  id?: string;
};

export type ValidationEntity = {
  valid: boolean;
  message: string | null;
  inputName: string;
};

type TransformedOutputUnit = {
  message: string | null;
  errors: TransformedOutputUnit[] | [];
} & Omit<OutputUnit, 'errors'>;

// zSchema.setSchemaReader()
function FormUI<Type>({
                        onSubmit,
                        children,
                        schema,
                        initialData,
                        initialDataLoading,
                        onFormChanged,
                        id,
                      }: FormProps<Type>) {
  const {
    updateErrors,
    clearErrors,
    data,
    initialize,
    initialized,
    clear,
    setPristine,
    requestError,
    setRequestError,
  } = useFormStore();
  const {update} = useFormChanged();
  const transformOutputUnit = useCallback(
      (outputUnit: OutputUnit): TransformedOutputUnit => ({
        ...outputUnit,
        message: outputUnit.valid ? null : 'Invalid',
        errors: outputUnit?.errors?.map(transformOutputUnit) || [],
      }),
      [],
  );
  const getMessage = useCallback((ruleType: string, ruleValue: string | number) => {
    switch (ruleType) {
      case 'pattern':
        return messages[ruleValue as keyof object];
      case 'minLength':
        return ruleValue === 1
            ? messages.required
            : messages.minLength.replace('{{count}}', `${ruleValue}`);
      default:
        return 'This field is invalid';
    }
  }, []);

  const parseAbsoluteLocation = useCallback(
      (absoluteLocation: string) => {
        const path = absoluteLocation.split('#')?.at(-1);
        if (!path) {
          throw new Error('Unable to find path');
        }
        const keys = path
            .split('/')
            .map((key) => (Number.isNaN(parseInt(key, 10)) ? key : parseInt(key, 10)));
        keys.shift();

        let valueOF = JSON.parse(JSON.stringify(schema));
        keys.forEach((key) => {
          valueOF = valueOF[key];
        });
        return {
          key: keys.at(-1) ?? '',
          value: valueOF,
        };
      },
      [schema],
  );

  const inputWithValidationMessages = useCallback(
      (input: OutputUnit) => {
        const transformedOutput = transformOutputUnit(input);

        function findError(currentInput: string, output: TransformedOutputUnit) {
          const locations = output.instanceLocation.split('/');

          if (locations.at(-1) === currentInput) {
            return output;
          }

          if (locations.at(-1) !== currentInput && output.errors.length) {
            let err: TransformedOutputUnit | null = null;
            output.errors.forEach((error) => {
              const value = findError(currentInput, error);
              if (value) {
                err = value.errors.at(0) || value;
              }
            });
            return err;
          }
          return null;
        }

        function mapErrors(current: string) {
          const error = findError(current, transformedOutput);
          const rule = error && parseAbsoluteLocation(error.absoluteKeywordLocation);
          return {
            inputName: current,
            valid: error?.valid ?? true,
            message: rule ? getMessage(`${rule.key}`, rule.value) : null,
            ruleName: rule?.key,
            ruleValue: rule?.value,
          };
        }

        return Object.keys(data).map<ValidationEntity>(mapErrors);
      },
      [data, getMessage, parseAbsoluteLocation, transformOutputUnit],
  );

  const validateForm = useCallback(async () => {
    addSchema(schema);
    const outputUnit = await validate(schema.$id as string, data, 'DETAILED');
    const errors = inputWithValidationMessages(outputUnit);
    if (outputUnit.valid) {
      clearErrors();
    } else {
      updateErrors(errors);
    }
    return outputUnit.valid;
  }, [data, schema, updateErrors, clearErrors, inputWithValidationMessages]);

  const handleSubmit = useCallback<FormEventHandler>(
      async (event) => {
        event.preventDefault();
        let valid = true;
        try {
          valid = await validateForm();
        } catch (err) {
          valid = false;
          setRequestError('Form invalid.');
        }
        if (valid) {
          setRequestError(null);
          onSubmit && (await onSubmit(data as Type));
          // clear();
        }
      },
      [validateForm, setRequestError, onSubmit, data],
  );

  const handleOnBlur = useCallback(() => {
    validateForm();
  }, [validateForm]);

  useEffect(() => {
    if (initialDataLoading) {
      clear();
    }
  }, [clear, initialDataLoading]);

  useEffect(() => {
    if (initialized) {
      update({
        'edit-agent': hasObjectChanged(data, initialData),
      });
    }
  }, [data, initialData, initialized, update]);

  const handleReset = useCallback<FormEventHandler>(
      async (event) => {
        event.preventDefault();
        initialize(initialData);
        clearErrors();
      },
      [initialize, initialData, clearErrors],
  );

  const didFormChanged = useCallback(
      () =>
          !Object.keys(initialData)
              .map((key) => data[key as keyof object] === initialData[key])
              .find((item) => item),
      [initialData, data],
  );

  useEffect(() => {
    if (initialized) {
      const changed = didFormChanged();
      setPristine(changed);
      onFormChanged && onFormChanged(changed);
    }
  }, [data, initialData, initialized]);

  useEffect(() => {
    !initialDataLoading && initialize(JSON.parse(JSON.stringify(initialData)));
  }, [initialize, initialData, initialDataLoading]);

  return (
      <>
        {requestError && (
            <>
              <Typography type="text" $color="error" $tint="500">
                <>
                  <strong>Server error</strong>
                  {`: ${requestError}`}
                </>
              </Typography>
              <Spacer $top={10}/>
            </>
        )}
        <StyledForm onSubmit={handleSubmit} onBlur={handleOnBlur} id={id} onReset={handleReset}>
          {children}
        </StyledForm>
      </>
  );
}

export default function Form<Type>({children, ...props}: FormProps<Type>) {
  const [store] = useState(() => createFormStore());
  return (
      <FormContext.Provider value={store}>
        <FormUI {...props}>{children}</FormUI>
      </FormContext.Provider>
  );
}
