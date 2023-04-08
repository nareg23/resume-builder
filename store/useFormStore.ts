import { create } from "zustand";

interface FormStore {
  form: Form;
  setField: (name: string, value: string) => void;
}

const initialForm: Form = {
  email: "naregTokatlian@gmail.com",
  lastName: "Tokatlian",
  name: "Nareg",
  summary: "",
  city: "",
  phoneNum: "514 660 2308",
  title: "",
};

const useFormStore = create<FormStore>((set) => ({
  form: { ...initialForm },
  setField: (name: string, value: string) =>
    set((state) => ({ form: { ...state.form, [name]: value } })),
}));

export default useFormStore;
