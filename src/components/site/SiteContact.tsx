import type { ContactInfo } from "@/types";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { FadeIn } from "@/components/sections/FadeIn";

interface SiteContactProps {
  title?: string;
  subtitle?: string;
  contact: ContactInfo;
}

export function SiteContact({
  title = "Hör av dig",
  subtitle = "Berätta om ditt företag — vi återkommer inom ett dygn.",
  contact,
}: SiteContactProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <FadeIn className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="mt-4 text-muted-foreground">{subtitle}</p>
        </FadeIn>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <ContactForm />
          </FadeIn>
          <FadeIn delay={0.1} className="space-y-8 lg:col-span-2">
            <div>
              <h3 className="font-semibold">Direktkontakt</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Föredrar du att ringa eller mejla? Vi finns här.
              </p>
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 text-primary" />
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4 text-primary" />
              {contact.phone}
            </a>
            {contact.address && (
              <p className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {contact.address}
              </p>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
