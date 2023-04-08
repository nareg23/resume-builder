declare module "react-to-pdf";

interface Form {
  name: string;
  lastName: string;
  email: string;
  summary: string;
  city: string;
  phoneNum: string;
  title: string;
}

interface Job {
  id: number;
  company: string;
  title: string;
  from: string;
  to: string;
  description: string;
}

interface Skill {
  id: number;
  name: string;
  level: "1" | "2" | "3" | "4" | "5";
}

interface Education {
  id: number;
  school: string;
  from: string;
  to: string;
  description: string;
}
