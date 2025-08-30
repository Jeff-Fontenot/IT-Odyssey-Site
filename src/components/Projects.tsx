"use client";

import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Cloud Resume Challenge 2.0",
      description:
        "Rebuilt the Cloud Resume Challenge with a modern Next.js + Tailwind stack, leveraging server-side rendering for performance and interactivity. Integrated dynamic features for resume updates and portfolio visibility, aligning with enterprise-grade web development practices.",
      tech: ["Next.js", "Tailwind", "AWS Lambda", "DynamoDB", "Terraform", "GitHub Actions"],
      link: "https://github.com/Jeff-Fontenot",
    },
    {
      title: "Kubernetes Platform",
      description:
        "Deployed a production-style k3s cluster with AWS-hosted master and homelab worker nodes. Automated provisioning and security groups using Terraform. Integrated Prometheus & Grafana for real-time monitoring and alerting, demonstrating hybrid-cloud resiliency and observability.",
      tech: ["Kubernetes", "Terraform", "Ansible"],
      link: "https://github.com/Jeff-Fontenot",
    },
    {
      title: "Menu-Based PowerShell Automation",
      description:
        "Developed a modular PowerShell tool adopted by coworkers to streamline user, printer, and workstation lookups in Active Directory. Saved 2-3 minutes per call, reducing daily ticket resolution time across the team reinforcing repeatable documentation practices.",
      tech: ["PowerShell", "Active Directory"],
      link: "https://github.com/Jeff-Fontenot/ESD_Summary_Tool.git",
    },
    {
      title: "Enterprise Grade Homelab",
      description:
        "Designed and deployed contanerized services with Docker/Portainer, fronted by Traefik reverse proxy with automated TLS. Implemented Prometheus/Grafana monitoring and recursive DNS filtering with PiHole and Unbound, creating a secure production-style sandbox for testing cloud-native architectures.",
      tech: ["Proxmox", "Ubuntu Server", "Docker", "Traefik", "Zero Trust", "Prometheus", "Grafana"],
      link: "https://github.com/Jeff-Fontenot",
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
            Showcasing a selection of personal and professional projects that highlight my
            skills in cloud computing, DevOps, and web development
          </p>
        </div>

        {/* True Bento Grid Layout with gaps */}
        <div className="grid grid-cols-1 mx-auto md:grid-cols-5 grid-rows-none md:grid-rows-2 gap-6 h-auto md:h-auto max-w-5xl">
          {/* Row 1: Short (K8s) + Long (Cloud Resume) */}
          <Link
            href={projects[1].link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${projects[1].title} repository`}
            className="col-span-2 row-span-1 glass-container p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer bg-white/5 backdrop-blur-md border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
              {projects[1].title}
            </h3>
            <p className="text-white/70 mb-4 text-sm leading-relaxed">
              {projects[1].description}
            </p>
            <div className="flex flex-wrap gap-1">
              {projects[1].tech.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-green-600/20 text-green-300 text-xs rounded-full border border-green-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>

          <Link
            href={projects[0].link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${projects[0].title} repository`}
            className="col-span-3 row-span-1 glass-container p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer bg-white/5 backdrop-blur-md border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
              {projects[0].title}
            </h3>
            <p className="text-white/70 mb-4 text-sm leading-relaxed">
              {projects[0].description}
            </p>
            <div className="flex flex-wrap gap-1">
              {projects[0].tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>

          {/* Row 2: Long (Homelab) + Short (ESD) */}
          <Link
            href={projects[3].link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${projects[3].title} repository`}
            className="col-span-3 row-span-1 glass-container p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer bg-white/5 backdrop-blur-md border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
              {projects[3].title}
            </h3>
            <p className="text-white/70 mb-4 text-sm leading-relaxed">
              {projects[3].description}
            </p>
            <div className="flex flex-wrap gap-1">
              {projects[3].tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>

          <Link
            href={projects[2].link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${projects[2].title} repository`}
            className="col-span-2 row-span-1 glass-container p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer bg-white/5 backdrop-blur-md border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
              {projects[2].title}
            </h3>
            <p className="text-white/70 mb-4 text-sm leading-relaxed">
              {projects[2].description}
            </p>
            <div className="flex flex-wrap gap-1">
              {projects[2].tech.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-orange-600/20 text-orange-300 text-xs rounded-full border border-orange-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
