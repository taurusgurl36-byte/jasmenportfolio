import { PageHeader } from "../components/SectionHeader";
import ProjectsGrid from "../components/ProjectsGrid";
import { projects } from "../data/portfolioData";

export default function ProjectsPage() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-10 md:py-14">
      <PageHeader
        title="Projects"
        description="My academic projects at ICCT Colleges: ICCT CSLMS and Embedded Systems: Medicare. Select a photo to view it in full."
      />

      <ProjectsGrid projects={projects} />
    </section>
  );
}
