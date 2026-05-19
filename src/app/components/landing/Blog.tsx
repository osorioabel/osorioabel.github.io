import { blogPosts } from "../../../content/blog";
import BlogItem from "./BlogItem";
import EmptyState from "./EmptyState";
import SectionTitle from "./SectionTitle";

export default function Blog() {
  const hasPosts = blogPosts.length > 0;

  return (
    <section id="blog" className="w-full bg-white px-6 py-16 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle subtitle="MY ARTICLES" title="Personal Blog" />
        {hasPosts ? (
          <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogItem key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="Articles are in progress"
            description="I am preparing notes on iOS architecture, product engineering, team practices, and the lessons I am learning while building my own projects."
          />
        )}
      </div>
    </section>
  );
}
