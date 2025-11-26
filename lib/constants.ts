export const SITE_CONFIG = {
  name: "Culinary Collective",
  description:
    "Transforming food & beverage operations through expert consulting, innovative menu design, and workflow optimization.",
  url: "https://culinarycollective.com", // Replace with your actual domain
  ogImage: "/og-image.jpg",
  social: {
    twitter: "@culinarycoll",
    instagram: "@culinarycollective",
  },
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "menu-design",
    title: "Menu Design & Development",
    description:
      "Craft compelling menus that balance creativity, profitability, and operational efficiency. We analyze costs, seasonality, and market trends to create menus that delight customers and drive revenue.",
    icon: "📋",
    features: [
      "Menu engineering and profitability analysis",
      "Seasonal menu planning",
      "Dietary accommodations and restrictions",
      "Recipe development and standardization",
    ],
  },
  {
    id: "workflow",
    title: "Workflow Optimization",
    description:
      "Streamline kitchen operations to maximize efficiency and reduce waste. We redesign workflows, optimize station layouts, and implement systems that save time and money.",
    icon: "⚙️",
    features: [
      "Kitchen layout optimization",
      "Prep and production scheduling",
      "Inventory management systems",
      "Waste reduction strategies",
    ],
  },
  {
    id: "concept",
    title: "Concept Development",
    description:
      "Develop unique F&B concepts that resonate with your target market. From fast-casual to fine dining, we help bring your vision to life.",
    icon: "💡",
    features: [
      "Market research and positioning",
      "Brand identity development",
      "Service style recommendations",
      "Pilot testing and iteration",
    ],
  },
  {
    id: "training",
    title: "Staff Training",
    description:
      "Elevate your team's skills through comprehensive training programs. We develop custom curricula covering everything from basic techniques to advanced culinary skills.",
    icon: "🎓",
    features: [
      "Custom training program development",
      "Hands-on kitchen training",
      "Service and hospitality training",
      "Ongoing skill development plans",
    ],
  },
  {
    id: "procurement",
    title: "Procurement Strategy",
    description:
      "Optimize sourcing and vendor relationships for cost savings and quality improvements. We help you build a sustainable, reliable supply chain.",
    icon: "📦",
    features: [
      "Vendor evaluation and negotiation",
      "Local sourcing opportunities",
      "Cost analysis and reduction",
      "Quality control systems",
    ],
  },
  {
    id: "audit",
    title: "Operations Audit",
    description:
      "Comprehensive analysis of your F&B operations with actionable insights. We identify inefficiencies, cost overruns, and growth opportunities.",
    icon: "🔍",
    features: [
      "Financial performance analysis",
      "Operational efficiency assessment",
      "Customer experience evaluation",
      "Detailed recommendations report",
    ],
  },
] as const;

export const TEAM = [
  {
    id: "chef",
    name: "Alexandra Chen",
    role: "Executive Chef & Culinary Director",
    bio: "15+ years of Michelin-starred experience, specializing in innovative menu development and kitchen management. Previously led culinary teams at prestigious restaurants in New York and San Francisco.",
    image: "/team/chef.jpg",
    expertise: ["Menu Development", "Kitchen Operations", "Quality Control"],
  },
  {
    id: "designer",
    name: "Marcus Rodriguez",
    role: "Creative Director",
    bio: "Award-winning designer crafting brand identities and experiences for hospitality venues worldwide. Has worked with leading restaurant groups and boutique concepts across three continents.",
    image: "/team/designer.jpg",
    expertise: ["Brand Identity", "Space Design", "Visual Communication"],
  },
  {
    id: "developer",
    name: "Sarah Kim",
    role: "Technology & Systems Lead",
    bio: "Full-stack developer building scalable solutions for restaurant operations and digital experiences. Expert in POS systems, inventory management, and online ordering platforms.",
    image: "/team/developer.jpg",
    expertise: ["Systems Integration", "Digital Solutions", "Data Analytics"],
  },
  {
    id: "ops",
    name: "James O'Connor",
    role: "Operations & Strategy Manager",
    bio: "MBA with expertise in hospitality operations, financial planning, and organizational development. Previously managed operations for a 20-unit restaurant group.",
    image: "/team/ops.jpg",
    expertise: ["Financial Planning", "Process Optimization", "Team Building"],
  },
] as const;
