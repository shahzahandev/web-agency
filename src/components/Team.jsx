// // import { useRef } from "react";
// // import { team } from "../data/team";
// // import { useGsap } from "../hooks/useGsap";
// // import SectionHeader from "./SectionHeader";
// // import TeamCard from "./TeamCard";

// // export default function Team() {
// //   const sectionRef = useRef(null);

// //   useGsap(sectionRef, ({ gsap }) => {
// //     gsap.from(".team-card", {
// //       y: 70,
// //       opacity: 0,
// //       duration: 0.4,
// //       stagger: 0.02,
// //       ease: "power3.out",
// //       scrollTrigger: { trigger: ".team-grid", start: "top 80%" },
// //     });
// //   }, []);

// //   return (
// //     <section id="team" ref={sectionRef} className="bg-paper px-4 py-24 sm:px-6 lg:py-32">
// //       <div className="mx-auto max-w-7xl">
// //         <SectionHeader
// //           eyebrow="Meet The Team"
// //           title="A small team with big ideas."
// //           subtitle="Strategic thinkers, careful designers, and practical developers working closely from concept to launch."
// //         />
// //         <div className="team-grid mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
// //           {team.map((member, index) => (
// //             <TeamCard key={`${member.role}-${index}`} member={member} />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// import { useRef } from "react";
// import { team } from "../data/team";
// import { useGsap } from "../hooks/useGsap";
// import SectionHeader from "./SectionHeader";
// import TeamCard from "./TeamCard";

// export default function Team() {
//   const sectionRef = useRef(null);

//   useGsap(sectionRef, ({ gsap, ScrollTrigger }) => {
//     gsap.from(".team-card", {
//       y: 60,
//       opacity: 0,
//       duration: 0.7,
//       stagger: 0.12,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: ".team-grid",
//         start: "top 85%",
//         invalidateOnRefresh: true,
//       },
//     });

//     // Images load asynchronously and shift layout height,
//     // so recalculate trigger positions once everything settles
//     const images = sectionRef.current.querySelectorAll("img");
//     let loaded = 0;
//     if (images.length === 0) {
//       ScrollTrigger.refresh();
//     } else {
//       images.forEach((img) => {
//         if (img.complete) {
//           loaded++;
//         } else {
//           img.addEventListener("load", () => {
//             loaded++;
//             if (loaded === images.length) ScrollTrigger.refresh();
//           });
//           img.addEventListener("error", () => {
//             loaded++;
//             if (loaded === images.length) ScrollTrigger.refresh();
//           });
//         }
//       });
//       if (loaded === images.length) ScrollTrigger.refresh();
//     }
//   }, []);

//   return (
//     <section id="team" ref={sectionRef} className="bg-paper px-4 py-24 sm:px-6 lg:py-32">
//       <div className="mx-auto max-w-7xl">
//         <SectionHeader
//           eyebrow="Meet The Team"
//           title="A small team with big ideas."
//           subtitle="Strategic thinkers, careful designers, and practical developers working closely from concept to launch."
//         />
//         <div className="team-grid mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {team.map((member, index) => (
//             <TeamCard key={`${member.role}-${index}`} member={member} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { useRef } from "react";
import { team } from "../data/team";
import { useGsap } from "../hooks/useGsap";
import SectionHeader from "./SectionHeader";
import TeamCard from "./TeamCard";

export default function Team() {
  const sectionRef = useRef(null);

  useGsap(
    sectionRef,
    ({ gsap, ScrollTrigger }) => {
      const section = sectionRef.current;

      if (!section) return;

      const cards = section.querySelectorAll(".team-card");
      const images = section.querySelectorAll("img");

      // Initial state
      gsap.set(cards, {
        y: 60,
        opacity: 0,
      });

      // Animation
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",

        scrollTrigger: {
          trigger: section.querySelector(".team-grid"),
          start: "top 85%",
          once: true,
        },
      });

      // Refresh ScrollTrigger after images load
      const refresh = () => {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      };

      images.forEach((img) => {
        if (!img.complete) {
          img.addEventListener("load", refresh);
          img.addEventListener("error", refresh);
        }
      });

      // Initial refresh
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      // Extra refresh after layout settles
      const timeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      return () => {
        images.forEach((img) => {
          img.removeEventListener("load", refresh);
          img.removeEventListener("error", refresh);
        });

        clearTimeout(timeout);
      };
    },
    []
  );

  return (
    <section
      id="team"
      ref={sectionRef}
      className="bg-paper px-4 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Meet The Team"
          title="A small team with big ideas."
          subtitle="Strategic thinkers, careful designers, and practical developers working closely from concept to launch."
        />

        <div className="team-grid mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <TeamCard
              key={`${member.name}-${index}`}
              member={member}
            />
          ))}
        </div>
      </div>
    </section>
  );
}