import { client } from "@/lib/sanity";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { Metadata } from "next";
import * as LucideIcons from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions | Code Crafted Digital",
  description:
    "Professional web design, development, and digital solutions for Michigan businesses.",
};

async function getSolutions() {
  return client.fetch(
    `
    *[_type == "solution"] | order(order asc) {
      _id,
      title,
      slug,
      excerpt,
      icon,
      order
    }
  `,
  );
}

export default async function SolutionsPage() {
  const solutions = await getSolutions();

  return (
    <>
      {/* Hero */}
      <section className='relative pt-16 pb-10 md:pt-24 md:pb-14 overflow-hidden'>
        <Container className='relative z-10'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white text-center mb-4'>
            Solutions
          </h1>
          <p className='text-center text-gray-300 text-lg md:text-xl max-w-2xl mx-auto'>
            Enterprise-grade technology and transparent service for Michigan
            businesses
          </p>
        </Container>
      </section>

      {/* Solutions Grid */}
      <Container className='py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {solutions.map((solution: any) => {
            // Dynamically get the Lucide icon
            const IconComponent = solution.icon
              ? (LucideIcons as any)[solution.icon]
              : null;

            return (
              <Link
                key={solution._id}
                href={`/${solution.slug.current}`}
                className='group h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md'
              >
                <Card className='h-full flex flex-col hover:border-primary transition-colors cursor-pointer'>
                  <CardHeader className='pb-4'>
                    {IconComponent && (
                      <div className='mb-4'>
                        <div className='w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                          <IconComponent className='w-6 h-6 text-primary' />
                        </div>
                      </div>
                    )}
                    <CardTitle className='text-xl leading-tight'>
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='flex-grow pb-4'>
                    <CardDescription className='text-sm line-clamp-3'>
                      {solution.excerpt}
                    </CardDescription>
                  </CardContent>
                  <div className='mt-auto'>
                    <Separator />
                    <CardFooter className='p-0 h-12 flex items-center justify-start px-6'>
                      <span className='text-sm text-white flex items-center gap-2 group-hover:gap-3 group-hover:text-primary group-hover:underline transition-all font-medium'>
                        Learn More <ArrowRight className='w-4 h-4' />
                      </span>
                    </CardFooter>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </>
  );
}
