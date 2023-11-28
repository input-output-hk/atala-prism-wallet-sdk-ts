import { createContext, useContext } from 'react';
import { create, StoreApi, useStore } from 'zustand';
import { ValidationEntity } from './index';

export type DataType = {
  [key: string]: string | number | boolean;
};

type InputType = {
  name: string;
  value: string;
};

type FormState = {
  pristine: boolean;
  requestError: null | string;
  setRequestError: (prop: string | null) => void;
  submitted: boolean;
  initialized: boolean;
  errors: ValidationEntity[];
  data: object;
  update: (prop: InputType) => void;
  clear: () => void;
  updateErrors: (prop: ValidationEntity[]) => void;
  clearErrors: () => void;
  initialize: (prop: DataType) => void;
  setPristine: (prop: boolean) => void;
};

export const INITIAL_DATA = {
  pristine: true,
  submitted: false,
  errors: [],
  data: {},
};

const createFormStore = () =>
  create<FormState>((set) => ({
    data: {},
    pristine: true,
    initialized: false,
    requestError: null,
    submitted: false,
    errors: [],
    update(data) {
      set((prev) => ({
        ...prev,
        data: {
          ...prev.data,
          [data.name]: data.value,
        },
      }));
    },
    setPristine(bool) {
      set({
        pristine: bool,
      });
    },
    setRequestError(message) {
      set({ requestError: message });
    },
    updateErrors(errors) {
      set({ errors });
    },

    clearErrors() {
      set({ errors: [] });
    },
    clear() {
      set({ data: {}, errors: [], initialized: false });
    },
    initialize(data = {}) {
      set({
        data,
        initialized: Object.keys(data).length > 0,
      });
    },
  }));

export const FormContext = createContext<StoreApi<FormState>>(
  JSON.parse(JSON.stringify(INITIAL_DATA)),
);
export const useFormStore = (selector?: keyof FormState) => {
  const context = useContext(FormContext);
  return useStore<StoreApi<FormState>, FormState>(context, selector as never);
};

export default createFormStore;
