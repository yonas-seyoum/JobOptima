
import "../../styles/hero.css";
import { useMediaQuery } from "react-responsive";
import HamburgerMenu from "./hamburgerMenu";
import logo from "../../pages/new logo.png";

export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: "768px" });
  return (
    <div className="hero-container">
      <div className="hero-logo">
        <div>
          <img src={logo} alt="logo"/>
        </div>
        {isMobile && <HamburgerMenu />}
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Find Your Dream Job Today</h1>
        <h2 className="hero-subtitle">
          Connecting talent with opportunity - Start your journey with us.
        </h2>
        <div className="box">
          <div className="hero-search">
            <input
              type="text"
              className="search-input"
              placeholder="Job title, skills, or company"
            />
            <input
              type="text"
              className="location-input"
              placeholder="Location"
            />
            <button className="search-button">Search</button>
          </div>
          {!isMobile && (
            <div className="hero-buttons">
              <button className="cta-primary">Find Jobs</button>
              <button className="cta-secondary">Post a Job</button>
            </div>
          )}
          <p className="supporting-text">
            Over 10,000 jobs listed every day. Join now to discover your next
            opportunity!
          </p>
        </div>
      </div>
    </div>
  );
}
