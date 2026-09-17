import { useRef } from "react";
import { services } from "../data/services";
import { useGsap } from "../hooks/useGsap";
import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const sectionRef = useRef(null);

  useGsap(sectionRef, ({ gsap }) => {
    gsap.from(".services-header", {
      y: 54,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
    });

    gsap.from(".service-card", {
      y: 80,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
    });
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="services-section bg-paper px-4 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="services-header">
          <SectionHeader
            eyebrow="Services"
            title="What We Do"
            subtitle="From idea to launch, we build digital products designed for real-world impact."
          />
        </div>
        <div className="services-grid mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
