import { client } from "@/lib/sanity";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

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
    <main className='container mx-auto px-4 py-12'>
      <h1 className='text-4xl font-bold mb-8'>Blog</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {posts.map((post: any) => (
          <Link key={post._id} href={`/blog/${post.slug.current}`}>
            <Card className='h-full hover:border-primary transition-colors cursor-pointer overflow-hidden'>
              {post.image && (
                <div className='relative w-full h-48'>
                  <Image
                    src={urlFor(post.image).width(400).height(200).url()}
                    alt={post.image.alt || post.title}
                    fill
                    className='object-cover'
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className='text-lg line-clamp-2'>
                  {post.title}
                </CardTitle>
                <CardDescription>
                  {post.publishedAt &&
                    new Date(post.publishedAt).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              {post.excerpt && (
                <CardContent>
                  <p className='text-muted-foreground text-sm line-clamp-2'>
                    {post.excerpt}
                  </p>
                </CardContent>
              )}
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
