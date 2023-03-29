import { create } from "zustand";

interface FormStore {
  form: {
    name: string;
    lastName: string;
  };
  setName: (name: string) => void;
  setLastName: (lastName: string) => void;
}

const useFormStore = create<FormStore>((set, get) => ({
  form: {
    name: "",
    lastName: "",
  },
  setName: (name: string) =>
    set((state) => ({ form: { ...state.form, name } })),

  setLastName: (lastName: string) =>
    set((state) => ({ form: { ...state.form, lastName } })),
}));

export default useFormStore;
