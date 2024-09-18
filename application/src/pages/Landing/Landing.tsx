import Hero from "../../components/intro/hero";
import { LandingProps } from "../../util/types";
import Information from "./components/Information/Information";
import ContactUs from "./components/ContactUs/ContactUs";

export default function Landing({ refs }: LandingProps) {
  const { homeRef, contactRef, aboutRef } = refs;
  return (
    <>
      <Hero ref={homeRef} />
      <Information ref={aboutRef} />
      <ContactUs ref={contactRef} />
    </>
  );
}
