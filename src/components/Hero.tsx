export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Background (optional subtle gradient or texture) */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Logo */}
        <img 
          src="/Triquetra-Logo2.png" 
          alt="IT Odyssey Logo"
          className="h-40 w-auto mb-6"
        />

        {/* Wordmark */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            IT{' '}
            <span className="gradient-text">Odyssey</span>
          </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8">
          Thanks for being curious enough to look deeper.  
          This is the beginning of the journey.
        </p>

        {/* CTA */}
        <a
          href="https://jeff.itodyssey.io"
          className="
            md:inline-flex
            relative h-fit w-fit rounded-full
            border border-yellow-200/40
            bg-blue-200/10 px-4 py-2
            text-yellow-300
            outline-none
            transition-all
            focus:ring-offset-3
            focus:ring-2 focus:ring-yellow-300/30
            hover:animate-pulse
            hover:shadow-[0_0_15px_rgba(250,204,21,0.8)]"
          >
            View Resume
          </a> 
      </div>
    </section>
  );
}
