import { ArrowUpRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function BlogCard({ blog }) {
  return (
    <article className="blog-card group overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white/65 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-soft">
      <div className="overflow-hidden">
        <ImagePlaceholder className="aspect-[16/10] rounded-none transition-transform duration-500 group-hover:scale-[1.04]">
          Add article image here later
        </ImagePlaceholder>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-muted">
          <span>{blog.category}</span>
          <span className="h-1 w-1 rounded-full bg-muted" />
          <time>{blog.date}</time>
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-ink">
          {blog.title}
        </h3>
        <p className="mt-4 leading-7 text-muted">{blog.description}</p>
        <a
          href="#contact"
          className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-ink"
        >
          Read More
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
