import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ServicesGrid from "@/components/sections/ServicesGrid";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Elevate Your Culinary Vision"
        subtitle="Expert food & beverage consulting that transforms operations, optimizes workflows, and creates memorable dining experiences."
        cta={{ text: "Start a Conversation", href: "/contact" }}
      />

      {/* Services Preview */}
      <Section className="bg-cream">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-normal md:text-5xl">What We Do</h2>
          <p className="text-stone mx-auto max-w-2xl text-lg">
            Comprehensive consulting services tailored to your F&B business
            needs.
          </p>
        </div>
        <ServicesGrid />
        <div className="mt-12 text-center">
          <Button href="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-medium md:text-5xl">
              Why Work With Us
            </h2>
            <p className="mb-6 text-lg text-black/70">
              Our multidisciplinary team brings together culinary excellence,
              creative design, technical innovation, and operational expertise.
            </p>
            <p className="mb-8 text-lg text-black/70">
              We don&apos;t just consult—we partner with you to build
              sustainable, profitable, and remarkable food & beverage
              experiences.
            </p>
            <Button href="/about" variant="secondary">
              Learn More About Us
            </Button>
          </div>
          <div className="aspect-square rounded-sm bg-black/5" />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-black text-center text-white">
        <h2 className="mb-6 text-4xl font-medium md:text-5xl">
          Ready to Transform Your F&B Operation?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
          Let&apos;s discuss how we can help you achieve your culinary and
          business goals.
        </p>
        <Button
          href="/contact"
          variant="secondary"
          className="border-white text-white hover:bg-white hover:text-black"
        >
          Get in Touch
        </Button>
      </Section>

      <Footer />
    </div>
  );
}
