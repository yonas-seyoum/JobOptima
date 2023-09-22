import * as React from "react";
import Hero from './hero';
import "../../styles/landing.css"
import Socials from "./socials";

export default function Intro() {
    return (
        <div className="screen">
            <Socials />
            <Hero />
        </div>
    )
}