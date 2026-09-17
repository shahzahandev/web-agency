import ImagePlaceholder from "./ImagePlaceholder";

export default function TeamCard({ member }) {
  return (
    <article className="team-card group rounded-[1.5rem] border border-ink/10 bg-white/65 p-4 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-soft">
      <div className="overflow-hidden rounded-[1.25rem]">
        <ImagePlaceholder className="aspect-[4/5] rounded-[1.25rem] transition-transform duration-500 group-hover:scale-[1.03]">
          Add profile image here later
        </ImagePlaceholder>
      </div>
      <div className="p-3 pt-6">
        <h3 className="font-display text-2xl font-semibold text-ink">{member.name}</h3>
        <p className="mt-1 font-semibold text-muted">{member.role}</p>
        <p className="mt-4 leading-7 text-muted">{member.description}</p>
        <div className="mt-6 flex translate-y-2 gap-2 opacity-80 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {member.socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink transition hover:border-ink hover:bg-ink hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}
