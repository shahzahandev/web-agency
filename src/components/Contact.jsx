import { useRef, useState, useEffect } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Button from "./Button";
import SectionHeader from "./SectionHeader";
import { useGsap } from "../hooks/useGsap";

const contactItems = [
  { icon: Mail, label: "Email", value: "novastudio@gmail.com", href: "mailto:novastudio@gmail.com" },
  { icon: Phone, label: "Phone", value: "+880 1785405909", href: "tel:+8801785405909" },
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: "#" },
];

const initialForm = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useGsap(sectionRef, ({ gsap, ScrollTrigger }) => {
    // Prevents mobile address-bar resize from breaking trigger positions
    if (ScrollTrigger) {
      ScrollTrigger.config({ ignoreMobileResize: true });
    }

    gsap.from(".contact-animate", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 92%",
        toggleActions: "play none none none",
        invalidateOnRefresh: true,
      },
    });

    gsap.to(".contact-float", {
      y: -18,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 8) {
      nextErrors.message = "Message must be at least 8 characters.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setIsSubmitted(false);
      return;
    }

    setFormData(initialForm);
    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="contact-section relative overflow-hidden bg-ink px-4 py-24 text-white sm:px-6 lg:py-32"
    >
      <div className="contact-float absolute right-8 top-20 h-32 w-32 rounded-full border border-white/10 bg-acid/20 blur-sm" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-ocean/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <div className="contact-animate">
            <SectionHeader
              eyebrow="Contact"
              title="Have a Project in Mind?"
              subtitle="Let's turn your idea into a digital experience that makes an impact."
            />
          </div>

          <div className="mt-10 grid gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                
                <a  key={item.label}
                  href={item.href}
                  className="contact-animate flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.08]"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-acid text-ink">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-white/45">{item.label}</span>
                    <span className="font-semibold text-white">{item.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="contact-animate rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur md:p-8"
          noValidate
        >
          <div className="grid grid-cols-1 gap-5">
            <Field
              label="Name"
              name="name"
              value={formData.name}
              error={errors.name}
              onChange={handleChange}
              required
            />

            <Field
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              error={errors.email}
              onChange={handleChange}
              required
            />

            <Field
              label="Message"
              name="message"
              value={formData.message}
              error={errors.message}
              onChange={handleChange}
              as="textarea"
              required
            />
          </div>
          {isSubmitted && (
            <p className="mt-5 rounded-2xl border border-acid/30 bg-acid/10 p-4 text-sm font-semibold text-acid">
              Thanks. Your message is ready for backend integration.
            </p>
          )}

          <Button type="submit" className="mt-6 bg-acid text-ink hover:bg-acid/10 hover:text-acid">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  as = "input",
  children,
  required = false,
}) {
  const inputClass =
    "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-acid focus:ring-2 focus:ring-acid/20";
  const Input = as;

  return (
    <label className="block text-sm font-semibold text-white/75">
      {label}
      <Input
        name={name}
        type={as === "input" ? type : undefined}
        value={value}
        onChange={onChange}
        required={required}
        rows={as === "textarea" ? 5 : undefined}
        className={inputClass}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      >
        {children}
      </Input>
      {error && (
        <span id={`${name}-error`} className="mt-2 block text-xs font-medium text-acid">
          {error}
        </span>
      )}
    </label>
  );
}