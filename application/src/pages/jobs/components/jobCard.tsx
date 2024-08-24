import React from "react";
import { useJobDetailContext } from "../../../Context/jobDetailContext.provider";
import { JobCardProps } from "../utils/types";

export default function JobCard({ data }: JobCardProps) {
  const { position, location, company, logo, id } = data;
  const { selectJob } = useJobDetailContext();

  const handleSelectJob = () => {
    selectJob(id);
  };
  return (
    <div className="card" onClick={handleSelectJob}>
      <img src={logo} alt="Company Logo" className="company-logo" />
      <div className="card-content">
        <h2>{position}</h2>
        <p className="company-name">{company}</p>
        <p className="location-name">{location}</p>
      </div>
    </div>
  );
}
