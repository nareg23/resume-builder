import { create } from "zustand";

interface EducationState {
  schools: Education[];
  addSchool: () => void;
  removeSchool: (index: number) => void;
  setField: (name: string, value: string, index: number) => void;
}

const initialEducationState: Education = {
  id: 0,
  school: "",
  from: "",
  to: "",
  description: "",
};

const useEducationStore = create<EducationState>((set) => ({
  schools: [{ ...initialEducationState }],

  addSchool: () =>
    set((state) => ({
      schools: [
        ...state.schools,
        { ...initialEducationState, id: state.schools.length + 1 },
      ],
    })),

  removeSchool: (id: number) => {
    return set((state) => {
      return {
        schools: [...state.schools].filter((school) => school.id !== id),
      };
    });
  },

  setField: (name, value: string, id: number) => {
    return set((state) => {
      return {
        schools: [...state.schools].map((school: Education, i: number) => {
          if (id === school.id) return { ...school, [name]: value };
          return school;
        }),
      };
    });
  },
}));

export default useEducationStore;
