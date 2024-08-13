import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../../styles/socials.css";
import "../../styles/hamburgerMenu.css";

export default function Socials() {
  return (
    <div id="social-holder">
      <GoogleIcon sx={{ color: "rgb(234, 67, 53)", fontSize: 30 }} />
      <FacebookIcon sx={{ color: "rgb(59, 89, 152)", fontSize: 30 }} />
      <TwitterIcon sx={{ color: "rgb(29, 161, 242);", fontSize: 30 }} />
      <GitHubIcon sx={{ color: "black", fontSize: 30 }} />
    </div>
  );
}
