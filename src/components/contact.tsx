// /components/ContactCard.tsx
import Link from "next/link";

export default function ContactCard() {
  return (
    <section
      id="contact"
      className="mt-16 border-t border-slate-800 pt-6"
    >
      <div className="flex flex-col gap-4 text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        {/* Left side */}
        <div>
          <p className="font-semibold text-yellow-100">Get in touch</p>
          <p className="text-sm">
            Based in New Orleans, LA • Open to Cloud/DevOps roles
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:jeff@itodyssey.io"
            className="rounded-full border border-yellow-300/40 px-3 py-1 text-sm text-yellow-300 hover:bg-yellow-300/10"
          >
            Email
          </a>
          <Link
            href="https://www.linkedin.com/in/jeff-fontenot"
            target="_blank"
            className="rounded-full border border-yellow-300/40 px-3 py-1 text-sm text-yellow-300 hover:bg-yellow-300/10"
          >
            LinkedIn
          </Link>
          <Link
            href="/Resume.pdf"
            className="rounded-full border border-yellow-300/40 px-3 py-1 text-sm text-yellow-300 hover:bg-yellow-300/10"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
