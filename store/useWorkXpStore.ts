import { create } from "zustand";

interface WorkState {
  jobs: Job[];
  addJob: () => void;
  removeJob: (index: number) => void;
  setField: (name: string, value: string, index: number) => void;
}

const initialJobState: Job = {
  id: 0,
  title: "",
  company: "",
  from: "",
  to: "",
  description: "",
};

const useWorkXpStore = create<WorkState>((set) => ({
  jobs: [{ ...initialJobState }],

  addJob: () =>
    set((state) => ({
      jobs: [...state.jobs, { ...initialJobState, id: state.jobs.length + 1 }],
    })),

  removeJob: (index: number) => {
    return set((state) => {
      return {
        jobs: [...state.jobs].filter((_, i) => i !== index),
      };
    });
  },

  setField: (name = "", value: string, id: number) => {
    return set((state) => {
      return {
        jobs: [...state.jobs].map((job: Job) => {
          if (id === job.id) return { ...job, [name]: value };
          return job;
        }),
      };
    });
  },
}));

export default useWorkXpStore;
