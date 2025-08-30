import Link from 'next/link';
import { Github, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full backdrop-blur-md bg-slate-950/20 border-t border-white/10 py-8">
      <div className="flex justify-center">
        <div className="max-w-5xl flex justify-between items-center px-4 sm:px-6 lg:px-8 font-medium text-white w-full">
          {/* Logo - Home Link */}
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/Triquetra-Logo.png"
              alt="IT Odyssey" 
              className="h-16 w-auto"
            />
          </Link>
          
          {/* Social Links */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-6">
              <Link 
                href="https://github.com/Jeff-Fontenot" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/jeff-fontenot/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          {/* CTA Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
            Download My Resume
          </a>

        </div>
      </div>
      <div className="flex items-center justify-center mt-6 text-sm text-white/50">
        <p>© 2025 Jeff Fontenot. All rights reserved.</p>
      </div>
    </footer>
  );
}