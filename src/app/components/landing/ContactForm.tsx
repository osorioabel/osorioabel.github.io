import { useState, type FormEvent } from "react";
import svgPaths from "../../../imports/svg-aqdowdil4a";
import { site } from "../../../content/site";
import Wrapper from "./Wrapper";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("company")) {
      setSubmissionState("success");
      form.reset();
      return;
    }

    try {
      const response = await fetch(site.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setSubmissionState("success");
      form.reset();
    } catch {
      setSubmissionState("error");
    }
  }

  const isPlaceholderEndpoint = site.formspreeEndpoint.includes("your-form-id");

  return (
    <section id="contact" className="w-full bg-soft px-6 py-16 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="space-y-4">
              <label className="block">
                <span className="sr-only">Name</span>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full rounded-xl bg-white px-6 py-4 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-xl bg-white px-6 py-4 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </label>
              <label className="block">
                <span className="sr-only">Message</span>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  minLength={20}
                  className="w-full resize-none rounded-xl bg-white px-6 py-4 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </label>
            </div>

            <button
              className="w-full rounded-xl bg-brand px-6 py-4 font-semibold text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
              disabled={submissionState === "submitting" || isPlaceholderEndpoint}
              type="submit"
            >
              {submissionState === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {isPlaceholderEndpoint && (
              <p className="text-sm leading-7 text-slate-600">
                Add your Formspree form id in <code>src/content/site.ts</code> before enabling submissions.
              </p>
            )}
            {submissionState === "success" && <p className="text-sm font-medium text-emerald-700">Message sent. I will get back to you soon.</p>}
            {submissionState === "error" && <p className="text-sm font-medium text-red-700">The message could not be sent. Email me directly instead.</p>}
          </form>

          <div className="space-y-8">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">CONTACT</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">Let’s talk about apps, architecture, and product ideas.</h2>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lilac">
                <Wrapper additionalClassNames="w-6 h-6">
                  <g id="mail">
                    <path d={svgPaths.p359ea700} stroke="#7E74F1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.518958" />
                  </g>
                </Wrapper>
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-slate-950">E-Mail</h3>
                <a className="text-sm text-slate-600 transition-colors hover:text-brand" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
