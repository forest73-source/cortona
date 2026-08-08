import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import content from "@/data/content.json";
import { useLang } from "@/i18n/LanguageContext";
import { pick } from "@/data/extra";

const navBase = "font-ui tracking-wide2 text-[0.74rem] uppercase transition-colors duration-300";

export default function Navbar() {
  const { t, lang, setLang, langs } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [openOpere, setOpenOpere] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [mobile, setMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobile(false); setOpenOpere(false); setOpenLang(false); }, [location.pathname]);

  const linkClass = ({ isActive }) =>
    `${navBase} ${isActive ? "text-gold-bright" : "text-[#cfc9c1] hover:text-gold-bright"}`;

  return (
    <header
      data-testid="navbar"
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(11,10,15,0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-10 h-[74px] flex items-center justify-between">
        <Link to="/" data-testid="logo-link" className="group flex flex-col leading-none shrink-0">
          <span className="font-display text-gold-bright text-[1rem] md:text-[1.2rem] tracking-[0.22em]">CORTONA</span>
          <span className="font-ui text-[#b6afa6] text-[0.58rem] md:text-[0.66rem] tracking-[0.5em] mt-1 pl-1">FRANCESCA</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          <NavLink to="/" className={linkClass} data-testid="nav-home">{t.nav.home}</NavLink>
          <NavLink to="/arcani" className={linkClass} data-testid="nav-arcani">{t.nav.arcani}</NavLink>

          <div className="relative" onMouseEnter={() => setOpenOpere(true)} onMouseLeave={() => setOpenOpere(false)}>
            <NavLink to="/opere" data-testid="nav-opere"
              className={({ isActive }) =>
                `${navBase} flex items-center gap-1.5 ${isActive || location.pathname.startsWith("/opere") ? "text-gold-bright" : "text-[#cfc9c1] hover:text-gold-bright"}`}>
              {t.nav.opere} <ChevronDown size={13} className={`transition-transform duration-300 ${openOpere ? "rotate-180" : ""}`} />
            </NavLink>
            <AnimatePresence>
              {openOpere && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.25 }}
                  data-testid="opere-dropdown" className="absolute right-0 top-full pt-4 w-[290px]">
                  <div className="border overflow-hidden" style={{ background: "rgba(18,16,26,0.97)", borderColor: "var(--line)", backdropFilter: "blur(14px)" }}>
                    {content.opere.map((o, i) => (
                      <Link key={o.slug} to={`/opere/${o.slug}`} data-testid={`dropdown-${o.slug}`}
                        className="group flex items-center justify-between px-5 py-3.5 border-b transition-colors duration-300 hover:bg-[#1e1a29]"
                        style={{ borderColor: "rgba(201,162,75,0.08)" }}>
                        <div className="flex flex-col">
                          <span className="font-serif-el text-[1.12rem] text-[#ece7e1] group-hover:text-gold-bright transition-colors">{o.title}</span>
                          <span className="font-ui text-[0.62rem] tracking-[0.2em] uppercase text-[#8a837b]">{pick(o.subtitle, lang)}</span>
                        </div>
                        <span className="font-display text-gold text-xs opacity-40 group-hover:opacity-100 transition-opacity">{String(i + 1).padStart(2, "0")}</span>
                      </Link>
                    ))}
                    <Link to="/arcani-maggiori" data-testid="dropdown-arcani-maggiori" className="group flex items-center justify-between px-5 py-3.5 transition-colors duration-300 hover:bg-[#1e1a29]">
                      <div className="flex flex-col">
                        <span className="font-serif-el text-[1.12rem] text-[#ece7e1] group-hover:text-gold-bright transition-colors">{t.nav.arcaniMaggiori}</span>
                        <span className="font-ui text-[0.62rem] tracking-[0.2em] uppercase text-[#8a837b]">{t.arcani.galTitle}</span>
                      </div>
                      <span className="font-display text-gold text-xs opacity-40 group-hover:opacity-100 transition-opacity">07</span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/mostre" className={linkClass} data-testid="nav-mostre">{t.nav.mostre}</NavLink>
          <NavLink to="/7-chakra" className={linkClass} data-testid="nav-chakra">{t.nav.chakra}</NavLink>
          <NavLink to="/contatti" className={linkClass} data-testid="nav-contatti">{t.nav.contatti}</NavLink>

          {/* Language switcher */}
          <div className="relative" onMouseEnter={() => setOpenLang(true)} onMouseLeave={() => setOpenLang(false)}>
            <button data-testid="lang-switcher"
              className={`${navBase} flex items-center gap-1.5 text-gold-bright border px-2.5 py-1.5`} style={{ borderColor: "var(--line)" }}>
              <Globe size={13} /> {langs.find((l) => l.code === lang)?.label}
              <ChevronDown size={12} className={`transition-transform duration-300 ${openLang ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {openLang && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }}
                  data-testid="lang-dropdown" className="absolute right-0 top-full pt-3 w-[130px]">
                  <div className="border overflow-hidden" style={{ background: "rgba(18,16,26,0.98)", borderColor: "var(--line)", backdropFilter: "blur(14px)" }}>
                    {langs.map((l) => (
                      <button key={l.code} onClick={() => setLang(l.code)} data-testid={`lang-${l.code}`}
                        className={`w-full text-left px-4 py-2.5 font-ui text-[0.78rem] tracking-wide2 border-b transition-colors hover:bg-[#1e1a29] ${lang === l.code ? "text-gold-bright" : "text-[#cfc9c1]"}`}
                        style={{ borderColor: "rgba(201,162,75,0.08)" }}>
                        {l.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button className="lg:hidden text-gold-bright" onClick={() => setMobile((m) => !m)} data-testid="mobile-menu-toggle" aria-label="Menu">
          {mobile ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobile && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden" style={{ background: "rgba(11,10,15,0.98)", borderTop: "1px solid var(--line)" }} data-testid="mobile-menu">
            <div className="px-6 py-6 flex flex-col gap-1">
              <NavLink to="/" className="font-serif-el text-2xl py-2 text-[#ece7e1]">{t.nav.home}</NavLink>
              <NavLink to="/arcani" className="font-serif-el text-2xl py-2 text-[#ece7e1]">{t.nav.arcani}</NavLink>
              <div className="py-2">
                <span className="font-display text-gold text-[0.7rem] tracking-[0.3em] uppercase">{t.nav.opere}</span>
                <div className="pl-3 mt-2 flex flex-col gap-1 border-l" style={{ borderColor: "var(--line)" }}>
                  {content.opere.map((o) => (
                    <Link key={o.slug} to={`/opere/${o.slug}`} className="font-serif-el text-xl py-1.5 text-[#cfc9c1]">
                      {o.title} <span className="text-sm text-[#8a837b]">— {pick(o.subtitle, lang)}</span>
                    </Link>
                  ))}
                  <Link to="/arcani-maggiori" className="font-serif-el text-xl py-1.5 text-[#cfc9c1]">{t.nav.arcaniMaggiori} <span className="text-sm text-[#8a837b]">— {t.arcani.galTitle}</span></Link>
                </div>
              </div>
              <NavLink to="/mostre" className="font-serif-el text-2xl py-2 text-[#ece7e1]">{t.nav.mostreFull}</NavLink>
              <NavLink to="/7-chakra" className="font-serif-el text-2xl py-2 text-[#ece7e1]">{t.nav.chakra}</NavLink>
              <NavLink to="/contatti" className="font-serif-el text-2xl py-2 text-[#ece7e1]">{t.nav.contatti}</NavLink>

              <div className="flex items-center gap-2 mt-4 pt-4 border-t" style={{ borderColor: "var(--line)" }}>
                <Globe size={16} className="text-gold" />
                {langs.map((l) => (
                  <button key={l.code} onClick={() => setLang(l.code)} data-testid={`lang-m-${l.code}`}
                    className={`font-ui text-sm tracking-wide2 px-3 py-1.5 border ${lang === l.code ? "text-[#0b0a0f] bg-[var(--gold)] border-[var(--gold)]" : "text-[#cfc9c1]"}`}
                    style={lang === l.code ? {} : { borderColor: "var(--line)" }}>
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
