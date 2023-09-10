import * as React from "react";
import Nav from '../components/nav';
import Hero from '../components/hero';
import Job from '../components/job';
import About from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/footer';
// import "../styles/style.css"

export default function Landing() {
    return (
        <div className="style">
            <Nav />
            <Hero />
            <Job />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}