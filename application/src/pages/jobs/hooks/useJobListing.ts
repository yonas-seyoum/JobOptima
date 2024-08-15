import React, { useEffect, useState } from "react";
import { Filter, Job } from "../utils/types";
import { jobs } from "../utils/job.listing";

export default function useJobListing() {
  const [jobList, setJobList] = useState<Job[]>(jobs);
  const [experienceLevels, setExperienceLevels] = useState<string[]>([]);

  const updateFilter = (filter: Filter) => {
    setExperienceLevels(filter);
  };

  useEffect(() => {
    console.log(experienceLevels);
    const updatedJobList =
      experienceLevels.length === 0
        ? jobs
        : jobs.filter((job) => experienceLevels.includes(job.experience));
    setJobList([...updatedJobList]);
  }, [experienceLevels]);

  return { jobList, updateFilter };
}
