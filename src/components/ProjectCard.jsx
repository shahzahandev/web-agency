import { ArrowUpRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";


export default function ProjectCard({ project, index }) {
  return (
    <article
      className={`project-card group grid items-stretch gap-0 overflow-hidden rounded-[2rem] border border-ink/10 bg-white/70 shadow-soft lg:grid-cols-2 ${
        index % 2 === 1 ? "lg:[&_.project-image]:order-2" : ""
      }`}
    >
      <div className="project-image overflow-hidden">
        <ImagePlaceholder className="h-full min-h-[320px] rounded-none transition-transform duration-500 group-hover:scale-[1.03]">
            <img src={project.image} alt="Web design and development agency" className="h-full w-full object-cover scale-125" />
        </ImagePlaceholder>
      </div>

      <div className="flex min-h-[360px] flex-col justify-between p-6 transition-transform duration-300 group-hover:-translate-y-1 sm:p-8 lg:p-10">
        <div>
          <div className="flex items-center justify-between gap-6">
            <span className="font-display text-sm font-bold text-muted">Project {project.number}</span>
            <span className="rounded-full border border-ink/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-muted">
              {project.category}
            </span>
          </div>
          <h3 className="mt-8 font-display text-4xl font-semibold text-ink sm:text-5xl">
            {project.title}
          </h3>
          <p className="mt-5 max-w-xl leading-8 text-muted">{project.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.technology.map((tech) => (
              <span key={tech} className="rounded-full bg-mist px-3 py-2 text-xs font-bold text-ink">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <a
          href={project.link}
          className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white"
        >
          View Project
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
