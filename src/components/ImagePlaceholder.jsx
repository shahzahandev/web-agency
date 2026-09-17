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
      <div className="absolute inset-x-6 top-6 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-white/40">
        <span>Visual Slot</span>
        <span>Replace</span>
      </div>
      <div className="relative flex h-full min-h-[220px] items-center justify-center p-8">
        <div className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/55">
          {children || label}
        </div>
      </div>
    </div>
  );
}
