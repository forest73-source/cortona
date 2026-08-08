import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Quote, MapPin, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { mostre, premi, pubblicazioni, critiche, pick } from "@/data/extra";
import { useLang } from "@/i18n/LanguageContext";

export default function Mostre() {
  const { t, lang } = useLang();
  const M = t.mostre;

  return (
    <div data-testid="mostre-page">
      <section className="relative pt-40 pb-14 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}>
          <h1 className="font-display text-[2.6rem] sm:text-[4.2rem] lg:text-[5.2rem] leading-none text-[#f3eee7] tracking-[0.05em]">
            {M.title1}<span className="text-gold-bright">&</span> {M.title2}
          </h1>
          <div className="divider-ornament my-6"><Sparkles size={16} className="text-gold" /></div>
          <p className="font-display text-gold-bright text-base sm:text-xl tracking-[0.42em] uppercase">{t.common.ofArtist}</p>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-20" data-testid="critica-section">
        <div className="grid md:grid-cols-3 gap-6">
          {critiche.map((c, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="h-full p-7 border relative" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                <Quote size={28} className="text-gold opacity-50" />
                <blockquote className="font-serif-el italic text-xl text-[#d8d2ca] leading-snug mt-4">«{pick(c.testo, lang)}»</blockquote>
                <figcaption className="font-ui text-[0.68rem] tracking-[0.25em] uppercase text-gold-bright mt-5">
                  — {c.link ? (<a href={c.link} target="_blank" rel="noopener noreferrer" data-testid="critica-sgarbi-link" className="link-underline hover:text-[#f3eee7] transition-colors">{pick(c.autore, lang)}</a>) : pick(c.autore, lang)}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 lg:px-10 pb-20" data-testid="articolo-section">
        <Reveal>
          <div className="p-8 md:p-10 border" style={{ borderColor: "var(--gold)", background: "var(--surface)" }}>
            <span className="font-ui text-[0.68rem] tracking-[0.3em] uppercase text-gold">Art Now · 2023</span>
            <a href="https://www.art-now.it/2023/05/12/francesca-cortona-citazioni-visive/" target="_blank" rel="noopener noreferrer" data-testid="articolo-artnow-link" className="inline-block">
              <h2 className="font-display text-2xl md:text-3xl text-gold-bright mt-3 tracking-wide2 hover:text-[#f3eee7] transition-colors link-underline">Citazioni Visive</h2>
            </a>
            <div className="mt-5 space-y-4 font-serif-el text-lg md:text-xl leading-relaxed text-[#d8d2ca]">
              <p>Sono vari gli interlocutori con i quali Francesca Cortona instaura un ideale afflato. Artisti della fotografia contemporanea e grandi maestri del passato la sollecitano in un percorso interpretativo che trova il suo focus principale nell'elemento figurale. In queste riedizioni la forza espressiva delle figure rapisce lo sguardo di chi osserva, trasmettendo quel senso di inquietudine tipico di chi si riconosce nella trasposizione di un'emozione.</p>
              <p>Cortona lavora con il bianco e il nero raggiungendo un risultato elegante ed equilibrato: un uso sapiente del chiaroscuro e delle sfumature tratteggia profili realistici, valorizzati da bagliori di luce bianca che sottolineano i tratti del volto con intensità. I sottili giochi di luce veicolano un'emotività coinvolgente, invitando a scrutare questi volti per coglierne l'intimo messaggio, riscoprendo nella loro unicità l'inestimabile valore artistico.</p>
            </div>
            <p className="font-ui text-sm text-[#8a837b] mt-6 italic">— Art Now Media</p>
          </div>
        </Reveal>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-20" data-testid="premi-section">
        <Reveal className="flex items-center gap-4 mb-9"><Award className="text-gold" size={26} /><h2 className="font-display text-3xl text-[#f3eee7]">{M.premi}</h2><span className="flex-1 hairline" /></Reveal>
        <div className="grid sm:grid-cols-3 gap-5">
          {premi.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="h-full p-7 border text-center" style={{ borderColor: "var(--gold)", background: "linear-gradient(160deg, #1e1a29, #14111c)" }}>
                <span className="font-ui text-[0.68rem] tracking-[0.3em] uppercase text-gold">{p.data}</span>
                <h3 className="font-display text-xl text-gold-bright mt-3 leading-snug tracking-wide2">{pick(p.titolo, lang)}</h3>
                <p className="font-serif-el text-lg text-[#a29b93] mt-2">{p.luogo}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-10 pb-20" data-testid="mostre-section">
        <Reveal className="flex items-center gap-4 mb-9"><MapPin className="text-gold" size={24} /><h2 className="font-display text-3xl text-[#f3eee7]">{M.percorso}</h2><span className="flex-1 hairline" /></Reveal>
        <div className="relative pl-8 border-l" style={{ borderColor: "var(--line)" }}>
          {mostre.map((m, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="relative pb-9 group">
                <span className="absolute -left-[38px] top-1.5 w-3 h-3 rounded-full border-2 transition-colors group-hover:bg-[var(--gold)]" style={{ borderColor: "var(--gold)", background: "var(--bg)" }} />
                <span className="font-ui text-[0.68rem] tracking-[0.3em] uppercase text-gold">{m.data}</span>
                <h3 className="font-display text-xl md:text-2xl text-[#f3eee7] mt-1 tracking-wide2">{m.titolo}</h3>
                <p className="font-serif-el text-lg text-[#c7c0b7] mt-1">{m.luogo}</p>
                <p className="font-ui text-sm text-[#8a837b] mt-0.5">{t.common.curatedBy} {m.cura}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-10 pb-10" data-testid="pubblicazioni-section">
        <Reveal className="flex items-center gap-4 mb-9"><BookOpen className="text-gold" size={24} /><h2 className="font-display text-3xl text-[#f3eee7]">{M.pubbl}</h2><span className="flex-1 hairline" /></Reveal>
        <div className="grid sm:grid-cols-2 gap-5">
          {pubblicazioni.map((p, i) => (
            <Reveal key={i} delay={(i % 2) * 0.08}>
              <div className="h-full p-6 border flex gap-4" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
                <span className="font-display text-gold text-sm shrink-0 pt-1">{p.anno}</span>
                <div><h3 className="font-display text-lg text-gold-bright tracking-wide2">{p.titolo}</h3><p className="font-serif-el text-lg text-[#a29b93] mt-1 leading-snug">{pick(p.nota, lang)}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
