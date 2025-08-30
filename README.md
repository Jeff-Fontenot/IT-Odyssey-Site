# Jeff Fontenot – Cloud Resume

A modern Cloud & DevOps Resume built with Next.js, Tailwind CSS, and TypeScript.  
This site is part of my IT Odyssey journey, showcasing certifications, projects, and skills in a modern, interactive way.

Live Site: [https://jeff.itodyssey.io](https://jeff.itodyssey.io)

---

## Features
- Built with Next.js (App Router), Tailwind CSS, and TypeScript
- Responsive layout with a coverflow gallery for certifications
- Downloadable, ATS-friendly PDF resume
- Projects showcase (Terraform, Kubernetes, PowerShell, Docker, etc.)
- Blog section (coming soon)
- Root landing page with curiosity message, quote rotator, and visitor counter

---

## Tech Stack
- Framework: Next.js
- Language: TypeScript
- Styling: Tailwind CSS + shadcn/ui
- Deployment: Vercel
- Utilities:
  - @tailwindcss/typography for blog styling
  - Next Metadata API for SEO + Open Graph cards
  - Planned: Vercel KV for visitor counters

---

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation
```bash
# Clone the repo
git clone https://github.com/yourusername/cloud-resume.git
cd cloud-resume

# Install dependencies
pnpm install

# Run development server
pnpm dev


app/
 ├─ about/          # About page (mission, vision, backstory)
 ├─ projects/       # Projects showcase
 ├─ blog/           # Blog posts (MDX planned)
 ├─ api/            # API routes (visits, what’s new, quotes)
 └─ page.tsx        # Root landing page
components/         # Reusable UI components
lib/                # Content data models
public/             # Static assets (logos, og.png, favicon)
