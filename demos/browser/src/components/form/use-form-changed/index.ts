import { create } from 'zustand';

type FormRecord = Record<string, boolean>;

type UseFormChangedProps = {
  records: FormRecord | null;
  hasChanged: (prop: string) => boolean;
  update: (prop: FormRecord) => void;
};

const useFormChanged = create<UseFormChangedProps>((set, get) => ({
  records: null,
  hasChanged(prop) {
    const { records } = get();
    return !records ? false : records[prop];
  },
  update(prop) {
    const existingRecords = get().records ?? {};
    set({
      records: { ...existingRecords, ...prop },
    });
  },
}));
export default useFormChanged;
