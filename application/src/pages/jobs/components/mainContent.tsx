import React from "react";
import { useJobListContext } from "../../../Context/jobListContext.provider";
import Filter from "./Filter/filter";
import JobCard from "./jobCard";
import DetailSection from "./detailSection";
import "../utils/styles.css";

export default function MainContent() {
  const { jobList } = useJobListContext();
  return (
    <main className="main">
      <Filter />
      <section className="main-section">
        {jobList.map((job) => {
          return <JobCard key={job.id} data={job} />;
        })}
      </section>
      <DetailSection />
    </main>
  );
}
