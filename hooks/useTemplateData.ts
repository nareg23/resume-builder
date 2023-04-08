import useEducationStore from "@/store/useEducationStore";
import useFormStore from "@/store/useFormStore";
import useSkillsStore from "@/store/useSkillsStore";
import useWorkXpStore from "@/store/useWorkXpStore";

export default function useTemplateData() {
  const personalForm = useFormStore((state) => state.form);
  const jobs = useWorkXpStore((state) => state.jobs);
  const skills = useSkillsStore((state) => state.skills);
  const schools = useEducationStore((state) => state.schools);

  return {
    personalForm,
    jobs,
    skills,
    schools,
  };
}
