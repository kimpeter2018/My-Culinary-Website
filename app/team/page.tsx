import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import TeamGrid from "@/components/sections/TeamGrid";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the multidisciplinary team behind Culinary Collective.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <Section className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-medium tracking-tight md:text-7xl">
            Our Team
          </h1>
          <p className="text-xl text-black/70">
            A diverse group of experts united by a passion for culinary
            excellence and operational innovation.
          </p>
        </div>
      </Section>

      {/* Team Grid */}
      <Section className="bg-muted">
        <TeamGrid />
      </Section>

      {/* Team Philosophy */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-4xl font-medium">
            Why Our Team Works
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-medium">
                Multidisciplinary Expertise
              </h3>
              <p className="text-lg text-black/70">
                By combining culinary arts, design thinking, technology, and
                business operations, we address challenges from every angle and
                create truly comprehensive solutions.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-medium">
                Real-World Experience
              </h3>
              <p className="text-lg text-black/70">
                Each team member brings years of hands-on experience from
                leading restaurants, hospitality groups, and F&B startups.
                We&apos;ve been in your shoes.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-medium">
                Collaborative Approach
              </h3>
              <p className="text-lg text-black/70">
                We believe in working alongside our clients, not above them.
                Your team&apos;s insights combined with our expertise create the
                best outcomes.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-medium">Continuous Learning</h3>
              <p className="text-lg text-black/70">
                The F&B industry evolves constantly. We stay at the forefront
                through ongoing education, industry connections, and our own
                experimentation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
