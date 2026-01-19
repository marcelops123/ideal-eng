import { animate, motion, useInView, useMotionValue } from "framer-motion";
import { ArrowRight, MapPin, Users, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Componente de contador animado
function CountUp({
  to,
  duration = 2,
  prefix = "",
}: {
  to: number;
  duration?: number;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const unsub = mv.on("change", (latest) => setValue(Math.round(latest)));
    return () => unsub();
  }, [mv]);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, mv, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Background gradiente radial sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(255, 107, 53, 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Grid pattern sutil */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--text-muted) 1px, transparent 1px),
                           linear-gradient(90deg, var(--text-muted) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-24 lg:py-0">
          {/* Coluna Esquerda - Texto */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-accent)] bg-[var(--accent-glow)] mb-6"
            >
              <Award className="w-4 h-4 text-[var(--accent-primary)]" />
              <span className="text-sm font-medium text-[var(--accent-primary)]">
                Referência Nacional em SST
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-[1.1] tracking-tight mb-6"
            >
              De Minas para o Brasil,{" "}
              <span className="text-[var(--accent-primary)]">
                uma história que inspira confiança.
              </span>
            </motion.h1>

            {/* Parágrafo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl"
            >
              Assessoria especializada em Engenharia, Segurança do Trabalho,
              Saúde Ocupacional e Meio Ambiente. Soluções técnicas com
              excelência para sua empresa.
            </motion.p>

            {/* Botões */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href="https://wa.me/5538999029541?text=Olá! Gostaria de mais informações."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-glow)] hover:-translate-y-0.5"
              >
                Fale Conosco
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] rounded-xl transition-all duration-300 hover:bg-[var(--accent-glow)]"
              >
                Nossos Serviços
              </a>
            </motion.div>

            {/* Mini Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-[var(--border-subtle)]"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-glow)] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[var(--accent-primary)]" />
                </div>
                <div>
                  <span className="block text-xl font-bold text-[var(--text-primary)]">
                    <CountUp to={11} duration={2} />
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">
                    Estados
                  </span>
                </div>
              </div>

              <div className="w-px h-10 bg-[var(--border-subtle)]" />

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-glow)] flex items-center justify-center">
                  <Users className="w-5 h-5 text-[var(--accent-primary)]" />
                </div>
                <div>
                  <span className="block text-xl font-bold text-[var(--text-primary)]">
                    <CountUp to={200} duration={2.5} prefix="+" />
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">
                    Clientes
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna Direita - Foto dos Sócios */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              {/* Glow de fundo */}
              <div
                className="absolute -inset-8 rounded-full opacity-30 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)",
                }}
              />

              {/* Imagem dos sócios */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <img
                  src="/images/socios_fundo_transparente.png"
                  alt="Pedro Henrique e Guilherme Caldas - Sócios Diretores"
                  className="w-full h-auto max-h-[700px] object-contain drop-shadow-2xl scale-110 lg:scale-125"
                />

                {/* Badge flutuante */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-[var(--bg-secondary)]/90 backdrop-blur-sm border border-[var(--border-subtle)] rounded-xl shadow-xl"
                >
                  <span className="text-sm font-medium text-[var(--text-secondary)]">
                    Pedro Henrique & Guilherme Caldas
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#quem-somos"
          className="flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
        >
        </a>
      </motion.div>
    </section>
  );
}
