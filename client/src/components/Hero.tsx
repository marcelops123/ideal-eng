import { animate, motion, useInView, useMotionValue, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Users, Award, ShieldCheck } from "lucide-react";
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

// Dados dos slides
const heroSlides = [
  {
    id: 1,
    badge: { icon: Award, text: "Referência Nacional em SST" },
    title: "De Minas para o Brasil,",
    highlight: "uma história que inspira confiança.",
    description: "Assessoria especializada em Engenharia, Segurança do Trabalho, Saúde Ocupacional e Meio Ambiente. Soluções técnicas com excelência para sua empresa.",
    image: "/images/socios_fundo_transparente.png",
    imageAlt: "Pedro Henrique e Guilherme Caldas - Sócios Diretores",
    imageCaption: "Pedro Henrique & Guilherme Caldas",
    showStats: true,
  },
  {
    id: 2,
    badge: { icon: ShieldCheck, text: "Terceirização Especializada" },
    title: "Contrate um",
    highlight: "técnico especialista para sua empresa.",
    description: "Eficiência e confiança com quem entende de terceirização. A Ideal cuida de tudo para você.",
    image: "/images/hero2.png",
    imageAlt: "Técnico especialista em segurança do trabalho",
    imageCaption: null,
    showStats: false,
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];
  const BadgeIcon = slide.badge.icon;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

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

      {/* Botões de navegação laterais - apenas desktop */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-8 top-[50vh] -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-glow)] items-center justify-center transition-colors duration-300 group"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-8 top-[50vh] -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-glow)] items-center justify-center transition-colors duration-300 group"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors" />
      </button>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 min-h-screen flex items-center py-20 sm:py-24">
        <div className="w-full grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center">
          {/* Coluna Esquerda - Texto */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-1.5 lg:gap-2 px-2.5 py-1 lg:px-4 lg:py-2 rounded-full border border-[var(--border-accent)] bg-[var(--accent-glow)] mb-3 lg:mb-6"
              >
                <BadgeIcon className="w-3 h-3 lg:w-4 lg:h-4 text-[var(--accent-primary)]" />
                <span className="text-xs lg:text-sm font-medium text-[var(--accent-primary)]">
                  {slide.badge.text}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl sm:text-3xl lg:text-6xl xl:text-7xl font-bold text-[var(--text-primary)] leading-[1.1] tracking-tight mb-4 lg:mb-6"
              >
                {slide.title}{" "}
                <span className="text-[var(--accent-primary)]">
                  {slide.highlight}
                </span>
              </motion.h1>

              {/* Parágrafo */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm sm:text-base lg:text-xl text-[var(--text-secondary)] leading-relaxed mb-4 lg:mb-8 max-w-xl"
              >
                {slide.description}
              </motion.p>

              {/* Botões */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-4 lg:mb-10"
              >
                <a
                  href="https://wa.me/5538999029541?text=Olá! Gostaria de mais informações."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 lg:px-8 lg:py-4 text-xs sm:text-sm lg:text-base font-semibold text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-glow)] hover:-translate-y-0.5"
                >
                  Fale Conosco
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 lg:px-8 lg:py-4 text-xs sm:text-sm lg:text-base font-semibold text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] rounded-xl transition-all duration-300 hover:bg-[var(--accent-glow)]"
                >
                  Nossos Serviços
                </a>
              </motion.div>

              {/* Mini Stats - só no slide 1, escondido no mobile */}
              {slide.showStats && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="hidden sm:flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 border-t border-[var(--border-subtle)]"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-glow)] flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[var(--accent-primary)]" />
                    </div>
                    <div>
                      <span className="block text-xl font-bold text-[var(--text-primary)]">
                        <CountUp to={12} duration={2} />
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
              )}
            </motion.div>
          </AnimatePresence>

          {/* Coluna Direita - Imagem */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
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

                {/* Imagem */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    className={`w-full h-auto object-contain drop-shadow-2xl ${
                      slide.id === 1 ? "max-h-[32vh] sm:max-h-[40vh] lg:max-h-[80vh]" : "max-h-[28vh] sm:max-h-[35vh] lg:max-h-[70vh] rounded-2xl"
                    }`}
                  />

                  {/* Badge flutuante - só no slide 1 */}
                  {slide.imageCaption && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl shadow-xl"
                    >
                      <span className="text-sm font-medium text-[var(--text-secondary)]">
                        {slide.imageCaption}
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Indicadores de slide */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-8 sm:w-10 bg-[var(--accent-primary)]"
                : "w-2 sm:w-3 bg-[var(--text-muted)]/50 hover:bg-[var(--text-muted)]"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
