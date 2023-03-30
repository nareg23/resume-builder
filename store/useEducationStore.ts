import { create } from "zustand";

interface Education {
  id: number;
  school: string;
  from: string;
  to: string;
  description: string;
}

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
        { ...initialEducationState, id: state.schools.length },
      ],
    })),

  removeSchool: (id: number) => {
    return set((state) => {
      return {
        schools: [...state.schools].filter((school) => school.id !== id),
      };
    });
  },

  setField: (name = "", value: string, index: number) => {
    return set((state) => {
      return {
        schools: [...state.schools].map((job: Education, i: number) => {
          if (index === i) return { ...job, [name]: value };
          return job;
        }),
      };
    });
  },
}));

export default useEducationStore;
