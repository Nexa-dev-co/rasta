import { HeroSection } from "@/components/home/hero-section";
import { StatsBar } from "@/components/home/stats-bar";
import { ServicesSnapshot } from "@/components/home/services-snapshot";
import { WhyUsSection } from "@/components/home/why-us-section";
import { CtaBanner } from "@/components/home/cta-banner";

export default function HomeView() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesSnapshot />
      <WhyUsSection />
      <CtaBanner />
    </>
  );
}
