import MainContent from "./components/mainContent";
import JobListContextProvider from "../../Context/jobListContext.provider";
import JobDetailContextProvider from "../../Context/jobDetailContext.provider";
import SearchBar from "./components/searchBar";

export default function Jobs() {
  return (
    <JobListContextProvider>
      <JobDetailContextProvider>
        <div className="job-app-container">
          <div className="job-app-wrapper">
            <SearchBar />
            <MainContent />
          </div>
        </div>
      </JobDetailContextProvider>
    </JobListContextProvider>
  );
}
