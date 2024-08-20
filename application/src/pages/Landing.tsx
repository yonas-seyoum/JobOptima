import * as React from "react";
import "../styles/landing.css";
import Intro from "../components/intro/intro";
import InfoSection from "../components/info-section/infoSection";
import Footer from "../components/footer";
import JobDetailContextProvider from "./jobs/context/jobDetailContext.provider";
import JobListContextProvider from "./jobs/context/jobListContext.provider";
import Jobs from "./jobs/jobs";

export default function Landing() {
  return (
    <>
      <Intro />
      <JobListContextProvider>
        <JobDetailContextProvider>
          <Jobs />
        </JobDetailContextProvider>
      </JobListContextProvider>
      <InfoSection />
      <Footer />
    </>
  );
}
