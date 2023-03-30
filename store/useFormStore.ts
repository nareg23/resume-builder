import { create } from "zustand";

interface Form {
  name: string;
  lastName: string;
  email: string;
  summary: string;
}
interface FormStore {
  form: Form;
  setField: (name: string, value: string) => void;
}

const initialForm: Form = {
  email: "",
  lastName: "",
  name: "",
  summary: "",
};

const useFormStore = create<FormStore>((set) => ({
  form: { ...initialForm },
  setField: (name: string, value: string) =>
    set((state) => ({ form: { ...state.form, [name]: value } })),
}));

export default useFormStore;
