export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  submitted_at?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  social?: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}
