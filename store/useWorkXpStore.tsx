import { create } from "zustand";

interface Job {
  company: string;
  title: string;
  from: string;
  to: string;
  description: string;
}

interface WorkState {
  jobs: Job[];
  addJob: () => void;
  removeJob: (index: number) => void;
  setField: (name: string, value: string, index: number) => void;
}

const initialJobState: Job = {
  company: "",
  title: "",
  from: "",
  to: "",
  description: "",
};

const useWorkXpStore = create<WorkState>((set) => ({
  jobs: [{ ...initialJobState }],

  addJob: () =>
    set((state) => ({ jobs: [...state.jobs, { ...initialJobState }] })),

  removeJob: (index: number) => {
    return set((state) => {
      return {
        jobs: [...state.jobs].filter((job, i) => i !== index),
      };
    });
  },

  setField: (name = "", value: string, index: number) => {
    return set((state) => {
      return {
        jobs: [...state.jobs].map((job: Job, i: number) => {
          if (index === i) return { ...job, [name]: value };
          return job;
        }),
      };
    });
  },
}));

export default useWorkXpStore;

// jobs [{name:'nareg,lastName:'tokat},{name:'kevo,lastName:'basmajian}]
