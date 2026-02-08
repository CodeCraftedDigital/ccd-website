import Container from "@/components/layout/Container";
import { CheckCircle2 } from "lucide-react";
import { SlideIn } from "@/components/animations/SlideIn";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

const benefits = [
  "Direct access to our team—no account managers or middlemen slowing things down",
  "Enterprise technology normally reserved for Fortune 500 companies",
  "Transparent pricing with clear proposals and no hidden fees",
  "Michigan-based team that understands your local market",
];

export function ProblemSolutionSection() {
  return (
    <Container className='py-16 md:py-24'>
      <div className='grid md:grid-cols-2 gap-12 md:gap-16 items-center'>
        <SlideIn direction='left'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            Tired of Agencies That Overpromise and Underdeliver?
          </h2>
          <p className='text-lg text-gray-300 leading-relaxed mb-6'>
            Most agencies push expensive retainers, use offshore developers, and
            hide behind vague timelines. They sell you on results but deliver
            generic templates and empty promises.
          </p>
          <p className='text-lg text-gray-300 leading-relaxed'>
            After running multiple family businesses and watching companies get
            burned, we built Code Crafted Digital differently.
          </p>
        </SlideIn>

        <SlideIn direction='right' className='relative'>
          <div className='absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl' />
          <div className='relative bg-card border border-white/10 rounded-2xl p-8'>
            <h3 className='text-2xl md:text-3xl font-bold text-white mb-6'>
              How We Work Differently
            </h3>
            <StaggerChildren>
              <ul className='space-y-4'>
                {benefits.map((text, i) => (
                  <StaggerItem key={i}>
                    <li className='flex items-start gap-3 text-gray-300'>
                      <CheckCircle2 className='mt-1 w-5 h-5 text-primary flex-shrink-0' />
                      <span className='leading-relaxed'>{text}</span>
                    </li>
                  </StaggerItem>
                ))}
              </ul>
            </StaggerChildren>
          </div>
        </SlideIn>
      </div>
    </Container>
  );
}
