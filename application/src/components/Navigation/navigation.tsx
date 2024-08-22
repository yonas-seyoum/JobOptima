import { Link } from "react-router-dom";
import { routes } from "./util/constants";
export default function Navigation() {
  const { homeRoute, jobsRoute, aboutUsRoute, contactUsRoute, profileRoute } =
    routes;
  return (
    <>
      <Link to={homeRoute}>Home</Link>
      <Link to={jobsRoute}>Jobs</Link>
      <Link to={aboutUsRoute}>About Us</Link>
      <Link to={contactUsRoute}>Contact Us</Link>
      <Link to={profileRoute}>Profile</Link>
    </>
  );
}
