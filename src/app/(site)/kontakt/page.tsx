import type { Metadata } from "next";
import { SiteContact } from "@/components/site/SiteContact";
import { contactInfo } from "@/content/mh-digital";
import { FadeIn } from "@/components/sections/FadeIn";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakta MH Digital för att diskutera din hemsida.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border/60 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">Boka ett kostnadsfritt möte</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Berätta om ditt företag så återkommer vi inom ett dygn med förslag på nästa steg.
            </p>
          </FadeIn>
        </div>
      </section>
      <SiteContact contact={contactInfo} />
    </>
  );
}
