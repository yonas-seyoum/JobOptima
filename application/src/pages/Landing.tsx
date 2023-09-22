import * as React from "react";
import "../styles/landing.css"
import Intro from "../components/intro/intro";
import InfoSection from "../components/info-section/infoSection";
import Nav from "../components/intro/nav";
import JobsPreview from "../components/jobs/jobsPreview";

export default function Landing() {
    return (
        <>
            <Nav/>
            <Intro/>
            <JobsPreview/>
            <InfoSection/>
        </>
    )
}