import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { BrandManifesto } from '../components/home/BrandManifesto';
import { EditorialFlagshipShowcase } from '../components/home/EditorialFlagshipShowcase';
import { AsymmetricDuoShowcase } from '../components/home/AsymmetricDuoShowcase';
import { EditorialLookbookStrip } from '../components/home/EditorialLookbookStrip';
import { MidnightVaultSection } from '../components/home/MidnightVaultSection';
import { CraftAssurance } from '../components/home/CraftAssurance';
import { CollectorVoices } from '../components/home/CollectorVoices';
import { VIPClubOutro } from '../components/home/VIPClubOutro';

export const HomePage: React.FC = () => {
  return (
    <div id="zalleve-editorial-home" className="w-full bg-[#040406]">
      {/* 1. Cinematic Full-Screen Video Opening (No immediate product dumping) */}
      <HeroSection />

      {/* 2. Editorial Brand Statement & Craftsmanship Manifesto */}
      <BrandManifesto />

      {/* 3. Headline Flagship Acoustic Hero Split Showcase */}
      <EditorialFlagshipShowcase />

      {/* 4. Asymmetrical Curated Duo (Ultra Chronograph & Smart Case Earbuds) */}
      <AsymmetricDuoShowcase />

      {/* 5. Architectural Lookbooks / Curated Catalogues Strip */}
      <EditorialLookbookStrip />

      {/* 6. Midnight Vault Flash Allocations & Mechanical Countdown */}
      <MidnightVaultSection />

      {/* 7. The Zalleve Assurance & 3-Stage Hardware Benchmark */}
      <CraftAssurance />

      {/* 8. Collector Voices & Verified Customer Testimonials */}
      <CollectorVoices />

      {/* 9. VIP Club & Direct Atelier Concierge */}
      <VIPClubOutro />
    </div>
  );
};
