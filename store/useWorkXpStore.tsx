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
}

const initialJobState = {
  company: "",
  title: "",
  from: "",
  to: "",
  description: "",
};

const useWorkXpStore = create<WorkState>((set) => ({
  jobs: [{ ...initialJobState }],
}));

export default useWorkXpStore;

// jobs [{name:'nareg,lastName:'tokat},{name:'kevo,lastName:'basmajian}]
