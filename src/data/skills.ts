export interface SkillGroup {
  title: string;
  kind: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    kind: "client",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "SvelteKit",
      "Redux",
      "Tailwind CSS",
      "Framer Motion",
      "D3.js",
    ],
  },
  {
    title: "Backend",
    kind: "server",
    items: [
      "Python",
      "Node.js",
      "PostgreSQL",
      "Drizzle ORM",
      "REST APIs",
      "MongoDB",
    ],
  },
  {
    title: "Tooling",
    kind: "ops",
    items: ["Git", "GitHub Actions", "Vite", "pnpm", "Vercel", "Linux"],
  },
];
