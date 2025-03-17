"use client"
import { useEffect, useRef } from "react";
import About from "./about";
import Introduction from "./introduction";
import Animation from "./animation";
import Skill from "./skill";
import Footer from "./footer";
import Project from "./project";

export default function Home() {
  const sections = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("fade-out");
          } else {
            entry.target.classList.add("fade-out");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const setSectionRef = (index: number) => (el: HTMLElement | null) => {
    sections.current[index] = el;
  };

  return (
    <div className="h-screen overflow-y-scroll">
      <Animation />
      <section
        ref={setSectionRef(0)}
        className="h-screen flex flex-col justify-center items-center"
      >
        <Introduction />
      </section>
      <section
        ref={setSectionRef(1)}
        className="h-screen flex flex-col justify-center items-center"
      >
        <About />
      </section>
      <section
        ref={setSectionRef(2)}
        className="h-screen flex flex-col justify-center items-center"
      >
        <Skill />
        </section>
      <section
        ref={setSectionRef(3)}
        className="h-screen flex flex-col justify-center items-center"
      >
        <Project />
        </section>
      <Footer />
    </div>
  );
}