import { client } from "@/lib/sanity";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import Container from "@/components/layout/Container";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

// Default trust signals
const DEFAULT_STATS = {
  clientCount: "500+ Michigan businesses served",
  yearFounded: "Since 2015",
  projectsCompleted: "1000+ projects delivered",
};

// CTA Defaults
const CTA_DEFAULTS = {
  heading: "Ready to elevate your digital presence?",
  text: "Let's discuss how Code Crafted Digital can engineer solutions that drive real results for your business.",
  primaryLabel: "Get A Quote",
  primaryUrl: "/contact",
  secondaryLabel: "Book A Call",
  secondaryUrl: "https://fantastical.app/andrewnichols/code-crafted-digital",
};

// Fetch content by slug - checks both pages and solutions
async function getContent(slug: string) {
  // First check if it's a solution
  const solution = await client.fetch(
    `
    *[_type == "solution" && slug.current == $slug][0] {
      _id,
      _type,
      title,
      slug,
      serviceKey,
      content,
      stats,
      faqs,
      hideCta,
      ctaHeading,
      ctaText,
      ctaPrimaryLabel,
      ctaPrimaryUrl,
      ctaSecondaryLabel,
      ctaSecondaryUrl,
      seo
    }
  `,
    { slug },
  );

  if (solution) return solution;

  // Then check if it's a page
  const page = await client.fetch(
    `
    *[_type == "page" && slug.current == $slug][0] {
      _id,
      _type,
      title,
      slug,
      content,
      hideCta,
      ctaHeading,
      ctaText,
      ctaPrimaryLabel,
      ctaPrimaryUrl,
      ctaSecondaryLabel,
      ctaSecondaryUrl,
      seo
    }
  `,
    { slug },
  );

  return page;
}

// Generate static params for all pages AND solutions
export async function generateStaticParams() {
  const pages = await client.fetch(`
    *[_type == "page"] {
      "slug": slug.current
    }
  `);

  const solutions = await client.fetch(`
    *[_type == "solution"] {
      "slug": slug.current
    }
  `);

  return [...pages, ...solutions].map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = await getContent(slug);

  if (!content) {
    return {
      title: "Page Not Found",
    };
  }

  // Generate schema for solutions
  const schema =
    content._type === "solution"
      ? {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: content.title,
              serviceType: content.serviceKey,
              provider: {
                "@type": "LocalBusiness",
                name: "Code Crafted Digital",
                telephone: "810-221-8844",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "546 E Reid Road",
                  addressLocality: "Grand Blanc",
                  addressRegion: "MI",
                  postalCode: "48423",
                  addressCountry: "US",
                },
                areaServed: {
                  "@type": "State",
                  name: "Michigan",
                },
              },
              areaServed: "Michigan",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://codecrafteddigital.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Solutions",
                  item: "https://codecrafteddigital.com/solutions",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: content.title,
                },
              ],
            },
            ...(content.faqs && content.faqs.length > 0
              ? [
                  {
                    "@type": "FAQPage",
                    mainEntity: content.faqs.map((faq: any) => ({
                      "@type": "Question",
                      name: faq.question,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                      },
                    })),
                  },
                ]
              : []),
          ],
        }
      : undefined;

  return {
    title: content.seo?.metaTitle || content.title,
    description: content.seo?.metaDescription || "",
    openGraph: {
      title: content.seo?.metaTitle || content.title,
      description: content.seo?.metaDescription || "",
    },
    ...(schema && {
      other: {
        "application/ld+json": JSON.stringify(schema),
      },
    }),
  };
}

// Portable Text components
const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className='text-2xl md:text-3xl font-bold mt-12 mb-5 text-white tracking-tight'>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className='text-xl md:text-2xl font-semibold mt-10 mb-4 text-white'>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className='text-lg md:text-xl font-semibold mt-8 mb-3 text-white'>
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className='text-base md:text-lg text-gray-300 leading-relaxed mb-5'>
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className='relative my-10 pl-6 md:pl-8'>
        <div className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full' />
        <p className='text-xl md:text-2xl font-medium text-white/90 italic leading-relaxed'>
          {children}
        </p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className='font-semibold text-white'>{children}</strong>
    ),
    em: ({ children }) => <em className='italic'>{children}</em>,
    code: ({ children }) => (
      <code className='bg-white/10 border border-white/10 px-2 py-1 rounded text-sm font-mono text-primary'>
        {children}
      </code>
    ),
    underline: ({ children }) => (
      <span className='underline decoration-primary/50 underline-offset-4'>
        {children}
      </span>
    ),
    "strike-through": ({ children }) => (
      <span className='line-through text-gray-500'>{children}</span>
    ),
    link: ({ children, value }) => {
      const href = value?.href || "";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          className='text-primary font-medium hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary underline-offset-4 transition-colors'
          {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className='my-6 space-y-3 text-gray-300'>{children}</ul>
    ),
    number: ({ children }) => (
      <ol className='my-6 space-y-3 text-gray-300 list-none'>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className='flex items-start gap-3 text-base md:text-lg leading-relaxed'>
        <span className='mt-2 md:mt-2.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0' />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className='flex items-start gap-3 text-base md:text-lg leading-relaxed list-decimal list-inside'>
        {children}
      </li>
    ),
  },
};

// Hero for Pages - Centered, clean
function PageHeroBlock({ block }: { block: any }) {
  return (
    <section className='relative pt-16 pb-10 md:pt-24 md:pb-14 overflow-hidden'>
      {block.image && (
        <>
          <Image
            src={urlFor(block.image).width(1920).height(1080).quality(85).url()}
            alt={block.image.alt || block.heading}
            fill
            className='object-cover'
            priority
            sizes='100vw'
          />
          <div
            className='absolute inset-0 bg-background/85'
            aria-hidden='true'
          />
        </>
      )}

      <Container className='relative z-10'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white text-center'>
          {block.heading}
        </h1>
      </Container>
    </section>
  );
}

