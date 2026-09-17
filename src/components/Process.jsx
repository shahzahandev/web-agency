import { useRef } from "react";
import { useGsap } from "../hooks/useGsap";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business, audience, goals, and requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "Create the visual direction, user experience, and interface.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Build the frontend, backend, APIs, and required functionality.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Test, optimize, deploy, and provide ongoing support.",
  },
];

export default function Process() {
  const sectionRef = useRef(null);

  useGsap(sectionRef, ({ gsap }) => {
    gsap.from(".process-step", {
      y: 64,
      opacity: 0,
      duration: 0.85,
      stagger: 0.14,
      ease: "power3.out",
      scrollTrigger: { trigger: ".process-steps", start: "top 78%" },
    });

    gsap.from(".process-line", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".process-steps", start: "top 78%" },
    });
  }, []);

  return (
    <section className="bg-paper px-4 py-24 sm:px-6 lg:py-32" ref={sectionRef}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Process"
          title="How We Turn Ideas Into Digital Products"
          subtitle="A practical process keeps every decision connected to your goals, from first conversation to launch day."
        />

        <div className="process-steps relative mt-16">
          <div className="process-line absolute left-7 top-0 hidden h-px w-full bg-ink/15 lg:block" />
          <div className="grid gap-5 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="process-step relative rounded-[1.5rem] border border-ink/10 bg-white/60 p-6"
              >
                <span className="mb-10 grid h-14 w-14 place-items-center rounded-full bg-ink font-display text-sm font-bold text-acid">
                  {step.number}
                </span>
                <h3 className="font-display text-2xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-4 leading-7 text-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
