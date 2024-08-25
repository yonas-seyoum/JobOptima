import { createContext, ReactNode, useContext } from "react";
import { JobListContextType } from "../pages/jobs/utils/types";
import useJobListing from "../Hooks/useJobListing";

export const JobListContext = createContext<JobListContextType | undefined>(
  undefined
);

export const useJobListContext = () => {
  const jobs = useContext(JobListContext);
  if (jobs === undefined) {
    throw new Error("Come'on");
  }
  return jobs;
};

export default function JobListContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const {
    jobList,
    updateFilter,
    updateExperienceFilter,
    updateIndustryFilter,
    updateSalaryFilter,
    updateJobTypeFilter,
    updateWorkTypeFilter,
  } = useJobListing();

  return (
    <JobListContext.Provider
      value={{
        jobList,
        updateFilter,
        updateExperienceFilter,
        updateIndustryFilter,
        updateSalaryFilter,
        updateJobTypeFilter,
        updateWorkTypeFilter,
      }}
    >
      {children}
    </JobListContext.Provider>
  );
}
