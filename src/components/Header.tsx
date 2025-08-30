"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/20 border-b border-white/10">
      <div className="flex justify-center py-4">
        <div className="max-w-5xl flex justify-between items-center px-4 sm:px-6 lg:px-8 font-medium text-white w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/Triquetra-Logo.png"
              alt="IT Odyssey" 
              className="h-16 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/about"
              className="nav-link text-white/70 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link 
              href="/projects"
              className="nav-link text-white/70 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/blog"
              className="nav-link text-white/70 hover:text-white transition-colors"
            >
              Blog
            </Link>
          </nav>
          
          {/* Desktop CTA Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden md:inline-flex
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

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 py-4 space-y-4">
            <Link 
              href="/about" 
              className="block text-white/70 hover:text-white transition-colors py-2"
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className="block text-white/70 hover:text-white transition-colors py-2"
            >
              Projects
            </Link>
            <Link 
              href="/blog" 
              className="block text-white/70 hover:text-white transition-colors py-2"
            >
              Blog
            </Link>
            {/* Mobile CTA Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
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
      )}
    </div>
  );
}