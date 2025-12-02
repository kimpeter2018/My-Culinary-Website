import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive F&B consulting services including menu design, workflow optimization, concept development, and more.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <Section className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-normal tracking-tight md:text-7xl">
            Our Services
          </h1>
          <p className="text-stone text-xl">
            Comprehensive consulting services designed to transform every aspect
            of your F&B operation.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="bg-muted">
        <ServicesGrid />
      </Section>

      {/* Process */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-medium">
            How We Work
          </h2>
          <div className="space-y-12">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
              <div className="text-5xl font-medium text-black/20 md:col-span-3">
                01
              </div>
              <div className="md:col-span-9">
                <h3 className="mb-3 text-2xl font-medium">
                  Discovery & Assessment
                </h3>
                <p className="text-lg text-black/70">
                  We conduct a thorough analysis of your current operations,
                  challenges, and opportunities. This includes on-site visits,
                  interviews with key stakeholders, and data analysis.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
              <div className="text-5xl font-medium text-black/20 md:col-span-3">
                02
              </div>
              <div className="md:col-span-9">
                <h3 className="mb-3 text-2xl font-medium">
                  Strategy Development
                </h3>
                <p className="text-lg text-black/70">
                  Based on our findings, we develop a comprehensive strategy
                  with clear objectives, actionable steps, and measurable
                  outcomes tailored to your specific needs.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
              <div className="text-5xl font-medium text-black/20 md:col-span-3">
                03
              </div>
              <div className="md:col-span-9">
                <h3 className="mb-3 text-2xl font-medium">Implementation</h3>
                <p className="text-lg text-black/70">
                  We work hands-on with your team to execute the strategy,
                  whether that&apos;s launching a new menu, training staff, or
                  optimizing workflows.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
              <div className="text-5xl font-medium text-black/20 md:col-span-3">
                04
              </div>
              <div className="md:col-span-9">
                <h3 className="mb-3 text-2xl font-medium">Ongoing Support</h3>
                <p className="text-lg text-black/70">
                  Our relationship doesn&apos;t end at implementation. We
                  provide continued support, monitoring, and adjustments to
                  ensure long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Custom Solutions */}
      <Section className="bg-muted">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-medium">
            Need Something Different?
          </h2>
          <p className="mb-8 text-lg text-black/70">
            Every F&B business is unique. If you don&apos;t see what you&apos;re
            looking for, let&apos;s talk about creating a custom solution.
          </p>
          <Button href="/contact" variant="primary">
            Discuss Your Project
          </Button>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
