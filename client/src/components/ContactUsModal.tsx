import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function ContactUsModal({ open, onClose }: Props) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  const canSubmit = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      isValidEmail(form.email) &&
      form.phone.trim().length >= 8 &&
      form.message.trim().length >= 10
    );
  }, [form]);

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFeedback(null);
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || loading) return;

    setLoading(true);
    setFeedback(null);

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await resp.json().catch(() => ({}));

      if (!resp.ok) {
        throw new Error(data?.message || "Não foi possível enviar sua mensagem.");
      }

      setFeedback({ type: "ok", text: "Recebemos suas informações! Enviamos um e-mail de confirmação. ✅" });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      setFeedback({ type: "err", text: err?.message || "Erro ao enviar. Tente novamente." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[1000] bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[1001] flex items-center justify-center p-4"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="
                w-full max-w-xl
                rounded-2xl
                border border-white/10
                bg-[#0b0b0b]
                shadow-[0_18px_60px_rgba(0,0,0,0.65)]
                overflow-hidden
              "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div>
                  <div className="[font-family:var(--font-title)] uppercase tracking-[0.14em] text-white">
                    Entre em contato conosco
                  </div>
                  <div className="[font-family:var(--font-body)] text-white/60 text-sm mt-1">
                    Preencha os dados abaixo e enviaremos uma confirmação por e-mail.
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 transition flex items-center justify-center"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5 text-white/80" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] text-white/60 mb-2">
                      Nome
                    </label>
                    <input
                      value={form.name}
                      onChange={update("name")}
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-[var(--ideal-orange)]"
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] text-white/60 mb-2">
                      Telefone
                    </label>
                    <input
                      value={form.phone}
                      onChange={update("phone")}
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-[var(--ideal-orange)]"
                      placeholder="(xx) xxxxx-xxxx"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] text-white/60 mb-2">
                    Email
                  </label>
                  <input
                    value={form.email}
                    onChange={update("email")}
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-[var(--ideal-orange)]"
                    placeholder="seuemail@exemplo.com"
                    required
                    type="email"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] text-white/60 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    value={form.message}
                    onChange={update("message")}
                    className="w-full min-h-[130px] rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white outline-none focus:border-[var(--ideal-orange)] resize-none"
                    placeholder="Descreva aqui o que você precisa..."
                    required
                  />
                </div>

                {feedback && (
                  <div
                    className={[
                      "rounded-xl px-4 py-3 border text-sm",
                      feedback.type === "ok"
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-200"
                        : "bg-red-500/10 border-red-500/20 text-red-200",
                    ].join(" ")}
                  >
                    {feedback.text}
                  </div>
                )}

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition text-white/85"
                  >
                    Cancelar
                  </button>

                  <button
                    type="submit"
                    disabled={!canSubmit || loading}
                    className="
                      px-5 py-3 rounded-xl
                      bg-[var(--ideal-orange)]
                      hover:brightness-110
                      transition
                      text-white
                      disabled:opacity-60 disabled:cursor-not-allowed
                      flex items-center gap-2
                    "
                  >
                    <Send className="w-4 h-4" />
                    {loading ? "Enviando..." : "Enviar"}
                  </button>
                </div>

                <div className="[font-family:var(--font-body)] text-white/45 text-xs pt-2">
                  Ao enviar, você concorda em compartilhar seus dados para retorno do contato.
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
