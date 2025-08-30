export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-20">
      {/* Mobile Background Portrait */}
      <div className="absolute inset-0 md:hidden">
        <img 
          src="/B&W_Ghost_Portrait.png" 
          alt="Jeff Fontenot"
          className="w-full h-full object-cover opacity-30 filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
          
          {/* Left Column - Logo & Text Stack */}
          <div className="text-center space-y-2">
            {/* Logo */}
            <div className="flex justify-center md:justify-center">
              <img 
                src="/Triquetra-Logo2.png" 
                alt="IT Odyssey Logo"
                className="h-50 w-auto"
              />
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold gradient-text leading-tight">
              Jeff Fontenot
            </h1>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-yellow-400">
              Cloud / DevOps Engineer
            </h2>

            {/* Subtitle/Description */}
            <p className="text-lg md:text-center text-white/80-semibold leading-relaxed max-w-6xl">
              Using modern cloud technologies to automate deployment and build scalable, secure, and intelligent solutions.
            </p>

            <p className="text-2xl md:text-2xl lg:text-3xl font-semibold text-yellow-400">
              Active Secret Security Clearance
            </p>

            {/* Additional Description */}
            <p className="text-base md:text-center text-white/70-semibold leading-relaxed max-w-4xl">
              Welcome to my interactive resume showcasing real-world cloud engineering projects.
            </p>
          </div>

          {/* Right Column - Desktop Portrait */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative">
              <img 
                src="/B&W_Ghost_Portrait.png" 
                alt="Jeff Fontenot"
                className="w-96 h-96 lg:w-[500px] lg:h-[600px] object-cover rounded-2xl opacity-60 filter grayscale shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}