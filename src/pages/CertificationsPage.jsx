import { PageHeader } from "../components/SectionHeader";
import Certifications from "../components/Certifications";
import { certifications } from "../data/portfolioData";

export default function CertificationsPage() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-10 md:py-14">
      <PageHeader
        title="Certifications"
        description="Certificates of recognition for Lego Educational Robotics and Computer Technical Training, and a Top 5 distinction in Object-Oriented Programming."
      />
      <Certifications items={certifications} />
    </section>
  );
}
