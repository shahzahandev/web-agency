import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

const socials = [
  { label: "GitHub", icon: Github, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
];

export const team = [
  {
    name: "Your Name",
    role: "Full-Stack Developer",
    description: "Builds complete products with thoughtful interfaces and reliable systems.",
    socials,
  },
  {
    name: "Team Member",
    role: "Frontend Developer",
    description: "Turns visual direction into fast, responsive, polished user experiences.",
    socials,
  },
  {
    name: "Team Member",
    role: "Backend Developer",
    description: "Designs secure APIs, data models, integrations, and scalable foundations.",
    socials,
  },
  {
    name: "Team Member",
    role: "UI/UX Designer",
    description: "Shapes product clarity through research, structure, and refined visual systems.",
    socials,
  },
];
