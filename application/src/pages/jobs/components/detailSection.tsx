import React from "react";
import { useJobDetailContext } from "../context/jobDetailContext.provider";
import JobCard from "./jobCard";
import "../utils/styles.css";

export default function DetailSection() {
  const { currentJob } = useJobDetailContext();

  return (
    <aside className="detail-section-holder">
      <JobCard data={currentJob} />
    </aside>
  );
}
