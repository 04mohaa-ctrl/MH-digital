import Link from "next/link";
import { contactInfo, siteConfig } from "@/content/mh-digital";

const footerLinks = [
  { href: "/tjanster", label: "Tjänster" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-semibold">{siteConfig.name}</p>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">{siteConfig.tagline}</p>
          </div>
          <nav className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="text-sm text-muted-foreground">
            <a href={`mailto:${contactInfo.email}`} className="block hover:text-foreground">
              {contactInfo.email}
            </a>
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="mt-1 block hover:text-foreground"
            >
              {contactInfo.phone}
            </a>
            {contactInfo.address && <p className="mt-1">{contactInfo.address}</p>}
          </div>
        </div>
        <p className="mt-10 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Byggd med omsorg i Stockholm.
        </p>
      </div>
    </footer>
  );
}
