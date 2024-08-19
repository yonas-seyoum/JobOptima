export type Job = {
  id: number;
  position: string;
  company: string;
  jobType: string;
  workType: string;
  industry: string;
  experience: string;
  description: {
    responsibility: string;
    qualification: string;
    benefits: string;
    aboutCompany: string;
  };
  salary: string;
  logo: string;
  location: string;
  deadline: string;
};

export type Filter = ExperienceLevel | Industry;
export type ExperienceLevel = string[];
export type Industry = string[];

export type JobDetailContextType = {
  currentJob: Job;
  selectJob: (id: number) => any;
};

export type JobListContextType = {
  jobList: Job[];
  updateFilter: (filter: Filter) => any;
  updateExperienceFilter: (experience: ExperienceLevel) => any;
  updateIndustryFilter: (industry: Industry) => any;
  updateSalaryFilter: (salary: number) => any;
};
