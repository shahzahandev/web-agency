export default function ImagePlaceholder({
  label = "Image Placeholder",
  className = "",
  children,
}) {
  return (
    <div
      className={`image-placeholder group relative overflow-hidden rounded-[2rem] border border-white/10 bg-carbon ${className}`}
      aria-label={label}
      role="img"
    >
      <div className="absolute inset-0 bg-grid bg-[length:32px_32px] opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(215,255,71,.24),transparent_28%),radial-gradient(circle_at_78%_80%,rgba(59,130,246,.18),transparent_32%)]" />
      <div className="relative flex h-full min-h-[220px] items-center justify-center p-8">
        <div className="rounded-full  px-0 py-0 text-sm text-white/55">
          {children || label}
        </div>
      </div>
    </div>
  );
}
