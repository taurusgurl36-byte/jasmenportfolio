import { PageHeader } from "../components/SectionHeader";
import TechStack from "../components/TechStack";
import { techStack } from "../data/portfolioData";

export default function StackPage() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-10 md:py-14">
      <PageHeader
        title="Basic Skills"
        description="My basic skills in programming, UI/UX and web design, embedded systems, robotics, productivity tools, graphics, animation, CAD, and mechanical troubleshooting."
      />
      <TechStack groups={techStack} />
    </section>
  );
}
