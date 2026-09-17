import { useRef } from "react";
import { projects } from "../data/projects";
import { useGsap } from "../hooks/useGsap";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function Work() {
  const sectionRef = useRef(null);

  useGsap(sectionRef, ({ gsap }) => {
    gsap.utils.toArray(".project-card").forEach((card, index) => {
      gsap.from(card, {
        x: index % 2 === 0 ? -80 : 80,
        y: 34,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 82%" },
      });
    });
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="overflow-hidden bg-paper px-4 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Selected Work"
          title="A few digital experiences we've designed and developed."
          subtitle="Each project is shaped around the business problem, the people using it, and the systems needed to keep it working well."
        />
        <div className="mt-14 grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
