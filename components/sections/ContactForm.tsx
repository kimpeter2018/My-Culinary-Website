"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Form submitted:", formData);

      // TODO: Replace with actual Supabase integration
      // Example Supabase code:
      /*
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            message: formData.message,
            submitted_at: new Date().toISOString(),
          }
        ]);

      if (error) throw error;
      */

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="mx-auto max-w-2xl">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name <span className="text-black/60">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full rounded-sm border border-black/20 px-4 py-3 transition-colors focus:border-black focus:ring-1 focus:ring-black focus:outline-none disabled:cursor-not-allowed disabled:bg-black/5"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email <span className="text-black/60">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full rounded-sm border border-black/20 px-4 py-3 transition-colors focus:border-black focus:ring-1 focus:ring-black focus:outline-none disabled:cursor-not-allowed disabled:bg-black/5"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full rounded-sm border border-black/20 px-4 py-3 transition-colors focus:border-black focus:ring-1 focus:ring-black focus:outline-none disabled:cursor-not-allowed disabled:bg-black/5"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium">
            Message <span className="text-black/60">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            rows={6}
            className="w-full resize-none rounded-sm border border-black/20 px-4 py-3 transition-colors focus:border-black focus:ring-1 focus:ring-black focus:outline-none disabled:cursor-not-allowed disabled:bg-black/5"
          />
        </div>

        {submitStatus === "success" && (
          <div className="rounded-sm border border-green-200 bg-green-50 p-4">
            <p className="text-sm text-green-800">
              Thank you for your message. We&apos;ll get back to you within 24
              hours!
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="rounded-sm border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-800">
              There was an error submitting your message. Please try again or
              email us directly.
            </p>
          </div>
        )}

        <Button
          onClick={handleSubmit}
          variant="primary"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </Card>
  );
}
