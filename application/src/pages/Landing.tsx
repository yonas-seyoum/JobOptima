import * as React from "react";
import "../styles/landing.css"
import Intro from "../components/intro/intro";
import InfoSection from "../components/info-section/infoSection";

export default function Landing() {
    return (
        <>
            <Intro/>
            <InfoSection/>
        </>
    )
}