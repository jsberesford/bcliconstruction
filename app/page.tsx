import { Hero } from "@/components/sections/Hero";
import { GuyanaOrbit } from "@/components/sections/GuyanaOrbit";
import { HomeAbout } from "@/components/sections/HomeAbout";
import { Services } from "@/components/sections/Services";
import { EquipmentRentals } from "@/components/sections/EquipmentRentals";
import { Leadership } from "@/components/sections/Leadership";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <GuyanaOrbit />
      <HomeAbout />
      <Services />
      <EquipmentRentals />
      <Leadership />
      <ClosingCTA />
    </>
  );
}
