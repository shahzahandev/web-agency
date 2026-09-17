import { useRef } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import SectionHeader from "./SectionHeader";
import { useGsap } from "../hooks/useGsap";
import project from "../assets/project.png"

const stats = [
  { value: "20+", label: "Projects" },
  { value: "15+", label: "Happy Clients" },
  { value: "2+", label: "Years of Learning" },
];

export default function About() {
  const sectionRef = useRef(null);

  useGsap(sectionRef, ({ gsap }) => {
    gsap.from(".about-copy > *", {
      y: 42,
      opacity: 0,
      duration: 0.75,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
    });

    gsap.from(".about-image", {
      opacity: 0,
      scale: 0.94,
      clipPath: "inset(12% round 2rem)",
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: ".about-image", start: "top 80%" },
    });
  }, []);

  return (
    <section ref={sectionRef} className="about-section bg-ink px-4 py-24 text-white sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div className="about-image">
          <ImagePlaceholder className="aspect-[4/5] border-white/10 bg-[#101010] lg:aspect-[5/6]">
            <img src={project} alt="Web design and development agency" className="h-full w-full object-cover scale-125" />
          </ImagePlaceholder>
        </div>

        <div className="about-copy">
          <SectionHeader
            eyebrow="Our Story"
            title="Built for clarity, craft, and useful digital outcomes."
            subtitle="We started with a simple idea - great websites should not only look good, they should solve real business problems."
          />
          <div className="mt-8 space-y-5 text-lg leading-8 text-white/68">
            <p>
              What began as a small team passionate about frontend and backend
              development has grown into a collaborative digital team focused on
              creating meaningful digital experiences.
            </p>
            <p>
              Every project teaches us something new. Every challenge pushes us
              to improve. And every successful launch reminds us why we started.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <strong className="font-display text-4xl text-acid">{stat.value}</strong>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
