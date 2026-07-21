import { Hero } from "@/components/sections/hero";
import { AboutPreview } from "@/components/sections/about-preview";
import { ExpertiseStats } from "@/components/sections/services-overview";
import { Products } from "@/components/sections/products";
import { Industries } from "@/components/sections/industries";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { SupplyLogistics } from "@/components/sections/network-map";
import { Process } from "@/components/sections/process";
import { QualityAssurance } from "@/components/sections/quality-assurance";
import { Leadership } from "@/components/sections/leadership";
import { Infrastructure } from "@/components/sections/infrastructure";
import { Values } from "@/components/sections/values";
import { FAQ } from "@/components/sections/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ExpertiseStats />
      <Products />
      <Industries />
      <WhyChooseUs />
      <SupplyLogistics />
      <Process />
      <QualityAssurance />
      <Leadership />
      <Infrastructure />
      <Values />
      <FAQ />
    </>
  );
}
