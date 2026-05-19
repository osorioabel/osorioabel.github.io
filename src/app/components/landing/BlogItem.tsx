import { formatPostDate, type BlogPost } from "../../../content/blog";

export default function BlogItem({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <span>{post.readingTime}</span>
        </div>
        <h3 className="text-xl font-semibold leading-snug text-slate-950">{post.title}</h3>
        <p className="text-sm leading-7 text-slate-600">{post.description}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-soft px-3 py-1 text-xs font-medium text-slate-500">
              {tag}
            </span>
          ))}
        </div>
        <a href={`#/blog/${post.slug}`} className="inline-flex text-sm font-semibold text-brand transition-colors hover:text-brand-dark">
          Continue Reading
        </a>
      </div>
    </article>
  );
}
