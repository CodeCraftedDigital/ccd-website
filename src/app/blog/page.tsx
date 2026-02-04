import { client } from "@/lib/sanity";
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
import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Container from "@/components/layout/Container";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const BlogPage = async () => {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      image
    }
  `);

  return (
    <Container className='py-12'>
      <h1 className='text-4xl font-bold mb-8'>Blog</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {posts.map((post: any) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className='group h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md'
          >
            <Card className='h-full flex flex-col hover:border-primary transition-colors cursor-pointer p-0 overflow-hidden rounded-md'>
              {post.image && (
                <div className='relative w-full h-48 overflow-hidden flex-shrink-0'>
                  <Image
                    src={urlFor(post.image).width(400).height(200).url()}
                    alt={post.image.alt || post.title}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
              )}
              <div className='flex flex-col flex-grow p-6 pb-0'>
                <CardHeader className='p-0 pb-2'>
                  <CardDescription className='text-xs'>
                    {post.publishedAt &&
                      new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                  </CardDescription>
                  <CardTitle className='text-lg line-clamp-2 leading-tight'>
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className='flex-grow p-0 pb-4'>
                  {post.excerpt ? (
                    <p className='text-muted-foreground text-sm line-clamp-3'>
                      {post.excerpt}
                    </p>
                  ) : (
                    <p className='text-muted-foreground text-sm line-clamp-3 opacity-0'>
                      Placeholder
                    </p>
                  )}
                </CardContent>
              </div>
              <div className='mt-auto'>
                <Separator />
                <CardFooter className='p-0 h-12 flex items-center justify-start px-6'>
                  <span className='text-sm text-white flex items-center gap-2 group-hover:gap-3 group-hover:text-primary group-hover:underline transition-all font-medium'>
                    Read More <ArrowRight className='w-4 h-4' />
                  </span>
                </CardFooter>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default BlogPage;
