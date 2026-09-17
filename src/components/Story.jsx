import { useRef } from "react";
import { blogs } from "../data/blogs";
import { useGsap } from "../hooks/useGsap";
import BlogCard from "./BlogCard";
import SectionHeader from "./SectionHeader";

export default function Story() {
  const sectionRef = useRef(null);

  useGsap(sectionRef, ({ gsap }) => {
    gsap.from(".blog-card", {
      y: 64,
      opacity: 0,
      scale: 0.96,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: ".blog-grid", start: "top 80%" },
    });
  }, []);

  return (
    <section id="story" ref={sectionRef} className="bg-mist px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="From Our Journey"
          title="Notes from the lessons, challenges, and decisions behind the work."
          subtitle="This space is for the learning that happens between idea, build, launch, and iteration."
        />
        <div className="blog-grid mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.title} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
