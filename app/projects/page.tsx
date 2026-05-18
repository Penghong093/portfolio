import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected projects by ${siteConfig.name}, ${siteConfig.role}.`
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Projects />
      </main>
    </>
  );
}
