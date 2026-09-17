import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Story", href: "#story" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".nav-shell", {
        y: -28,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
      });
    }, navRef);

    return () => context.revert();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const current = navLinks
        .map((link) => link.href.replace("#", ""))
        .findLast((id) => {
          const section = document.getElementById(id);
          return section && section.offsetTop <= window.scrollY + 180;
        });

      if (current) setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { autoAlpha: 0, y: -16 },
        { autoAlpha: 1, y: 0, duration: 0.35, ease: "power3.out" },
      );
      gsap.fromTo(
        ".mobile-nav-link",
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.05, ease: "power3.out" },
      );
    }
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header ref={navRef} className="fixed inset-x-0 top-0 z-[100] px-4 py-4 sm:px-6">
      <nav
        className={`nav-shell mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-5 ${
          isScrolled || isOpen
            ? "border-ink/10 bg-paper/85 shadow-soft backdrop-blur-xl"
            : "border-ink/10 bg-paper/70 backdrop-blur-xl"
        }`}
        aria-label="Primary navigation"
      >
        <a href="#home" className="group flex items-center gap-3" aria-label="Nova Studio home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-sm font-black text-acid">
            N
          </span>
          <span className="font-display text-sm font-bold uppercase leading-4 tracking-[0.18em] text-ink">
            Nova
            <br />
            Studio
          </span>
        </a>

        <div className="hidden items-center gap-0 sm:flex md:gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-2 py-2 text-xs font-medium transition-colors md:px-3 md:text-sm lg:px-4 ${
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-4 bottom-1 h-px origin-left bg-ink transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href="#contact"
            className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-carbon hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
          >
            Let's Work Together
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 text-ink transition hover:bg-white sm:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div
          ref={menuRef}
          className="mx-auto mt-3 max-w-7xl rounded-[1.5rem] border border-ink/10 bg-paper/95 p-4 shadow-soft backdrop-blur-xl sm:hidden"
        >
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="mobile-nav-link rounded-2xl px-4 py-3 text-base font-semibold text-ink transition hover:bg-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mobile-nav-link mt-2 rounded-2xl bg-ink px-4 py-3 text-center text-base font-semibold text-white"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
