import Link from "next/link";

export default function ComingSoon({
  title,
  blurb,
}: {
  title: string;
  blurb?: string;
}) {
  return (
    <section className="min-h-[60vh] grid place-items-center bg-slate-950">
      <div className="glass-container max-w-2xl w-full mx-auto rounded-2xl p-10 text-center border border-white/10 bg-white/5 backdrop-blur-md">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {title} <span className="gradient-text">Coming Soon</span>
        </h1>
        <p className="text-white/70 mb-8">
          {blurb ??
            "This page is being built. Check back soon for the full write-up and demos."}
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 transition"
          >
            Go Home
          </Link>
         {/*} <Link
            href="/contact"
            className="rounded-lg px-4 py-2 bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15 transition"
          >
            Contact Me
          </Link> */}
        </div>
      </div>
    </section>
  );
}
