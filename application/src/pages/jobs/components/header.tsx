import React from "react";
import { Notifications, Person } from "@mui/icons-material";
import logo from "../../new logo.png";
import "../utils/styles.css";

export default function Header() {
  return (
    <header className="header-holder">
      <div className="header-wrapper">
        <img className="logo" src={logo} alt="Logo" />
        <h1>Job Optima</h1>
      </div>
      <div className="header-util">
        <Notifications
          sx={{ width: "2rem", height: "2rem", paddingRight: "1em" }}
        />
        <Person sx={{ width: "2rem", height: "2rem" }} />
      </div>
    </header>
  );
}
