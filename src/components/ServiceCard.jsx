import { ArrowIcon } from "../data/services";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="service-card group flex min-h-[280px] flex-col justify-between rounded-[1.5rem] border border-ink/10 bg-white/55 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-ink hover:bg-white hover:shadow-soft">
      <div className="flex items-start justify-between gap-6">
        <span className="font-display text-sm font-bold text-muted">{service.number}</span>
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-acid transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <div>
        <h3 className="font-display text-2xl font-semibold text-ink">{service.title}</h3>
        <p className="mt-4 leading-7 text-muted">{service.description}</p>
      </div>
      <div className="mt-8 flex items-center justify-between border-t border-ink/10 pt-5">
        <span className="text-sm font-semibold text-ink">Explore service</span>
        <ArrowIcon
          className="h-5 w-5 text-ink transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}
