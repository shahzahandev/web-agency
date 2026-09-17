import { useRef } from "react";
import { team } from "../data/team";
import { useGsap } from "../hooks/useGsap";
import SectionHeader from "./SectionHeader";
import TeamCard from "./TeamCard";

export default function Team() {
  const sectionRef = useRef(null);

  useGsap(sectionRef, ({ gsap }) => {
    gsap.from(".team-card", {
      y: 70,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: ".team-grid", start: "top 80%" },
    });
  }, []);

  return (
    <section id="team" ref={sectionRef} className="bg-paper px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Meet The Team"
          title="A small team with big ideas."
          subtitle="Strategic thinkers, careful designers, and practical developers working closely from concept to launch."
        />
        <div className="team-grid mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <TeamCard key={`${member.role}-${index}`} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
