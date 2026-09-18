import { Facebook, Github, Instagram, Linkedin, Sparkles } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Story", href: "#story" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <a href="#home" className="inline-flex items-center gap-3" aria-label="Nova Studio home">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-acid">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold uppercase tracking-[0.18em] text-ink">
                Nova Studio
              </span>
            </a>
            <p className="mt-5 max-w-md leading-7 text-muted">
              We design and build digital experiences for ambitious businesses.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
        
            <div className="flex gap-3 sm:justify-end">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink transition hover:bg-ink hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink/10 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Nova Studio. All rights reserved.</p>
          <p>Design. Development. Launch.</p>
        </div>
      </div>
    </footer>
  );
}
