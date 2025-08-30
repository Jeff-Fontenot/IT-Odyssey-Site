export default function Education() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Continuous{' '}
            <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Combining formal education with hands-on experimentation and emerging technology exploration
            
          </p>
        </div>

        {/* Main Content Layout - Two Equal Columns */}
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left Column - Formal Education */}
            <div className="glass-container p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-4">
                Formal Education
              </h3>
              
              {/* Current Bachelor's */}
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-yellow-400 mb-2">
                    Bachelor of Science in Cloud Computing
                  </h4>
                  <p className="text-white/80 mb-1">Western Governors University</p>
                  <p className="text-sm text-blue-300 mb-3">Expected January 2026 • Currently Enrolled | 101 of 121 Credits Complete</p>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full w-101/120"></div>
                  </div>
                </div>

                <div className="border-l-2 border-yellow-400/30 pl-6">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Associate of General Studies
                  </h4>
                  <p className="text-white/80 mb-1">Delgado Community College, New Orleans</p>
                  <p className="text-sm text-emerald-300">2010 • 4.0 GPA Honor Graduate</p>
                </div>
              </div>

              {/* Future Plans */}
              <div className="pt-6 border-t border-white/10">
                <h5 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                  Future Consideration
                </h5>
                <p className="text-white/70">
                  {`AI/ML Master's Program at WGU following Bachelor's completion`}
                </p>
              </div>
            </div>

            {/* Right Column - Learning Philosophy */}
            <div className="glass-container p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold text-white mb-6">
                Beyond the Classroom
              </h3>
              
              <div className="space-y-6">
                <p className="text-white/80 leading-relaxed">
                  While formal education provides the foundation, I believe the most valuable learning in technology comes from hands-on experimentation and real-world problem solving.
                </p>
                
                <p className="text-white/80 leading-relaxed">
                  My homelab serves as a continuous learning environment where I explore cutting-edge technologies, test infrastructure patterns, and experiment with emerging tools before they become mainstream in enterprise environments.
                </p>
                
                <div className="bg-white/5 rounded-lg p-4 border-l-4 border-yellow-400">
                  <p className="text-white/90 italic mb-2">
                    {`"Technology is ever progressing, ever changing, and so a career in IT should also be a continuous journey of growth and development. Never stop learning."`}
                  </p>
                  <p className="text-yellow-400 font-semibold text-center">
                    — Seek Always A New Horizon
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3 justify-center mt-4">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                    Self-Directed Learning
                  </span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-300 text-xs rounded-full border border-green-500/30">
                    Homelab Experimentation
                  </span>
                  <span className="px-3 py-1 bg-orange-600/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                    Open Source
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}