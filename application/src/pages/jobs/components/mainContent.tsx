
import { useJobListContext } from "../../../Context/jobListContext.provider";
import Filter from "./Filter/filter";
import JobCard from "./jobCard";
import DetailSection from "./detailSection";
import { useMediaQuery } from "react-responsive";
import "../utils/styles.css";

export default function MainContent() {
  const isMobile = useMediaQuery({ query: "(min-width : 768px)" });
  const { jobList } = useJobListContext();
  return (
    <main className="main">
      {isMobile && <Filter />}
      <section className="main-section">
        {jobList.map((job) => {
          return <JobCard key={job.id} data={job} />;
        })}
      </section>
      {isMobile && <DetailSection />}
    </main>
  );
}
