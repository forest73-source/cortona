import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import content from "@/data/content.json";
import { useLang } from "@/i18n/LanguageContext";

export default function ArcaniMaggiori() {
  const { t } = useLang();
  const A = t.arcani;

  const arcaniImages = content.arcani.map((a) => ({ src: a.src, caption: `${String(a.n).padStart(2, "0")} · ${a.name}` }));

  return (
    <div data-testid="arcani-maggiori-page">
      {/* HERO TITLE */}
      <section className="relative pt-40 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Sparkles size={520} className="text-gold" style={{ opacity: 0.03 }} />
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }} className="relative">
          <h1 className="font-display text-[2.8rem] sm:text-[4.4rem] lg:text-[6rem] leading-none text-[#f3eee7] tracking-[0.06em]">{t.nav.arcaniMaggiori}</h1>
          <div className="divider-ornament my-6"><Sparkles size={16} className="text-gold" /></div>
          <p className="font-serif-el text-lg md:text-xl text-[#a29b93] mt-4 max-w-2xl mx-auto px-6">{A.galSub}</p>
        </motion.div>
      </section>

      {/* 22 OPERE — galleria con didascalia al passaggio del mouse */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-4 pb-16" data-testid="arcani-maggiori-gallery-section">
        <Gallery images={arcaniImages} testid="arcani-maggiori-gallery" />
      </section>
    </div>
  );
}
