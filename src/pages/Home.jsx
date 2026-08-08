import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import content from "@/data/content.json";
import { useLang } from "@/i18n/LanguageContext";

const featured = content.arcani.slice(0, 3);

export default function Home() {
  const { t } = useLang();
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/media/arcani/portrait.webp" alt="Cortona Francesca" className="w-full h-full object-cover object-center opacity-40" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(11,10,15,0.96) 0%, rgba(11,10,15,0.7) 45%, rgba(11,10,15,0.5) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--bg) 2%, transparent 40%)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }} className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-14 h-px bg-[var(--gold)]" />
              <span className="font-ui text-[0.72rem] tracking-[0.34em] uppercase text-gold">{t.home.role}</span>
            </div>
            <h1 className="font-display text-[3.2rem] sm:text-[4.5rem] lg:text-[5.6rem] leading-[0.95] text-[#f3eee7]">
              CORTONA<span className="block text-gold-bright mt-2 tracking-[0.06em]">FRANCESCA</span>
            </h1>
            <p className="font-serif-el italic text-2xl md:text-3xl text-[#c7c0b7] mt-8 leading-snug">{t.home.quote}</p>
            <p className="font-ui text-sm text-gold-bright tracking-wide2 mt-3">— Cortona</p>
            <div className="flex flex-wrap gap-4 mt-11">
              <Link to="/arcani" className="btn-gold" data-testid="hero-arcani-btn">{t.home.ctaCofanetto} <ArrowRight size={16} /></Link>
              <Link to="/opere" className="btn-gold" data-testid="hero-opere-btn" style={{ borderColor: "rgba(236,231,225,0.3)", color: "#ece7e1" }}>{t.home.ctaOpere}</Link>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-ui text-[0.6rem] tracking-[0.3em] text-[#8a837b] uppercase">{t.home.scroll}</span>
          <span className="w-px h-10 bg-gradient-to-b from-[var(--gold)] to-transparent" />
        </motion.div>
      </section>

      {/* BIOGRAFIA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32" data-testid="biografia-section">
        <div className="grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="font-ui text-[0.72rem] tracking-[0.4em] uppercase text-gold">{t.home.bioEyebrow}</span>
              <h2 className="font-display text-4xl md:text-5xl text-[#f3eee7] mt-5 leading-tight">{t.home.bioTitle}</h2>
              <div className="mt-8 relative overflow-hidden border" style={{ borderColor: "var(--line)" }}>
                <img src="/media/arcani/portrait.webp" alt="Cortona Francesca ritratto" className="w-full object-cover animate-float" style={{ maxHeight: 520 }} />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pt-10">
            <Reveal delay={0.15}>
              <p className="font-serif-el text-xl md:text-[1.45rem] leading-relaxed text-[#d8d2ca]">{t.home.bioP1}</p>
              <div className="my-10 pl-6 border-l-2" style={{ borderColor: "var(--gold)" }}>
                <p className="font-serif-el italic text-2xl text-[#c7c0b7] leading-snug">{t.home.bioQuote}</p>
                <p className="font-ui text-sm text-[#8a837b] mt-3 tracking-wide2">{t.home.bioQuoteAuthor}</p>
              </div>
              <p className="font-serif-el text-xl md:text-[1.35rem] leading-relaxed text-[#d8d2ca]">{t.home.bioP2}</p>
              <Link to="/7-chakra" data-testid="home-chakra-link" className="inline-flex items-center gap-2 mt-8 font-ui text-sm tracking-wide2 uppercase text-gold-bright link-underline">
                <Sparkles size={15} /> {t.home.chakraLink}
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED ARCANI */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24" data-testid="home-featured">
        <Reveal className="text-center mb-14">
          <div className="divider-ornament mb-6"><Sparkles size={16} className="text-gold" /></div>
          <h2 className="font-display text-3xl md:text-4xl text-[#f3eee7]">{t.home.featTitle}</h2>
          <p className="font-serif-el text-lg text-[#a29b93] mt-3">{t.home.featSub}</p>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {featured.map((a, i) => (
            <Reveal key={a.n} delay={i * 0.1}>
              <Link to="/arcani" className="card-hover group relative block overflow-hidden border vignette" style={{ borderColor: "var(--line)" }}>
                <img src={a.src} alt={a.name} className="w-full h-[420px] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <span className="font-display text-gold text-xs tracking-[0.3em]">{String(a.n).padStart(2, "0")}</span>
                  <h3 className="font-display text-2xl text-[#f3eee7] mt-1 tracking-wide2">{a.name}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center mt-12">
          <Link to="/arcani" className="btn-gold" data-testid="featured-arcani-btn">{t.home.featCta} <ArrowRight size={16} /></Link>
        </Reveal>
      </section>
    </div>
  );
}
