"use client";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Star,
  ArrowRight,
  CheckCircle2,
  Rocket,
  MapPin,
  DollarSign,
  MessageSquare,
  Award,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  siReact,
  siNextdotjs,
  siOpenjdk,
  siPython,
  siWordpress,
  siZoho,
} from "simple-icons";

// Animated counter component
function AnimatedCounter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  );
}

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // HARDCODED SOLUTIONS
  const featuredSolutions = [
    {
      _id: "1",
      title: "Website Design Michigan",
      slug: { current: "website-design-michigan" },
      excerpt:
        "Professional website design built for performance and results. Whether custom-coded or platform-based, we create beautiful, high-converting websites for Michigan businesses.",
      icon: "Palette",
    },
    {
      _id: "2",
      title: "Custom Software Development",
      slug: { current: "custom-software-development" },
      excerpt:
        "Enterprise-grade applications built with Java, Python, and React. Scalable solutions designed to grow with your business.",
      icon: "Code2",
    },
    {
      _id: "3",
      title: "SEO & Digital Marketing",
      slug: { current: "seo-digital-marketing" },
      excerpt:
        "Data-driven SEO strategies that dominate local search. Get found by customers actively searching for your services.",
      icon: "TrendingUp",
    },
  ];

  const techStack = [
    { name: "React", icon: siReact, color: "#61DAFB" },
    { name: "Next.js", icon: siNextdotjs, color: "#000000" },
    { name: "Java", icon: siOpenjdk, color: "#007396" },
    { name: "Python", icon: siPython, color: "#3776AB" },
    { name: "WordPress", icon: siWordpress, color: "#21759B" },
    { name: "Zoho", icon: siZoho, color: "#C8202E" },
  ];

  const stats = [
    { icon: Award, value: 150, suffix: "+", label: "Projects Delivered" },
    { icon: Users, value: 98, suffix: "%", label: "Client Satisfaction" },
    { icon: TrendingUp, value: 41, suffix: "", label: "Five-Star Reviews" },
    { icon: Clock, value: 10, suffix: "+", label: "Years Experience" },
  ];

  const reviews = [
    {
      name: "Julie Wilson",
      review:
        "Andrew did a fantastic job updating our company's website. His knowledge and professionalism are top notch. He has gone above and beyond to ensure we are happy.",
    },
    {
      name: "Jacob Hoyt",
      review:
        "From start to finish, their team was professional, responsive, and incredibly knowledgeable. The quality of their work is top-notch, and their attention to detail is impressive.",
    },
    {
      name: "Amber Thomas",
      review:
        "Andrew is amazing! He custom built a new website for our business giving us a more modern look. He is always available to answer questions and help me on the stuff that is super techy!",
    },
    {
      name: "Andrea Schrank",
      review:
        "Andrew has been a lifesaver in many situations. He is always courteous and full of great tips and ideas on improving our websites. We would not use anyone else.",
    },
    {
      name: "Chad Purcell",
      review:
        "Andrew calmly guided us through getting our website up and going again and did an outstanding job along the way. He was there at any time day or night and even responded over the weekend.",
    },
    {
      name: "Larry Hanson",
      review:
        "A.J. has been an incredible help guiding us with setting up what I'm told is a kick ass website! His knowledge and creativity have given us the utmost confidence in him and his business.",
    },
  ];

  return (
    <>
      {/* HERO SECTION WITH PARALLAX */}
      <section
        ref={heroRef}
        className='relative min-h-[80vh] md:min-h-[85vh] flex items-center overflow-hidden'
      >
        {/* Background with parallax */}
        <motion.div style={{ y }} className='absolute inset-0 z-0'>
          <Image
            src='/hero-background.jpg'
            alt='Code Crafted Digital'
            fill
            className='object-cover'
            priority
            quality={90}
          />
          <div className='absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80' />
        </motion.div>

        {/* Animated gradient orbs */}
        <div className='absolute top-1/4 -left-48 w-96 h-96 bg-[#0062a4]/20 rounded-full blur-[120px] animate-pulse' />
        <div className='absolute bottom-1/4 -right-48 w-96 h-96 bg-[#0062a4]/10 rounded-full blur-[120px] animate-pulse' />

        <Container className='relative z-10 py-20'>
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='max-w-4xl'
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className='mb-6'
            >
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
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6'
            >
              Enterprise-Grade Solutions for{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 bg-[length:200%_auto] animate-gradient'>
                Michigan Businesses
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl'
            >
              We don't build template websites. We engineer custom software,
              high-performance web applications, and data-driven marketing
              strategies that actually drive results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='flex flex-col sm:flex-row gap-4'
            >
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
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* STATS SECTION */}
      <section className='py-16 md:py-20 border-y border-white/5 bg-card/30'>
        <Container>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='text-center'
                >
                  <div className='inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4'>
                    <IconComponent className='w-6 h-6 text-primary' />
                  </div>
                  <div className='text-4xl md:text-5xl font-bold text-white mb-2'>
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className='text-sm text-gray-400'>{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* TECH STACK MARQUEE */}
      <section className='py-12 bg-card/50 border-y border-white/5 overflow-hidden'>
        <div className='relative flex'>
          {/* Animated logos */}
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
            className='flex gap-8 items-center shrink-0'
          >
            {[...techStack, ...techStack, ...techStack].map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                whileHover={{ scale: 1.1, y: -4 }}
                className='flex items-center gap-3 px-6 cursor-pointer group'
              >
                <div className='relative'>
                  <svg
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-8 h-8 transition-all duration-300'
                    fill='currentColor'
                    style={{ color: "#64748b" }}
                  >
                    <path d={tech.icon.path} />
                  </svg>
                  <div
                    className='absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity'
                    style={{ backgroundColor: tech.color }}
                  />
                </div>
                <span className='font-medium text-sm text-gray-400 group-hover:text-white transition-colors whitespace-nowrap'>
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Duplicate for seamless loop */}
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
            className='flex gap-8 items-center shrink-0'
          >
            {[...techStack, ...techStack, ...techStack].map((tech, index) => (
              <motion.div
                key={`${tech.name}-dup-${index}`}
                whileHover={{ scale: 1.1, y: -4 }}
                className='flex items-center gap-3 px-6 cursor-pointer group'
              >
                <div className='relative'>
                  <svg
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-8 h-8 transition-all duration-300'
                    fill='currentColor'
                    style={{ color: "#64748b" }}
                  >
                    <path d={tech.icon.path} />
                  </svg>
                  <div
                    className='absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity'
                    style={{ backgroundColor: tech.color }}
                  />
                </div>
                <span className='font-medium text-sm text-gray-400 group-hover:text-white transition-colors whitespace-nowrap'>
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROBLEM/SOLUTION SECTION */}
      <Container className='py-16 md:py-24'>
        <div className='grid md:grid-cols-2 gap-12 md:gap-16 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              Tired of Agencies That Overpromise and Underdeliver?
            </h2>
            <p className='text-lg text-gray-300 leading-relaxed mb-6'>
              Most agencies push expensive retainers, use offshore developers,
              and hide behind vague timelines. They sell you on results but
              deliver generic templates and empty promises.
            </p>
            <p className='text-lg text-gray-300 leading-relaxed'>
              After running multiple family businesses and watching companies
              get burned, we built Code Crafted Digital differently.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='relative'
          >
            <div className='absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl' />
            <div className='relative bg-card border border-white/10 rounded-2xl p-8'>
              <h3 className='text-2xl md:text-3xl font-bold text-white mb-6'>
                How We Work Differently
              </h3>
              <ul className='space-y-4'>
                {[
                  {
                    text: "Direct access to our team—no account managers or middlemen slowing things down",
                    delay: 0.1,
                  },
                  {
                    text: "Enterprise technology normally reserved for Fortune 500 companies",
                    delay: 0.2,
                  },
                  {
                    text: "Transparent pricing with clear proposals and no hidden fees",
                    delay: 0.3,
                  },
                  {
                    text: "Michigan-based team that understands your local market",
                    delay: 0.4,
                  },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: item.delay }}
                    className='flex items-start gap-3 text-gray-300'
                  >
                    <CheckCircle2 className='mt-1 w-5 h-5 text-primary flex-shrink-0' />
                    <span className='leading-relaxed'>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* FEATURED SOLUTIONS */}
      <section className='py-16 md:py-24 bg-card/30'>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4'>
              Our Solutions
            </h2>
            <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
              From custom web applications to comprehensive marketing
              strategies, we deliver results that matter.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-6 mb-10'>
            {featuredSolutions.map((solution: any, index: number) => {
              const IconComponent = solution.icon
                ? (LucideIcons as any)[solution.icon]
                : null;

              return (
                <motion.div
                  key={solution._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/${solution.slug.current}`}
                    className='group block h-full'
                  >
                    <Card className='h-full hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden'>
                      <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                        <div className='absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10' />
                      </div>

                      <CardHeader className='relative z-10'>
                        {IconComponent && (
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className='mb-4'
                          >
                            <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                              <IconComponent className='w-6 h-6 text-primary' />
                            </div>
                          </motion.div>
                        )}
                        <CardTitle className='text-xl group-hover:text-primary transition-colors'>
                          {solution.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className='relative z-10'>
                        <CardDescription className='line-clamp-3'>
                          {solution.excerpt}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-center'
          >
            <Button asChild size='lg' variant='outline' className='group'>
              <Link href='/solutions'>
                View All Solutions
                <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <Container className='py-16 md:py-24'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12'
        >
          Why Choose Code Crafted Digital
        </motion.h2>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {[
            {
              icon: Rocket,
              title: "Enterprise Technology",
              description:
                "We use the same frameworks and tools that power Fortune 500 companies—Next.js, React, Java, and Python.",
              delay: 0,
            },
            {
              icon: MapPin,
              title: "Michigan-Based",
              description:
                "Our team is located in Grand Blanc, serving businesses across Michigan. We understand your market and your customers.",
              delay: 0.1,
            },
            {
              icon: DollarSign,
              title: "Transparent Pricing",
              description:
                "Clear proposals with detailed breakdowns. No hidden fees, no surprise invoices, no confusing contracts.",
              delay: 0.2,
            },
            {
              icon: MessageSquare,
              title: "Direct Access",
              description:
                "Work directly with our engineering team throughout your project. No layers of account managers, just results.",
              delay: 0.3,
            },
          ].map((pillar, i) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: pillar.delay }}
                className='text-center group'
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className='inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors'
                >
                  <IconComponent className='w-8 h-8 text-primary' />
                </motion.div>
                <h3 className='text-xl font-bold text-white mb-3'>
                  {pillar.title}
                </h3>
                <p className='text-gray-300 leading-relaxed'>
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>

      {/* REVIEWS SECTION */}
      <section className='py-16 md:py-24 bg-card/30'>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <Badge
              variant='outline'
              className='mb-6 px-4 py-2 bg-primary/10 border-primary/20 text-primary'
            >
              <Star className='w-4 h-4 fill-primary mr-2' />
              41 Five-Star Reviews on Google
            </Badge>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4'>
              What Our Clients Say
            </h2>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className='flex flex-col h-full hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5'>
                  <CardHeader>
                    <div className='flex gap-1 mb-3'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className='w-4 h-4 fill-primary text-primary'
                        />
                      ))}
                    </div>
                    <CardDescription className='text-base leading-relaxed text-gray-300'>
                      "{review.review}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='mt-auto'>
                    <p className='font-semibold text-white'>{review.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='text-center'
          >
            <Button
              asChild
              size='lg'
              variant='outline'
              className='group'
              href='https://search.google.com/local/reviews?placeid=ChIJS9it2PlmI4gRDS-pkTQ9avE'
              target='_blank'
              rel='noopener noreferrer'
            >
              <a>
                Read All Reviews
                <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </a>
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <Container className='py-16 md:py-24'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-white/10 p-12 md:p-16 text-center'
        >
          <div
            className='absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2'
            aria-hidden='true'
          />
          <div className='relative z-10'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
              Ready to Build Something Better?
            </h2>
            <p className='text-xl text-gray-300 mb-10 max-w-2xl mx-auto'>
              Let's discuss how Code Crafted Digital can engineer solutions that
              drive real results for your Michigan business.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button asChild size='lg' className='text-lg px-8 py-6 group'>
                <Link href='/contact'>
                  Get A Quote
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
          </div>
        </motion.div>
      </Container>
    </>
  );
}
