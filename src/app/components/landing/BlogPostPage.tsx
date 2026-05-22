import { formatPostDate, type BlogPost } from "../../../content/blog";
import Footer from "./Footer";
import Header from "./Header";
import MarkdownContent from "./MarkdownContent";

export default function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <article className="mx-auto max-w-4xl">
          <a
            href="#blog"
            className="mb-10 inline-flex text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            Back to writing
          </a>
          <div className="mb-10 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-500">
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span>{post.readingTime}</span>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">{post.description}</p>
          </div>
          <MarkdownContent content={post.content} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
