import novafrontend from "../assets/nova.png"
import dashboard from "../assets/dashboard.png"
import earbuds from "../assets/earbuds2.png"
import bekary from "../assets/bekary.png"


export const projects = [
  {
    number: "01",
    title: "Nova Market",
    category: "E-commerce Platform",
    technology: ["Tailwind", "JavaScript", "JWT", "Cloudinary", "GSAP", "React", "Node.js", "Express", "MongoDB"],
    description:
      "A modern e-commerce platform with product management, authentication, shopping cart, order management, and admin dashboard.",
    image: novafrontend,
    link: "https://nova-market-frontend.vercel.app"
  },
  {
    number: "02",
    title: "Nova Market Control Panel",
    category: "Finance Dashboard",
    technology: ["Shadcn", "React", "Tailwind", "JavaScript"],
    description:
      "A clean financial analytics dashboard for tracking metrics, transactions, team workflows, and business insights.",
    image: dashboard,
    link: "https://nova-market-dashboard.vercel.app"
  },
  {
    number: "03",
    title: "E-Earbuds",
    category: "Business Website",
    technology: ["React", "JavaScript", "Tailwind", "Express", "Node", "SSL", "Multer", "JWT", "MongoDB"],
    description:
      "A patient-focused healthcare platform with secure accounts, appointment flows, and operational dashboards.",
    image: earbuds,
    link: "https://e-mart-single-vendor-frontend.vercel.app",
  },
  {
    number: "04",
    title: "Bakery Management",
    category: "Business Website",
    technology: ["React", "Node", "Express", "GSAP", "JavaScript", "TypeScript"],
    description:"A polished studio website with editorial sections, smooth animation, responsive layouts, and flexible content blocks.",
    image: bekary,
    link: "https://sweet-treats-supabase.vercel.app/",
  },
];
