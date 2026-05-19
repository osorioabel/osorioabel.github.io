import SocialMedia from "./SocialMedia";
import { site } from "../../../content/site";

export default function Footer() {
  return (
    <footer className="w-full bg-white px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6">
          <SocialMedia variant="dark" />
          <p className="text-center text-sm text-slate-500">
            © 2026 - {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
