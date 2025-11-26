import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black py-16 text-white">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-2xl font-medium">Culinary Collective</h3>
            <p className="max-w-md text-white/70">
              Transforming food & beverage operations through expert consulting
              and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-medium">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Team", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-medium">Contact</h4>
            <ul className="space-y-2 text-white/70">
              <li>info@culinarycollective.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Culinary Collective. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
