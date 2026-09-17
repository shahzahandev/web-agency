import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../data/services";
import { useGsap } from "../hooks/useGsap";
import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);

  useGsap(sectionRef, ({ gsap }) => {
    gsap.from(".services-header", {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 95%" },
    });

    // batch() দিয়ে প্রতিটা কার্ড নিজে ভিউপোর্টে ঢুকলে অ্যানিমেট হয়;
    // trigger point আরও নিচে (95%) নামিয়ে ও duration/stagger/দূরত্ব
    // কমিয়ে কন্টেন্ট দ্রুত ভিজিবল করা হয়েছে
    const cards = gsap.utils.toArray(".service-card", sectionRef.current);
    gsap.set(cards, { y: 30, opacity: 0 });

    ScrollTrigger.batch(cards, {
      start: "top 95%",
      onEnter: (batch) =>
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.06,
          overwrite: "auto",
        }),
      once: true,
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