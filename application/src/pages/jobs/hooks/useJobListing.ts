import React, { useEffect, useState } from "react";
import { ExperienceLevel, Filter, Industry, Job } from "../utils/types";
import { jobs } from "../utils/job.listing";

export default function useJobListing() {
  const [jobList, setJobList] = useState<Job[]>(jobs);
  const [experienceLevels, setExperienceLevels] = useState<ExperienceLevel>([]);
  const [industry, setIndustry] = useState<Industry>([]);
  const [targetSalary, setTargetSalary] = useState<number>(0);

  const updateFilter = (filter: Filter) => {
    setIndustry(filter);
    setExperienceLevels(filter);
  };

  function updateExperienceFilter(experienceLevel: ExperienceLevel) {
    setExperienceLevels(experienceLevel);
  }

  function updateIndustryFilter(industry: Industry) {
    setIndustry(industry);
  }

  function updateSalaryFilter(salary: number) {
    setTargetSalary(salary);
  }

  function updateJobList() {
    const updatedJobList = jobs.filter((job) => {
      const experienceMatch =
        experienceLevels.length === 0 ||
        experienceLevels.includes(job.experience);
      const industryMatch =
        industry.length === 0 || industry.includes(job.industry);

      const minSalary = Number(
        job.salary.split("-")[0].replace(",", "").replace("$", "")
      );

      const maxSalary = Number(
        job.salary.split("-")[1].replace(",", "").replace("$", "")
      );

      const salaryMatch =
        targetSalary === 0 ||
        (targetSalary > minSalary && targetSalary < maxSalary);

      return experienceMatch && industryMatch && salaryMatch;
    });
    setJobList([...updatedJobList]);
  }

  useEffect(() => {
    if (
      targetSalary > 0 ||
      experienceLevels.length > 0 ||
      industry.length > 0
    ) {
      updateJobList();
    }
  }, [experienceLevels, industry, targetSalary]);

  return {
    jobList,
    updateFilter,
    updateExperienceFilter,
    updateIndustryFilter,
    updateSalaryFilter,
  };
}
