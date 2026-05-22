import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { NetworkMap } from "@/components/sections/network-map";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <NetworkMap />
    </>
  );
}
