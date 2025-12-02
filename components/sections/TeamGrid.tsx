import Card from "@/components/ui/Card";
import Image from "next/image";

export default function TeamGrid() {
  const team = [
    {
      name: "Alexandra Chen",
      role: "Executive Chef & Culinary Director",
      bio: "15+ years of Michelin-starred experience, specializing in innovative menu development.",
      image: "/team/chef.jpg", // Replace with actual image paths
    },
    {
      name: "Marcus Rodriguez",
      role: "Creative Director",
      bio: "Award-winning designer crafting brand identities for hospitality venues worldwide.",
      image: "/team/designer.jpg",
    },
    {
      name: "Sarah Kim",
      role: "Technology & Systems Lead",
      bio: "Full-stack developer building scalable solutions for restaurant operations.",
      image: "/team/developer.jpg",
    },
    {
      name: "James O'Connor",
      role: "Operations & Strategy Manager",
      bio: "MBA with expertise in hospitality operations and organizational development.",
      image: "/team/ops.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {team.map((member, index) => (
        <Card key={index}>
          {/* Placeholder for image - replace with actual Next.js Image component when you have images */}
          <div className="bg-cream relative mb-6 aspect-square w-full overflow-hidden rounded-sm">
            {/* When ready, use: */}
            {/* <Image 
              src={member.image} 
              alt={member.name}
              fill
              className="object-cover"
            /> */}
          </div>
          <h3 className="mb-1 text-lg font-normal">{member.name}</h3>
          <p className="text-stone mb-3 text-sm">{member.role}</p>
          <p className="text-stone/80 text-sm">{member.bio}</p>
        </Card>
      ))}
    </div>
  );
}
