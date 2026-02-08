import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroParallax } from "./HeroParallax";
import { FadeIn } from "@/components/animations/FadeIn";

export function HeroSection() {
  return (
    <section className='relative min-h-[80vh] md:min-h-[85vh] flex items-center overflow-hidden'>
      <HeroParallax />

      {/* Animated gradient orbs */}
      <div className='absolute top-1/4 -left-48 w-96 h-96 bg-[#0062a4]/20 rounded-full blur-[120px] animate-pulse' />
      <div className='absolute bottom-1/4 -right-48 w-96 h-96 bg-[#0062a4]/10 rounded-full blur-[120px] animate-pulse' />

      <Container className='relative z-10 py-20'>
        <div className='max-w-4xl'>
          {/* Badge */}
          <FadeIn delay={0.1}>
            <div className='mb-6'>
              <Badge
                variant='outline'
                className='px-4 py-2 bg-primary/10 border-primary/20 text-primary'
              >
                <span className='relative flex h-2 w-2 mr-2'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75' />
                  <span className='relative inline-flex rounded-full h-2 w-2 bg-primary' />
                </span>
                Enterprise Software Engineering for Michigan
              </Badge>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={0.2}>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6'>
              Enterprise-Grade Solutions for{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 bg-[length:200%_auto] animate-gradient'>
                Michigan Businesses
              </span>
            </h1>
          </FadeIn>

          {/* Subheading */}
          <FadeIn delay={0.3}>
            <p className='text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl'>
              We don't build template websites. We engineer custom software,
              high-performance web applications, and data-driven marketing
              strategies that actually drive results.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.4}>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button asChild size='lg' className='text-lg px-8 py-6 group'>
                <Link href='/solutions'>
                  View Solutions
                  <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </Link>
              </Button>
              <Button
                asChild
                variant='outline'
                size='lg'
                className='text-lg px-8 py-6'
              >
                <a href='https://fantastical.app/andrewnichols/code-crafted-digital'>
                  Book A Call
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
