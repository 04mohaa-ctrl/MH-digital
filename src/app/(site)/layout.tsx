import { Navbar } from "@/components/navigation/Navbar";
import { SiteFooter } from "@/components/layouts/SiteFooter";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
