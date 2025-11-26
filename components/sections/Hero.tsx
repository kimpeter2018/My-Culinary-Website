import Button from "@/components/ui/Button";

interface HeroProps {
  title: string;
  subtitle: string;
  cta?: { text: string; href: string };
}

export default function Hero({ title, subtitle, cta }: HeroProps) {
  return (
    <div className="flex min-h-screen items-center justify-center pt-20">
      <div className="container mx-auto max-w-4xl px-6 text-center md:px-12 lg:px-20">
        <h1 className="animate-fade-in mb-6 text-5xl font-medium tracking-tight text-balance md:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="animate-slide-up mx-auto mb-12 max-w-2xl text-lg text-balance text-black/70 md:text-xl">
          {subtitle}
        </p>
        {cta && (
          <div className="animate-slide-up">
            <Button href={cta.href} variant="primary">
              {cta.text}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