// Hero for Solutions - With breadcrumbs, image-focused
function SolutionHeroBlock({ block }: { block: any }) {
  return (
    <section className='relative w-full h-[40vh] md:h-[50vh] flex items-end overflow-hidden'>
      {block.image && (
        <>
          <Image
            src={urlFor(block.image).width(1920).quality(85).url()}
            alt={block.image.alt || block.heading}
            fill
            className='object-cover'
            priority
            sizes='100vw'
          />
          <div
            className='absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20'
            aria-hidden='true'
          />
          <div
            className='absolute inset-0 bg-gradient-to-r from-background/50 to-transparent'
            aria-hidden='true'
          />
        </>
      )}

      <Container className='relative z-10 pb-6 md:pb-10'>
        {/* Breadcrumbs */}
        <nav className='mb-4 md:mb-6 text-sm text-gray-400'>
          <Link href='/' className='hover:text-white transition-colors'>
            Home
          </Link>
          <span className='mx-2'>/</span>
          <Link
            href='/solutions'
            className='hover:text-white transition-colors'
          >
            Solutions
          </Link>
          <span className='mx-2'>/</span>
          <span className='text-white'>{block.heading}</span>
        </nav>

        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-white max-w-5xl'>
          {block.heading}
        </h1>
      </Container>
    </section>
  );
}

// Rich Text Block
function RichTextBlock({ block }: { block: any }) {
  return (
    <Container className='pt-10 pb-6 md:pt-14 md:pb-8'>
      <article className='max-w-3xl mx-auto'>
        <PortableText
          value={block.content}
          components={portableTextComponents}
        />
      </article>
    </Container>
  );
}

// Trust Signals (Solutions only)
function TrustSignals({ stats }: { stats: any }) {
  const clientCount = stats?.clientCount || DEFAULT_STATS.clientCount;
  const yearFounded = stats?.yearFounded || DEFAULT_STATS.yearFounded;
  const projectsCompleted =
    stats?.projectsCompleted || DEFAULT_STATS.projectsCompleted;

  return (
    <Container className='py-10 md:py-14'>
      <div className='max-w-3xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-2xl bg-card border border-white/10'>
          <div className='text-center'>
            <div className='text-3xl font-bold text-primary mb-2'>
              {clientCount.split(" ")[0]}
            </div>
            <div className='text-sm text-gray-400'>
              {clientCount.split(" ").slice(1).join(" ")}
            </div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-primary mb-2'>
              {yearFounded.replace("Since ", "")}
            </div>
            <div className='text-sm text-gray-400'>Founded</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-primary mb-2'>
              {projectsCompleted.split(" ")[0]}
            </div>
            <div className='text-sm text-gray-400'>
              {projectsCompleted.split(" ").slice(1).join(" ")}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

// FAQ Section (Solutions only)
function FAQSection({ faqs }: { faqs: any[] }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <Container className='py-10 md:py-14'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-2xl md:text-3xl font-bold mb-8 text-white'>
          Frequently Asked Questions
        </h2>
        <div className='space-y-6'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='p-6 rounded-lg bg-card border border-white/10'
            >
              <h3 className='text-lg font-semibold text-white mb-3'>
                {faq.question}
              </h3>
              <p className='text-gray-300 leading-relaxed'>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

// CTA
function CTA({ content }: { content: any }) {
  const heading = content.ctaHeading || CTA_DEFAULTS.heading;
  const text = content.ctaText || CTA_DEFAULTS.text;
  const primaryLabel = content.ctaPrimaryLabel || CTA_DEFAULTS.primaryLabel;
  const primaryUrl = content.ctaPrimaryUrl || CTA_DEFAULTS.primaryUrl;
  const secondaryLabel =
    content.ctaSecondaryLabel || CTA_DEFAULTS.secondaryLabel;
  const secondaryUrl = content.ctaSecondaryUrl || CTA_DEFAULTS.secondaryUrl;

  return (
    <Container className='pt-4 pb-16 md:pt-6 md:pb-20'>
      <div className='relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-white/10 p-8 md:p-12'>
        <div
          className='absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2'
          aria-hidden='true'
        />
        <div className='relative z-10 max-w-2xl'>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>
            {heading}
          </h2>
          <p className='text-gray-300 mb-8'>{text}</p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button asChild size='lg' className='font-medium'>
              <Link href={primaryUrl}>{primaryLabel}</Link>
            </Button>
            <Button asChild variant='outline' size='lg' className='font-medium'>
              <a href={secondaryUrl}>{secondaryLabel}</a>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

// Block Renderer
function renderBlock(block: any, index: number, isSolution: boolean) {
  switch (block._type) {
    case "hero":
      return isSolution ? (
        <SolutionHeroBlock key={index} block={block} />
      ) : (
        <PageHeroBlock key={index} block={block} />
      );
    case "richText":
      return <RichTextBlock key={index} block={block} />;
    default:
      return null;
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = await getContent(slug);

  if (!content) {
    notFound();
  }

  const isSolution = content._type === "solution";

  return (
    <>
      {content.content?.map((block: any, index: number) =>
        renderBlock(block, index, isSolution),
      )}
      {isSolution && <TrustSignals stats={content.stats} />}
      {isSolution && <FAQSection faqs={content.faqs} />}
      {!content.hideCta && <CTA content={content} />}
    </>
  );
}
