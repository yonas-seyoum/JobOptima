import React from "react";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import MainContent from "./components/mainContent";
import JobListContextProvider from "./context/jobListContext.provider";
import JobDetailContextProvider from "./context/jobDetailContext.provider";
import "./utils/styles.css";

export default function Jobs() {
  return (
    <JobListContextProvider>
      <JobDetailContextProvider>
        <div className="job-app-container">
          <div className="job-app-wrapper">
            <Header />
            <SearchBar />
            <MainContent />
          </div>
        </div>
      </JobDetailContextProvider>
    </JobListContextProvider>
  );
}
