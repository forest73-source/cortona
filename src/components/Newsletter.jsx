import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, Loader2 } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const TX = {
  it: { title: "Resta in Contatto", sub: "Iscriviti alla newsletter per ricevere novità su mostre, nuove opere ed edizioni.", ph: "La tua email", btn: "Iscriviti", ok: "Grazie! Iscrizione avvenuta con successo.", already: "Sei già iscritto/a. Grazie!", err: "Inserisci un'email valida." },
  en: { title: "Stay in Touch", sub: "Subscribe to the newsletter for news on exhibitions, new works and editions.", ph: "Your email", btn: "Subscribe", ok: "Thank you! You are now subscribed.", already: "You are already subscribed. Thank you!", err: "Please enter a valid email." },
  es: { title: "Mantente en Contacto", sub: "Suscríbete al boletín para recibir novedades sobre exposiciones, nuevas obras y ediciones.", ph: "Tu correo", btn: "Suscribirse", ok: "¡Gracias! Suscripción realizada con éxito.", already: "Ya estás suscrito/a. ¡Gracias!", err: "Introduce un correo válido." },
  fr: { title: "Restons en Contact", sub: "Abonnez-vous à la newsletter pour des nouvelles sur les expositions, les nouvelles œuvres et les éditions.", ph: "Votre e-mail", btn: "S'abonner", ok: "Merci ! Votre inscription est confirmée.", already: "Vous êtes déjà abonné(e). Merci !", err: "Veuillez saisir un e-mail valide." },
  zh: { title: "保持联系", sub: "订阅通讯，获取展览、新作品与版本的最新消息。", ph: "您的邮箱", btn: "订阅", ok: "感谢！订阅成功。", already: "您已订阅，谢谢！", err: "请输入有效的邮箱。" },
};

const API = process.env.REACT_APP_BACKEND_URL;

export default function Newsletter() {
  const { lang } = useLang();
  const x = TX[lang] || TX.it;
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle"); // idle | loading | ok | already | error
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch(`${API}/api/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, lang }),
      });
      if (res.status === 400) { setState("error"); setMsg(x.err); return; }
      const data = await res.json();
      if (data.status === "already_subscribed") { setState("already"); setMsg(x.already); }
      else { setState("ok"); setMsg(x.ok); setEmail(""); }
    } catch {
      setState("error"); setMsg(x.err);
    }
  };

  const done = state === "ok" || state === "already";

  return (
    <section data-testid="newsletter" className="relative border-t" style={{ borderColor: "var(--line)", background: "var(--bg-soft)" }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-16 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center justify-center w-12 h-12 border text-gold-bright mb-5" style={{ borderColor: "var(--gold)" }}><Mail size={20} /></span>
          <h2 className="font-display text-3xl md:text-4xl text-[#f3eee7] tracking-wide2">{x.title}</h2>
          <p className="font-serif-el text-lg text-[#a29b93] mt-3 max-w-xl mx-auto">{x.sub}</p>

          {done ? (
            <div data-testid="newsletter-success" className="mt-8 inline-flex items-center gap-3 px-6 py-4 border font-serif-el text-lg text-gold-bright" style={{ borderColor: "var(--gold)", background: "var(--surface)" }}>
              <Check size={20} /> {msg}
            </div>
          ) : (
            <form onSubmit={submit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" data-testid="newsletter-form">
              <input
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder={x.ph} data-testid="newsletter-email"
                className="flex-1 px-5 py-3.5 bg-transparent border font-ui text-[#ece7e1] outline-none focus:border-[var(--gold)] transition-colors"
                style={{ borderColor: "var(--line)" }}
              />
              <button type="submit" disabled={state === "loading"} data-testid="newsletter-submit" className="btn-gold justify-center whitespace-nowrap">
                {state === "loading" ? <Loader2 size={16} className="animate-spin" /> : x.btn}
              </button>
            </form>
          )}
          {state === "error" && <p data-testid="newsletter-error" className="font-ui text-sm text-[#d98b8b] mt-3">{msg}</p>}
        </motion.div>
      </div>
    </section>
  );
}
