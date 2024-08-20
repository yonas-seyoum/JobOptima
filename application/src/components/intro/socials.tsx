
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../../styles/socials.css";
import "../../styles/hamburgerMenu.css";

export default function Socials() {
  return (
    <div id="social-holder">
      <GoogleIcon sx={{ color: "white", fontSize: 30 }} />
      <FacebookIcon sx={{ color: "white", fontSize: 30 }} />
      <TwitterIcon sx={{ color: "white", fontSize: 30 }} />
      <GitHubIcon sx={{ color: "white", fontSize: 30 }} />
    </div>
  );
}
