import { LandingHero } from "@/sections/landing-hero";
import { ShroudExplorerSection } from "@/sections/shroud-explorer";
import { CrucifixionForensics } from "@/sections/crucifixion-forensics";
import { BloodSerumLab } from "@/sections/blood-serum-lab";
import { ImageFormationSection } from "@/sections/image-formation";
import { DatingLab } from "@/sections/dating-lab";
import { SudariumComparison } from "@/sections/sudarium-comparison";
import { FaithLens } from "@/sections/faith-lens";

export default function Home() {
  return (
    <div className="space-y-1 pb-20">
      <LandingHero />
      <ShroudExplorerSection />
      <CrucifixionForensics />
      <BloodSerumLab />
      <ImageFormationSection />
      <DatingLab />
      <SudariumComparison />
      <FaithLens />
    </div>
  );
}
