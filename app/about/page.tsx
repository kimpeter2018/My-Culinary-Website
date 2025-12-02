import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our multidisciplinary team and our approach to food & beverage consulting.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <Section className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-normal tracking-tight md:text-7xl">
            About Us
          </h1>
          <p className="text-stone text-xl">
            A multidisciplinary team united by a passion for exceptional food &
            beverage experiences.
          </p>
        </div>
      </Section>

      {/* Our Story */}
      <Section className="bg-cream">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="bg-muted aspect-square rounded-sm" />
          <div>
            <h2 className="mb-6 text-4xl font-normal">Our Story</h2>
            <p className="text-stone mb-4 text-lg">
              Culinary Collective was born from a simple observation: the most
              successful F&B operations combine culinary excellence with
              operational efficiency, creative vision, and technological
              innovation.
            </p>
            <p className="text-stone mb-4 text-lg">
              We assembled a team that represents each of these disciplines—a
              professional chef, a designer, a developer, and an operations
              specialist—to provide comprehensive consulting that addresses
              every aspect of your business.
            </p>
            <p className="text-stone text-lg">
              Today, we partner with restaurants, hotels, catering companies,
              and food startups to elevate their operations and create
              unforgettable dining experiences.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Approach */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-medium">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 text-3xl">01</div>
              <h3 className="mb-3 text-xl font-medium">Analyze</h3>
              <p className="text-black/70">
                We begin by deeply understanding your business, challenges,
                goals, and unique market position.
              </p>
            </div>
            <div>
              <div className="mb-4 text-3xl">02</div>
              <h3 className="mb-3 text-xl font-medium">Strategize</h3>
              <p className="text-black/70">
                Our team develops a tailored strategy that combines culinary
                innovation with operational excellence.
              </p>
            </div>
            <div>
              <div className="mb-4 text-3xl">03</div>
              <h3 className="mb-3 text-xl font-medium">Execute</h3>
              <p className="text-black/70">
                We work alongside you to implement solutions, train your team,
                and ensure sustainable success.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-muted">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-medium">Our Values</h2>
          <div className="space-y-8">
            <div>
              <h3 className="mb-3 text-2xl font-medium">Excellence</h3>
              <p className="text-lg text-black/70">
                We hold ourselves to the highest standards and bring
                best-in-class expertise to every project.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-2xl font-medium">Collaboration</h3>
              <p className="text-lg text-black/70">
                We believe in true partnership, working alongside our clients
                rather than above them.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-2xl font-medium">Innovation</h3>
              <p className="text-lg text-black/70">
                We embrace new ideas, technologies, and approaches that drive
                the industry forward.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-2xl font-medium">Sustainability</h3>
              <p className="text-lg text-black/70">
                We design solutions that are economically viable,
                environmentally responsible, and built to last.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <h2 className="mb-6 text-4xl font-medium">Ready to Work Together?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-black/70">
          Let&apos;s discuss how our team can help elevate your F&B operation.
        </p>
        <Button href="/contact" variant="primary">
          Get in Touch
        </Button>
      </Section>

      <Footer />
    </div>
  );
}
