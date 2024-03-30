import HeroSection from "./components/HeroSection";
import { useEffect } from "react";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import BoxesMenu from "./components/BoxesMenu";

function App() {
  useEffect(() => {
    const menuBoxes = Array.from(document.getElementsByClassName("box"));
    const checkpoints = Array.from(
      document.getElementsByClassName("checkpoint")
    );

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const dataRef = entry.target.getAttribute("data-ref");

        if (entry.isIntersecting) {
          menuBoxes.forEach((box) => {
            const boxDataRef = box.getAttribute("data-ref");
            if (boxDataRef === dataRef) {
              box.classList.add("active");
            } else {
              box.classList.remove("active");
            }
          });
        }
      });
    });

    checkpoints.forEach((checkpoint) => {
      sectionObserver.observe(checkpoint);
    });
  }, []);

  useEffect(() => {
    const elementsToAnimate =
      document.getElementsByClassName("dash-animate-me");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("dash-animation");
          observer.unobserve(entry.target);
        }
      });
    });

    for (let i = 0; i < elementsToAnimate.length; i++) {
      observer.observe(elementsToAnimate[i]);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <BoxesMenu />
      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}

export default App;
