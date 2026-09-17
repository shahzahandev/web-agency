export default function SectionHeader({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <div
      className={`section-header max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-muted">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl font-semibold leading-[1.02] text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
