export type BlogPostMeta = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
  published: boolean;
};

export type BlogPost = BlogPostMeta & {
  content: string;
  readingTime: string;
};

const postFiles = import.meta.glob<string>("./posts/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
});

function parseFrontmatter(source: string): BlogPost {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match) {
    throw new Error("Blog post is missing frontmatter.");
  }

  const [, frontmatter, content] = match;
  const entries = frontmatter.split("\n").map((line) => {
    const separatorIndex = line.indexOf(":");
    return [line.slice(0, separatorIndex).trim(), line.slice(separatorIndex + 1).trim()];
  });

  const meta = Object.fromEntries(entries) as Record<string, string>;
  const words = content.trim().split(/\s+/).filter(Boolean).length;

  return {
    title: meta.title,
    date: meta.date,
    description: meta.description,
    tags: meta.tags.split(",").map((tag) => tag.trim()),
    slug: meta.slug,
    published: meta.published === "true",
    content: content.trim(),
    readingTime: `${Math.max(1, Math.ceil(words / 220))} min read`,
  };
}

export const blogPosts = Object.values(postFiles)
  .map(parseFrontmatter)
  .filter((post) => post.published)
  .sort((firstPost, secondPost) => secondPost.date.localeCompare(firstPost.date));

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
