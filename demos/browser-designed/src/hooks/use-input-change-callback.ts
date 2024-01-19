import { ChangeEventHandler, DependencyList, useCallback } from 'react';

type Callback<ValueType> = (props: { name: string; value: ValueType }) => void;

export default function useInputChangeCallback<ValueType>(
  callback: Callback<ValueType>,
  deps: DependencyList = [],
) {
  return useCallback<ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>>(
    ({ currentTarget }) => {
      const { name, value, type, ...rest } = currentTarget;
      const cbValue = type === 'checkbox' ? (rest as HTMLInputElement).checked : value;
      callback({ name, value: cbValue as ValueType });
    },
    [...deps],
  );
}
