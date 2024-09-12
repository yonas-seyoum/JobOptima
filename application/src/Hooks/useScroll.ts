import { useRef } from "react";

export default function useScroll() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (component: string) => {
    if (component === "home" && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (component === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (component === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { scrollTo, homeRef, aboutRef, contactRef };
}
