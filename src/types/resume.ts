export interface iPersonResume {
  age: string;
  birthday: string;
  avatar: string;
  github: string;
  introduce: string;
  education: Education[];
  desc: string;
  email: string;
  job_experience: JobExperience[];
  name: string;
  phone: string;
  skills: Skills[];
}

interface Education {
  degree: string;
  school: string;
  school_time: string;
}

/**
 * job_experience
 */
interface JobExperience {
  company: string;
  job_desc: string;
  position: string;
  time_slot: string;
}

/**
 * skills
 */
interface Skills {
  skill: string;
  skill_desc: string;
}
