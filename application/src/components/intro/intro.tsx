import * as React from "react";
import Nav from './nav';
import Hero from './hero';
import "../../styles/landing.css"
import Socials from "./socials";

export default function Intro() {
    return (
        <div className="screen">
            <Nav />
            <Socials />
            <Hero />
        </div>
    )
}