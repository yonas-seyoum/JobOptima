import { Link } from "react-router-dom";
import { useThemeContext } from "../../../Context/ThemeContextProvider";
import { routes } from "../util/constants";
import { Button } from "@mui/material";

export default function MobileMenu() {
  const { theme } = useThemeContext();

  const { primary, secondary, tertiary } = theme;
  const { homeRoute, jobsRoute, aboutUsRoute, contactUsRoute, profileRoute } =
    routes;
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        width: "70%",
        height: "100vh",
        background: "red",
      }}
    >
      <Link to={homeRoute}>
        <Button sx={{ color: secondary, fontWeight: 600 }}>Home</Button>
      </Link>
      <Link to={jobsRoute}>
        <Button sx={{ color: secondary, fontWeight: 600 }}>Jobs</Button>
      </Link>
      <Button sx={{ color: secondary, fontWeight: 600 }}>About</Button>
      <Button sx={{ color: secondary, fontWeight: 600 }}>Contact</Button>
    </div>
    // </Box>
  );
}
