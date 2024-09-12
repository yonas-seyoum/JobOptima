
import Hero from "../components/intro/hero";
import { InfoSection } from "../components/info-section/infoSection";
import ContactUs from "../components/ContactUs/contactUs";
import { LandingProps } from "../util/types";

export default function Landing({ refs }: LandingProps) {
  const { homeRef, contactRef, aboutRef } = refs;
  return (
    <>
      <Hero ref={homeRef} />
      <ContactUs ref={aboutRef} />
      <InfoSection ref={contactRef} />
    </>
  );
}
