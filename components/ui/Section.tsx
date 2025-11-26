interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        {children}
      </div>
    </section>
  );
}
