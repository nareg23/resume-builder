import { create } from "zustand";

interface FormStore {
  form: Form;
  setField: (name: string, value: string) => void;
}

const initialForm: Form = {
  email: "",
  lastName: "",
  name: "",
  summary: "",
  city: "",
  phoneNum: "",
};

const useFormStore = create<FormStore>((set) => ({
  form: { ...initialForm },
  setField: (name: string, value: string) =>
    set((state) => ({ form: { ...state.form, [name]: value } })),
}));

export default useFormStore;
