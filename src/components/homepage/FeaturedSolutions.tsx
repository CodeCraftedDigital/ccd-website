import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleOnHover } from "@/components/animations/ScaleOnHover";

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

export function FeaturedSolutionsSection() {
  return (
    <section className='py-16 md:py-24 bg-card/30'>
      <Container>
        <FadeIn className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4'>
            Our Solutions
          </h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            From custom web applications to comprehensive marketing strategies,
            we deliver results that matter.
          </p>
        </FadeIn>

        <div className='grid md:grid-cols-3 gap-6 mb-10'>
          {featuredSolutions.map((solution, index) => {
            const IconComponent = solution.icon
              ? (LucideIcons as any)[solution.icon]
              : null;

            return (
              <FadeIn key={solution._id} delay={index * 0.1}>
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
                        <ScaleOnHover className='mb-4'>
                          <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                            <IconComponent className='w-6 h-6 text-primary' />
                          </div>
                        </ScaleOnHover>
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
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3} className='text-center'>
          <Button asChild size='lg' variant='outline' className='group'>
            <Link href='/solutions'>
              View All Solutions
              <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </Link>
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
