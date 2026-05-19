import { useEffect, useState } from "react";
import Blog from "./components/landing/Blog";
import BlogPostPage from "./components/landing/BlogPostPage";
import ContactForm from "./components/landing/ContactForm";
import EducationSkills from "./components/landing/EducationSkills";
import Experience from "./components/landing/Experience";
import Footer from "./components/landing/Footer";
import Header from "./components/landing/Header";
import Hero from "./components/landing/Hero";
import Portfolio from "./components/landing/Portfolio";
import Services from "./components/landing/Services";
import { getPostBySlug } from "../content/blog";

function getCurrentBlogSlug() {
  const match = window.location.hash.match(/^#\/blog\/(.+)$/);
  return match?.[1];
}

export default function App() {
  const [blogSlug, setBlogSlug] = useState(getCurrentBlogSlug);
  const post = blogSlug ? getPostBySlug(blogSlug) : undefined;

  useEffect(() => {
    function handleHashChange() {
      const nextBlogSlug = getCurrentBlogSlug();

      setBlogSlug(nextBlogSlug);

      if (nextBlogSlug) {
        window.scrollTo({ top: 0 });
      }
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (post) {
    return <BlogPostPage post={post} />;
  }

  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Experience />
        <Blog />
        <EducationSkills />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
