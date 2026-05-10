import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { CompanyStory } from "@/components/sections/CompanyStory";
import { LeadershipDetail } from "@/components/sections/LeadershipDetail";
import { ValuesAndCoverage } from "@/components/sections/ValuesAndCoverage";

export const metadata: Metadata = {
  title: "About",
  description:
    "BCLI Construction & Engineering is a civil firm operating out of Bath Settlement, Berbice, serving regions across coastal Guyana.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <LeadershipDetail />
      <ValuesAndCoverage />
    </>
  );
}
