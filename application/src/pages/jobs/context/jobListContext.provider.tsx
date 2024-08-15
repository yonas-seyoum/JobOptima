import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { JobListContextType } from "../utils/types";
import useJobListing from "../hooks/useJobListing";

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
  const { jobList, updateFilter } = useJobListing();

  return (
    <JobListContext.Provider value={{ jobList, updateFilter }}>
      {children}
    </JobListContext.Provider>
  );
}