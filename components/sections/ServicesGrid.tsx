import Card from "@/components/ui/Card";

export default function ServicesGrid() {
  const services = [
    {
      title: "Menu Design & Development",
      description:
        "Craft compelling menus that balance creativity, profitability, and operational efficiency.",
      icon: "📋",
    },
    {
      title: "Workflow Optimization",
      description:
        "Streamline kitchen operations to maximize efficiency and reduce waste.",
      icon: "⚙️",
    },
    {
      title: "Concept Development",
      description:
        "Develop unique F&B concepts that resonate with your target market.",
      icon: "💡",
    },
    {
      title: "Staff Training",
      description:
        "Elevate your team's skills through comprehensive training programs.",
      icon: "🎓",
    },
    {
      title: "Procurement Strategy",
      description:
        "Optimize sourcing and vendor relationships for cost savings and quality.",
      icon: "📦",
    },
    {
      title: "Operations Audit",
      description:
        "Comprehensive analysis of your F&B operations with actionable insights.",
      icon: "🔍",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <Card key={index} className="group">
          <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">
            {service.icon}
          </div>
          <h3 className="mb-3 text-xl font-medium">{service.title}</h3>
          <p className="text-black/70">{service.description}</p>
        </Card>
      ))}
    </div>
  );
}
