import { create } from "zustand";

interface SkillsState {
  skills: string[];
  addSkill: (skill: string) => void;
  removeSkill: (skill: string) => void;
}

const useSkillsStore = create<SkillsState>((set) => ({
  skills: [],
  addSkill: (skill: string) =>
    set((state) => {
      return {
        skills: [...state.skills, skill],
      };
    }),
  removeSkill: (skill: string) =>
    set((state) => {
      return { skills: [...state.skills].filter((el) => el !== skill) };
    }),
}));

export default useSkillsStore;
