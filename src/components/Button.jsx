import { ArrowRight } from "lucide-react";

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
}) {
  const classes =
    variant === "primary"
      ? "bg-ink text-white hover:bg-carbon focus-visible:outline-ink"
      : "border border-ink/15 bg-white/50 text-ink hover:border-ink hover:bg-white focus-visible:outline-ink";

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${classes} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${classes} ${className}`}
    >
      {content}
    </button>
  );
}
