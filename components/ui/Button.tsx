import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-black text-white hover:bg-black/90 disabled:hover:bg-black",
    secondary:
      "border-2 border-black text-black hover:bg-black hover:text-white disabled:hover:bg-transparent disabled:hover:text-black",
    ghost: "text-black hover:text-black/70",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
