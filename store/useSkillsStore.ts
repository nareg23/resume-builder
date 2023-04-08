import { create } from "zustand";

interface SkillsState {
  skills: Skill[];
  addSkill: () => void;
  removeSkill: (id: number) => void;
  setField: (name: string, value: string, id: number) => void;
}

const initialSkill: Skill = {
  id: 0,
  name: "",
  level: "5",
};

const useSkillsStore = create<SkillsState>((set) => ({
  skills: [{ ...initialSkill }],
  addSkill: () =>
    set((state) => {
      return {
        skills: [
          ...state.skills,
          { ...initialSkill, id: [...state.skills].length },
        ],
      };
    }),
  removeSkill: (id: number) =>
    set((state) => {
      return { skills: [...state.skills].filter((skill) => skill.id !== id) };
    }),

  setField: (name, value, id) =>
    set((state) => {
      return {
        skills: [...state.skills].map((skill: Skill) => {
          if (skill.id === id) return { ...skill, [name]: value };
          return skill;
        }),
      };
    }),
}));

export default useSkillsStore;
