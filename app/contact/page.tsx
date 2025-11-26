import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Culinary Collective to discuss your F&B consulting needs.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <Section className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-medium tracking-tight md:text-7xl">
            Let&apos;s Talk
          </h1>
          <p className="text-xl text-black/70">
            Ready to elevate your F&B operation? Send us a message and
            we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </Section>

      {/* Contact Form */}
      <Section className="bg-muted">
        <ContactForm />
      </Section>

      {/* Contact Info */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-xl font-medium">Email</h3>
              <p className="text-black/70">info@culinarycollective.com</p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-medium">Phone</h3>
              <p className="text-black/70">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-medium">Location</h3>
              <p className="text-black/70">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
