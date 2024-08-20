import React from "react";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import MainContent from "./components/mainContent";
import "./utils/styles.css";

export default function Jobs() {
  return (
    <div className="job-app-container">
      <div className="job-app-wrapper">
        <Header />
        <SearchBar />
        <MainContent />
      </div>
    </div>
  );
}
