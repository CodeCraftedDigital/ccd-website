import { HeroSection } from "@/components/homepage/HeroSection";
import { StatsSection } from "@/components/homepage/StatsSection";
import { TechStackMarquee } from "@/components/homepage/TechStackMarquee";
import { ProblemSolutionSection } from "@/components/homepage/ProblemSolution";
import { FeaturedSolutionsSection } from "@/components/homepage/FeaturedSolutions";
import { WhyChooseSection } from "@/components/homepage/WhyChooseSection";
import { ReviewsSection } from "@/components/homepage/ReviewsSection";
import { FinalCTASection } from "@/components/homepage/FinalCtaSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Code Crafted Digital | Enterprise Web Development & Digital Marketing in Michigan",
  description:
    "Michigan-based web development and digital marketing agency. Custom Next.js applications, WordPress solutions, and data-driven SEO strategies that deliver results.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TechStackMarquee />
      <ProblemSolutionSection />
      <FeaturedSolutionsSection />
      <WhyChooseSection />
      <ReviewsSection />
      <FinalCTASection />
    </>
  );
}
