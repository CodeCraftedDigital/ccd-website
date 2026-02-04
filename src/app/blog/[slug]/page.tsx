import { client } from "@/lib/sanity";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Linkedin, Twitter } from "lucide-react";
import imageUrlBuilder from "@sanity/image-url";
import Container from "@/components/layout/Container";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

// Calculate reading time
function getReadingTime(body: any[]): number {
  if (!body) return 1;
  const text = body
    .filter((block: any) => block._type === "block")
    .map((block: any) =>
      block.children?.map((child: any) => child.text).join(" "),
    )
    .join(" ");
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

// Fetch single post by slug
async function getPost(slug: string) {
  return client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      image,
      body,
      categories[]-> {
        _id,
        title
      },
      seo
    }
  `,
    { slug },
  );
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: post.image
        ? [urlFor(post.image).width(1200).height(630).url()]
        : [],
    },
  };
}

// Portable Text components for custom rendering
const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mt-12 mb-6 text-white tracking-tight'>
        {children}
      </h2>
    ),
    h2: ({ children }) => (
      <h2 className='text-2xl md:text-3xl font-bold mt-10 mb-5 text-white tracking-tight'>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className='text-xl md:text-2xl font-semibold mt-8 mb-4 text-white'>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className='text-lg md:text-xl font-semibold mt-6 mb-3 text-white'>
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
        <p className='text-lg md:text-xl lg:text-2xl font-medium text-white/90 italic leading-relaxed'>
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
      <ol className='my-6 space-y-3 text-gray-300 list-none counter-reset-item'>
        {children}
      </ol>
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

// Share buttons component
function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const url = `https://codecrafteddigital.com/blog/${slug}`;

  return (
    <div className='flex items-center gap-2'>
      <span className='text-sm text-gray-400 mr-1'>Share</span>
      <Button
        variant='ghost'
        size='icon'
        className='h-9 w-9 rounded-full hover:bg-white/10 hover:text-primary transition-colors'
        asChild
      >
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Share on Twitter'
        >
          <Twitter className='h-4 w-4' />
        </a>
      </Button>
      <Button
        variant='ghost'
        size='icon'
        className='h-9 w-9 rounded-full hover:bg-white/10 hover:text-primary transition-colors'
        asChild
      >
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Share on LinkedIn'
        >
          <Linkedin className='h-4 w-4' />
        </a>
      </Button>
    </div>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const readingTime = getReadingTime(post.body);

  return (
    <>
      {/* Hero Section */}
      <div className='relative w-full h-[50vh] md:h-[60vh] flex items-end overflow-hidden'>
        {/* Background Image */}
        {post.image ? (
          <Image
            src={urlFor(post.image).width(1920).height(1080).quality(85).url()}
            alt={post.image.alt || post.title}
            fill
            className='object-cover'
            priority
            sizes='100vw'
          />
        ) : (
          <div
            className='absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background'
            aria-hidden='true'
          />
        )}

        {/* Gradient Overlays */}
        <div
          className='absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20'
          aria-hidden='true'
        />
        <div
          className='absolute inset-0 bg-gradient-to-r from-background/50 to-transparent'
          aria-hidden='true'
        />

        {/* Hero Content */}
        <Container className='relative z-10 pb-8 md:pb-12 pt-32'>
          {/* Back Link */}
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6 md:mb-8 group'
          >
            <ArrowLeft className='w-4 h-4 group-hover:-translate-x-1 transition-transform' />
            Back to Blog
          </Link>

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className='flex flex-wrap gap-2 mb-4 md:mb-6'>
              {post.categories.map((category: any) => (
                <span
                  key={category._id}
                  className='text-xs font-medium px-3 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30'
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white max-w-4xl mb-4 md:mb-6'>
            {post.title}
          </h1>

          {/* Meta Row */}
          <div className='flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-3 text-gray-400'>
            {post.publishedAt && (
              <div className='flex items-center gap-2'>
                <Calendar className='w-4 h-4' />
                <time className='text-sm'>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            )}
            <div className='flex items-center gap-2'>
              <Clock className='w-4 h-4' />
              <span className='text-sm'>{readingTime} min read</span>
            </div>
            <div className='hidden sm:block'>
              <ShareButtons title={post.title} slug={post.slug.current} />
            </div>
          </div>
        </Container>
      </div>

      {/* Article Content */}
      <Container className='pt-10 pb-6 md:pt-14 md:pb-8'>
        <article className='max-w-3xl mx-auto'>
          {/* Excerpt / Lead */}
          {post.excerpt && (
            <p className='text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 md:mb-10 font-light'>
              {post.excerpt}
            </p>
          )}

          <Separator className='mb-8 md:mb-10 bg-white/10' />

          {/* Body Content */}
          {post.body && (
            <div className='prose-custom'>
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            </div>
          )}

          {/* Bottom Share */}
          <Separator className='my-10 md:my-12 bg-white/10' />

          <div className='flex flex-col sm:flex-row items-center justify-between gap-6'>
            <p className='text-gray-400 text-sm'>
              Found this helpful? Share it with others.
            </p>
            <ShareButtons title={post.title} slug={post.slug.current} />
          </div>
        </article>

        {/* CTA Section */}
        <section className='mt-16 md:mt-24'>
          <div className='relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-white/10 p-8 md:p-12'>
            <div
              className='absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2'
              aria-hidden='true'
            />
            <div className='relative z-10 max-w-2xl'>
              <h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>
                Ready to elevate your digital presence?
              </h2>
              <p className='text-gray-300 mb-8'>
                Let&apos;s discuss how Code Crafted Digital can engineer
                solutions that drive real results for your business.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button asChild size='lg' className='font-medium'>
                  <Link href='/contact'>Get A Quote</Link>
                </Button>
                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='font-medium'
                >
                  <a href='https://fantastical.app/andrewnichols/code-crafted-digital'>
                    Book A Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
