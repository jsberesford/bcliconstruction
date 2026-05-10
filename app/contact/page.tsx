import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { LocationMap } from "@/components/sections/LocationMap";

export const metadata: Metadata = { title: "Contact | BCLI Construction & Engineering" };

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <LocationMap />
    </>
  );
}
