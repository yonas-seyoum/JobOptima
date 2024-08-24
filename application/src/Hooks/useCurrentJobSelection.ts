import { useState } from "react";
import { Job } from "../pages/jobs/utils/types";
import { jobs } from "../pages/jobs/utils/job.listing";

export default function useCurrentJobSelection() {
  const [currentJob, setCurrentJob] = useState<Job>(jobs[0]);
  const selectJob = (id: number) => {
    const job = jobs.find((job) => job.id === id);

    if (job) {
      setCurrentJob(job);
    }
  };

  return { currentJob, selectJob };
}
