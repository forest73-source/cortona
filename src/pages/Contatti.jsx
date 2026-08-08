import React, { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, MessageCircle, Send, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";
import { useLang } from "@/i18n/LanguageContext";

export default function Contatti() {
  const { t } = useLang();
  const C = t.contatti;
  const [form, setForm] = useState({ nome: "", email: "", messaggio: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${form.nome || "Contatto"}`);
    const body = encodeURIComponent(`${form.nome}\n${form.email}\n\n${form.messaggio}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  const socials = [
    { href: SITE.facebook, icon: Facebook, label: "Facebook", sub: C.fbSub, testid: "contact-facebook" },
    { href: SITE.instagram, icon: Instagram, label: "Instagram", sub: "@francescacortona", testid: "contact-instagram" },
    { href: `https://wa.me/${SITE.whatsapp}`, icon: MessageCircle, label: "WhatsApp", sub: SITE.whatsappDisplay, testid: "contact-whatsapp" },
    { href: `mailto:${SITE.email}`, icon: Mail, label: "Email", sub: SITE.email, testid: "contact-email" },
  ];

  return (
    <div data-testid="contatti-page">
      <section className="relative pt-40 pb-14 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <h1 className="font-display text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem] leading-none text-[#f3eee7] tracking-[0.06em]">{C.title}</h1>
          <div className="divider-ornament my-6"><Sparkles size={16} className="text-gold" /></div>
          <p className="font-serif-el text-xl text-[#a29b93] max-w-xl mx-auto px-6">{C.sub}</p>
        </motion.div>
      </section>

      <section className="max-w-2xl mx-auto px-6 lg:px-10 pb-10">
        <Reveal>
          <h2 className="font-display text-2xl text-gold-bright tracking-wide2 mb-7 text-center">{C.sendMsg}</h2>
          <form onSubmit={onSubmit} className="space-y-5" data-testid="contact-form">
            <div>
              <label className="font-ui text-[0.7rem] tracking-[0.25em] uppercase text-[#8a837b]">{C.fNome}</label>
              <input type="text" required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} data-testid="form-nome"
                className="w-full mt-2 px-4 py-3 bg-transparent border font-serif-el text-lg text-[#ece7e1] outline-none focus:border-[var(--gold)] transition-colors" style={{ borderColor: "var(--line)" }} />
            </div>
            <div>
              <label className="font-ui text-[0.7rem] tracking-[0.25em] uppercase text-[#8a837b]">{C.fEmail}</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} data-testid="form-email"
                className="w-full mt-2 px-4 py-3 bg-transparent border font-serif-el text-lg text-[#ece7e1] outline-none focus:border-[var(--gold)] transition-colors" style={{ borderColor: "var(--line)" }} />
            </div>
            <div>
              <label className="font-ui text-[0.7rem] tracking-[0.25em] uppercase text-[#8a837b]">{C.fMsg}</label>
              <textarea rows={5} required value={form.messaggio} onChange={(e) => setForm({ ...form, messaggio: e.target.value })} data-testid="form-messaggio"
                className="w-full mt-2 px-4 py-3 bg-transparent border font-serif-el text-lg text-[#ece7e1] outline-none focus:border-[var(--gold)] transition-colors resize-none" style={{ borderColor: "var(--line)" }} />
            </div>
            <button type="submit" className="btn-gold w-full justify-center" data-testid="form-submit"><Send size={16} /> {C.fSubmit}</button>
          </form>
        </Reveal>
      </section>

      {/* SOCIAL — compatto e in basso */}
      <section className="max-w-2xl mx-auto px-6 lg:px-10 pb-16" data-testid="contact-socials">
        <Reveal className="text-center">
          <div className="divider-ornament mb-6"><Sparkles size={14} className="text-gold" /></div>
          <h3 className="font-ui text-[0.7rem] tracking-[0.35em] uppercase text-gold mb-5">{C.follow}</h3>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" data-testid={s.testid} aria-label={s.label}
                className="flex items-center justify-center w-11 h-11 border text-[#cfc9c1] hover:text-[#0b0a0f] hover:bg-[var(--gold)] hover:border-[var(--gold)] transition-all duration-400" style={{ borderColor: "var(--line)" }}>
                <s.icon size={18} />
              </a>
            ))}
          </div>
          <p className="font-ui text-sm text-[#8a837b] mt-5">{SITE.email} · {SITE.whatsappDisplay}</p>
        </Reveal>
      </section>
    </div>
  );
}
