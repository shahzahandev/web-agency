import { useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import Button from "./Button";
import ImagePlaceholder from "./ImagePlaceholder";
import { useGsap } from "../hooks/useGsap";

export default function Hero() {
  const sectionRef = useRef(null);

  useGsap(sectionRef, ({ gsap }) => {
    const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });

    timeline
      .from(".hero-label", { y: 24, opacity: 0, duration: 0.7 })
      .from(".hero-line", { y: 84, opacity: 0, duration: 1, stagger: 0.12 }, "-=0.35")
      .from(".hero-copy", { y: 32, opacity: 0, duration: 0.8 }, "-=0.5")
      .from(".hero-actions", { y: 28, opacity: 0, duration: 0.7 }, "-=0.45")
      .from(
        ".hero-visual",
        { scale: 0.92, opacity: 0, clipPath: "inset(12% round 2rem)", duration: 1.1 },
        "-=0.85",
      )
      .from(".hero-float", { y: 22, opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.55");

    gsap.to(".hero-orbit", {
      y: -14,
      x: 8,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-paper px-4 pb-16 pt-32 sm:px-6 lg:pt-36"
    >
      <div className="absolute inset-0 bg-grid bg-[length:56px_56px] opacity-40" />
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-acid/25 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-ocean/15 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <h1 className="font-display text-[clamp(3rem,8vw,7.8rem)] font-semibold leading-[0.94] tracking-normal text-ink">
            <span className="hero-line block overflow-hidden">We Build Digital</span>
            <span className="hero-line block overflow-hidden">Experiences That</span>
            <span className="hero-line block overflow-hidden">Move Businesses Forward.</span>
          </h1>

          <p className="hero-copy mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            We design and develop modern, high-performance websites and digital
            products that help businesses grow, connect with their customers, and
            stand out online.
          </p>

          <div className="hero-actions mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">Start a Project</Button>
            <Button href="#work" variant="secondary">
              Explore Our Work
            </Button>
          </div>
        </div>

        <div className="hero-visual relative">
          <ImagePlaceholder className="aspect-[4/5] rounded-[2.25rem] shadow-soft lg:aspect-[5/6]">
            Add hero image here later
          </ImagePlaceholder>
          <div className="hero-float absolute -left-3 bottom-10 rounded-3xl border border-white/60 bg-white/80 p-4 shadow-soft backdrop-blur sm:left-2">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-acid">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-ink">Launch-ready builds</p>
                <p className="text-xs text-muted">Design, code, deploy</p>
              </div>
            </div>
          </div>
          <div className="hero-orbit absolute -right-2 top-12 h-24 w-24 rounded-full border border-ink/10 bg-acid/80 shadow-glow" />
        </div>
      </div>

      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-ink/10 bg-white/60 p-4 text-ink transition hover:bg-white md:grid"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
