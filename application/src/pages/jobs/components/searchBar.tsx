import React from "react";
import "../utils/styles.css";

export default function SearchBar() {
  return (
    <div className="search-bar-section">
      <div className="search-bar-wrapper">
        <input
          type="text"
          placeholder="Job title, skills, or company"
          className="job-search-input"
        />
        <input type="text" placeholder="Location" className="location-input" />
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
}
