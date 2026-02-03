import { client } from "@/lib/sanity";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

const BlogPage = async () => {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt
    }
  `);

  return (
    <main className='container mx-auto px-4 py-12'>
      <h1 className='text-4xl font-bold mb-8'>Blog</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {posts.map((post: any) => (
          <Link key={post._id} href={`/blog/${post.slug.current}`}>
            <Card className='h-full hover:border-primary transition-colors cursor-pointer'>
              <CardHeader>
                <CardTitle className='text-xl'>{post.title}</CardTitle>
                <CardDescription>
                  {post.publishedAt &&
                    new Date(post.publishedAt).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
