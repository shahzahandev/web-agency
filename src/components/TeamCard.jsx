export default function TeamCard({ member }) {
  return (
    <article className="team-card group rounded-[1.5rem] border border-ink/10 bg-white/65 p-4 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-soft">
      <div className="overflow-hidden rounded-[1.25rem] bg-mist">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            loading="eager"
            className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05] lg:aspect-[4/3]"
          />
        ) : (
          <div className="grid aspect-[4/5] w-full place-items-center text-xs font-semibold text-muted lg:aspect-[4/3]">
            Add profile image here later
          </div>
        )}
      </div>

      <div className="p-3 pt-6">
        <h3 className="font-display text-2xl font-semibold text-ink">
          {member.name}
        </h3>

        <p className="mt-1 font-semibold text-muted">
          {member.role}
        </p>

        <p className="mt-4 leading-7 text-muted">
          {member.description}
        </p>
      </div>
    </article>
  );
}