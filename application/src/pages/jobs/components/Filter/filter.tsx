import React from "react";
import {
  FilterContainer,
  Title,
} from "../../styled-components/styledComponents";
import JobType from "./jobType";
import Location from "./location";
import WorkType from "./workType";
import SalaryRange from "./salaryRange";
import Industry from "./industry";
import ExperienceLevel from "./experienceLevel";

export default function FilterCo() {
  return (
    <FilterContainer>
      <Title>Filter</Title>
      <JobType />
      <Location />
      <WorkType />
      <SalaryRange />
      <Industry />
      <ExperienceLevel />
    </FilterContainer>
  );
}
