interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`rounded-sm border border-black/10 bg-white p-8 ${hover ? "transition-all duration-300 hover:border-black hover:shadow-lg" : ""} ${className} `}
    >
      {children}
    </div>
  );
}
