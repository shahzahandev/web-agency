import { useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import gsap from "gsap";
import Button from "./Button";
import ImagePlaceholder from "./ImagePlaceholder";
import { useGsap } from "../hooks/useGsap";
import banner from "../assets/team4.jpeg";

function handleLetterEnter(e) {
  const el = e.currentTarget;
  const prev = el.previousElementSibling;
  const next = el.nextElementSibling;

  gsap.to(el, {
    skewX: 18,
    y: -10,
    duration: 0.35,
    ease: "power3.out",
    overwrite: "auto",
  });
  if (prev && prev.classList.contains("hero-letter")) {
    gsap.to(prev, {
      skewX: -22,
      y: -5,
      duration: 0.35,
      ease: "power3.out",
      overwrite: "auto",
    });
  }
  if (next && next.classList.contains("hero-letter")) {
    gsap.to(next, {
      skewX: 22,
      y: -5,
      duration: 0.35,
      ease: "power3.out",
      overwrite: "auto",
    });
  }
}

function handleLetterLeave(e) {
  const el = e.currentTarget;
  const prev = el.previousElementSibling;
  const next = el.nextElementSibling;
  const targets = [prev, el, next].filter(
    (t) => t && t.classList && t.classList.contains("hero-letter"),
  );

  gsap.to(targets, {
    skewX: 0,
    y: 0,
    duration: 0.4,
    ease: "power3.out",
    overwrite: "auto",
  });
}

function splitWords(text) {
  const words = text.split(" ");
  return words.map((word, wIndex) => (
    <span key={wIndex} className="inline-block whitespace-nowrap">
      {word.split("").map((char, cIndex) => (
        <span
          key={cIndex}
          className="hero-letter inline-block will-change-transform"
          onMouseEnter={handleLetterEnter}
          onMouseLeave={handleLetterLeave}
        >
          {char}
        </span>
      ))}
      {wIndex !== words.length - 1 ? "\u00A0" : ""}
    </span>
  ));
}

function splitTeamLetters(text) {
  return text.split("").map((char, i) => (
    <span key={i} className="team-wave-letter inline-block text-white">
      {char}
    </span>
  ));
}

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
      .from(".team-text-wrap", { y: -18, opacity: 0, duration: 0.7 }, "-=0.5")
      .from(".hero-float", { y: 22, opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.55");

    const letters = gsap.utils.toArray(".team-wave-letter", sectionRef.current);
    if (letters.length > 1) {
      gsap.timeline({ repeat: -1, repeatDelay: 3 }).to(letters, {
        color: "#bdf28f",
        duration: 0.9,
        ease: "sine.inOut",
        stagger: {
          each: 0.16,
          from: "start",
          yoyo: true,
          repeat: 1,
        },
      });
    }
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-paper px-4 pb-16 pt-32 sm:px-6 lg:pt-36"
    >
      <div className="absolute inset-0 bg-grid bg-[length:56px_56px] opacity-40" />
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-acid/25 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-ocean/50 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <h1 className="font-display text-[clamp(3rem,8vw,7.8rem)] font-semibold leading-[0.94] tracking-normal text-ink">
            <span className="hero-line block">{splitWords("We Build Digital")}</span>
            <span className="hero-line block">{splitWords("Experiences That Move")}</span>
            <span className="hero-line block">{splitWords("Businesses Forward.")}</span>
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
            <img src={banner} alt="Web design and development agency" className="h-full w-full object-cover scale-125" />
            <div className="team-text-wrap pointer-events-none absolute inset-x-0 top-6 z-10 flex justify-center py-1 sm:top-8">
              <span className="select-none whitespace-nowrap font-display text-[clamp(2.25rem,5vw,3.75rem)] font-semibold tracking-[0.01em]">
                {splitTeamLetters("Team")}
              </span>
            </div>
          </ImagePlaceholder>
          <div className="hero-float absolute left-2 md:left-2 bottom-5 md:bottom-10  rounded-3xl border border-white/60 bg-white/80 p-4 shadow-soft backdrop-blur sm:left-2">
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
        </div>
      </div>
    </section>
  );
}