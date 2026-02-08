import Container from "@/components/layout/Container";
import { Rocket, MapPin, DollarSign, MessageSquare } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const pillars = [
  {
    icon: Rocket,
    title: "Enterprise Technology",
    description:
      "We use the same frameworks and tools that power Fortune 500 companies—Next.js, React, Java, and Python.",
  },
  {
    icon: MapPin,
    title: "Michigan-Based",
    description:
      "Our team is located in Grand Blanc, serving businesses across Michigan. We understand your market and your customers.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "Clear proposals with detailed breakdowns. No hidden fees, no surprise invoices, no confusing contracts.",
  },
  {
    icon: MessageSquare,
    title: "Direct Access",
    description:
      "Work directly with our engineering team throughout your project. No layers of account managers, just results.",
  },
];

export function WhyChooseSection() {
  return (
    <Container className='py-16 md:py-24'>
      <FadeIn>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12'>
          Why Choose Code Crafted Digital
        </h2>
      </FadeIn>

      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {pillars.map((pillar, i) => {
          const IconComponent = pillar.icon;
          return (
            <FadeIn key={i} delay={i * 0.1}>
              <div className='text-center group'>
                <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors'>
                  <IconComponent className='w-8 h-8 text-primary' />
                </div>
                <h3 className='text-xl font-bold text-white mb-3'>
                  {pillar.title}
                </h3>
                <p className='text-gray-300 leading-relaxed'>
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Container>
  );
}
