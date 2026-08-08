import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import Reveal from "@/components/Reveal";
import { chakras, pick } from "@/data/extra";
import { useLang } from "@/i18n/LanguageContext";

export default function SetteChakra() {
  const { t, lang } = useLang();
  const C = t.chakra;

  return (
    <div data-testid="chakra-page">
      <section className="relative pt-40 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[520px] h-[520px] rounded-full blur-3xl opacity-20" style={{ background: "conic-gradient(#c0392b,#e67e22,#f1c40f,#27ae60,#2980b9,#5b3f8e,#8e44ad,#c0392b)" }} />
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }} className="relative">
          <h1 className="font-display text-[3rem] sm:text-[5rem] lg:text-[6.5rem] leading-none text-[#f3eee7] tracking-[0.06em]">7 CHAKRA</h1>
          <div className="divider-ornament my-6"><Sparkles size={16} className="text-gold" /></div>
          <p className="font-display text-gold-bright text-base sm:text-xl tracking-[0.42em] uppercase">{C.sub}</p>
        </motion.div>
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-10 pb-16 text-center" data-testid="chakra-intro">
        <Reveal>
          <p className="font-serif-el text-2xl md:text-[1.6rem] leading-relaxed text-[#d8d2ca]">{C.intro1}</p>
          <p className="font-serif-el text-xl leading-relaxed text-[#a29b93] mt-6">{C.intro2}</p>
        </Reveal>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-16" data-testid="chakra-list">
        <div className="space-y-5">
          {chakras.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.06}>
              <div data-testid={`chakra-${c.n}`} className="group flex items-center gap-6 md:gap-9 p-5 md:p-7 border transition-all duration-500 hover:translate-x-2" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                <div className="relative shrink-0">
                  <span className="block w-16 h-16 md:w-20 md:h-20 rounded-full transition-transform duration-500 group-hover:scale-110" style={{ background: `radial-gradient(circle at 35% 30%, ${c.g1}, ${c.g2})`, boxShadow: `0 0 34px ${c.colore}66` }} />
                  <span className="absolute inset-0 flex items-center justify-center font-display text-white/90 text-lg">{c.n}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="font-display text-xl md:text-2xl text-[#f3eee7] tracking-wide2">{c.sanscrito}</h3>
                    <span className="font-ui text-[0.68rem] tracking-[0.3em] uppercase" style={{ color: c.g1 }}>{pick(c.nome, lang)}</span>
                  </div>
                  <p className="font-serif-el text-lg text-[#a29b93] mt-1 leading-snug">{pick(c.significato, lang)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-10 pb-10 text-center" data-testid="chakra-humanitarian">
        <Reveal>
          <div className="p-9 border" style={{ borderColor: "var(--gold)", background: "linear-gradient(160deg, #1e1a29, #14111c)" }}>
            <Heart className="text-gold mx-auto" size={30} />
            <p className="font-serif-el italic text-2xl text-[#d8d2ca] mt-4 leading-snug">{C.quote}</p>
            <p className="font-ui text-sm text-gold-bright tracking-wide2 mt-4">{C.quoteAuthor}</p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
