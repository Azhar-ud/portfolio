export interface Project {
  slug: string;
  name: string;
  year: string;
  role: string;
  description: string;
  stack: string[];
  repo: string;
  live?: string;
  accent: "warm" | "cool" | "neutral";
  size: "lg" | "md" | "sm";
}

export const projects: Project[] = [
  {
    slug: "ace-store",
    name: "Ace Store",
    year: "2024",
    role: "Design & Build",
    description:
      "Next.js e-commerce surface with Redux cart state, persistent selections, and a checkout flow focused on reading-speed over ornament.",
    stack: ["Next.js", "Redux", "TypeScript", "CSS Modules"],
    repo: "https://github.com/Azhar-ud/ace-store-ecommerce",
    accent: "warm",
    size: "lg",
  },
  {
    slug: "react-deck",
    name: "React Deck",
    year: "2024",
    role: "Full-stack",
    description:
      "A deck-builder experience with a TypeScript React client and a companion API — prototype for interactive card layouts.",
    stack: ["React", "TypeScript", "Node", "Express"],
    repo: "https://github.com/Azhar-ud/react-deck",
    accent: "cool",
    size: "md",
  },
  {
    slug: "yadgar-shop",
    name: "Yadgar Shop",
    year: "2023",
    role: "Full-stack",
    description:
      "End-to-end storefront: Python backend, admin console, and customer-facing client. Shipped as three cooperating services.",
    stack: ["Python", "JavaScript", "REST", "Admin UI"],
    repo: "https://github.com/Azhar-ud/yadgar-shop",
    accent: "neutral",
    size: "md",
  },
  {
    slug: "fullstack-d3",
    name: "Fullstack D3",
    year: "2023",
    role: "Study",
    description:
      "Recreations from the Fullstack D3 book — working through the D3 API to build legible, accessible data visualizations.",
    stack: ["D3.js", "JavaScript", "SVG"],
    repo: "https://github.com/Azhar-ud/fullstack-d3",
    accent: "warm",
    size: "sm",
  },
];
