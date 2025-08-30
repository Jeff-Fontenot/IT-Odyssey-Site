"use client";

import Link from "next/link";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { BadgeCheck, ChevronLeft, ChevronRight, Grid3X3, Layers } from "lucide-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { CertItem } from '@/types/certifications';

function StatusChip({ status }: { status: string }) {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "earned": return "bg-emerald-600 text-white";
      case "in-progress": return "bg-amber-500 text-black";
      case "planned": return "bg-slate-400 text-white";
      default: return "bg-slate-400 text-white";
    }
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusStyle(status)}`}>
      {status === "in-progress" ? "In Progress" : status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

function CertCard({ item, isListView = false }: { item: CertItem, isListView?: boolean }) {
  const cardClass = isListView ? "h-[200px] w-full" : "h-[375px] w-[250px] mx-auto";

  const CardInner = (
    <div className={`relative ${cardClass} overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl group`}>
      {/* Badge Image */}
      <div className={`${isListView ? 'h-28' : 'h-48'} w-full bg-gradient-to-br from-blue-950 to-slate-950 flex items-center justify-center`}>
        {item.image ? (
          <img src={item.image} alt={item.title} className="h-full w-full object-contain p-4" />
        ) : (
          <BadgeCheck className="h-16 w-16 text-white/60" />
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-[calc(100%-7rem)] sm:h-[calc(100%-12rem)]">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className={`${isListView ? 'text-sm' : 'text-base'} font-semibold text-white line-clamp-2`}>
              {item.title}
            </h3>
            {item.status && <StatusChip status={item.status} />}
          </div>

          {item.subtitle && (
            <p className={`${isListView ? 'text-xs' : 'text-sm'} text-white/70 mb-2`}>{item.subtitle}</p>
          )}

          {item.issuedOn && (
            <p className="text-xs text-white/50">
              Issued {new Date(item.issuedOn).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}
            </p>
          )}
        </div>
      </div>

      {/* Hover/focus Verify hint */}
      {item.href && (
        <div
          className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1
                     rounded-md px-2 py-1 text-xs bg-slate-900/70 ring-1 ring-white/10
                     opacity-0 translate-y-1 transition
                     group-hover:opacity-100 group-hover:translate-y-0
                     group-focus-within:opacity-100 group-focus-within:translate-y-0"
        >
          <span>Verify</span>
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  );

  // Make the entire card clickable if href exists
  return item.href ? (
    <Link
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open official credential for ${item.title}`}
      className="block focus:outline-none focus:ring-2 focus:ring-blue-500/60 rounded-2xl"
    >
      {CardInner}
    </Link>
  ) : (
    CardInner
  );
}


export default function SwiperBadges({ items }: { items: CertItem[] }) {
  const [isListView, setIsListView] = useState(false);

  // Find the most recent earned certificate for default slide
  const findLatestEarnedIndex = () => {
    const earnedCerts = items
      .map((item, index) => ({ ...item, originalIndex: index }))
      .filter(item => item.status === 'earned' && item.issuedOn)
      .sort((a, b) => new Date(b.issuedOn!).getTime() - new Date(a.issuedOn!).getTime());
    
    return earnedCerts.length > 0 ? earnedCerts[0].originalIndex : 0;
  };

  const initialSlide = findLatestEarnedIndex();

  return (
    <section className="relative mx-auto w-full max-w-5xl px-8">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">       
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Technical{' '}
          <span className="gradient-text">Certification</span>
        </h2>
        <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
          A showcase of my commitment to continuous learning and professional growth through industry-recognized certifications
        </p>
      </div>

      {/* Toggle Button - Centered below header */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-2 glass-container p-1">
          <button
            onClick={() => setIsListView(false)}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
              !isListView 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <Layers className="h-4 w-4" />
            Coverflow
          </button>
          <button
            onClick={() => setIsListView(true)}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
              isListView 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <Grid3X3 className="h-4 w-4" />
            List
          </button>
        </div>
      </div>

      {/* Conditional View Rendering */}
      {!isListView ? (
        /* Swiper Coverflow View */
        <>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1.25 },
              768: { slidesPerView: 3 }
            }}
            loop={true}
            initialSlide={initialSlide}
            coverflowEffect={{
              rotate: 45,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[EffectCoverflow, Navigation, Pagination]}
            className="certification-swiper"
            style={{ padding: '20px 0' }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <CertCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev glass-container !left-4 !w-12 !h-12 !rounded-full bg-white/5 backdrop-blur-md border border-white/10 after:!text-white after:!text-lg after:!font-bold"></div>
          <div className="swiper-button-next glass-container !right-4 !w-12 !h-12 !rounded-full bg-white/5 backdrop-blur-md border border-white/10 after:!text-white after:!text-lg after:!font-bold"></div>
        </>
      ) : (
        /* List View - Single Glass Container */
        <div className="glass-container p-6 h-auto">
          <div className="space-y-2">
            {items.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0">
                <div className="flex items-center gap-4 flex-1">
                  {/* Small Badge Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-950 to-slate-950 flex items-center justify-center flex-shrink-0">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      <BadgeCheck className="h-6 w-6 text-white/60" />
                    )}
                  </div>

                  {/* Certificate Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-white font-semibold">{item.title}</h3>
                      {item.status && <StatusChip status={item.status} />}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/70">
                      <span>{item.subtitle}</span>
                      {item.issuedOn && (
                        <span>
                          Issued {new Date(item.issuedOn).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}
                        </span>
                      )}
                    </div>
                  </div>
                      {/* Verify Button */}
                      {item.href && (
                        <Link
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open official credential for ${item.title}`}
                          className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm
                                    bg-slate-800 hover:bg-slate-700 ring-1 ring-white/10 text-white"
                        >
                          <BadgeCheck className="h-4 w-4" />
                          Verify
                        </Link>
                      )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}