import React, { createContext, ReactNode, useContext, useState } from "react";
import { JobDetailContextType } from "../utils/types";
import useCurrentJobSelection from "../hooks/useCurrentJobSelection";

const JobDetailContext = createContext<JobDetailContextType | undefined>(
  undefined
);

export const useJobDetailContext = () => {
  const result = useContext(JobDetailContext);
  if (result === undefined) {
    throw new Error("Incorrect config");
  }
  return result;
};

export default function JobDetailContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { currentJob, selectJob } = useCurrentJobSelection();
  return (
    <JobDetailContext.Provider value={{ currentJob, selectJob }}>
      {children}
    </JobDetailContext.Provider>
  );
}
