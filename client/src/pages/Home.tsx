"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BrazilMap from "@/components/BrazilMap";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  FileText,
  ClipboardCheck,
  Users,
  GraduationCap,
  FolderOpen,
  Ruler,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  Eye,
  Heart,
  Award,
  Headphones,
  Globe,
  CheckCircle,
  ArrowRight,
  Check,
} from "lucide-react";
import { animate, motion, useInView, useMotionValue } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const AnimatedPage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    className="min-h-screen bg-[var(--bg-primary)] text-white"
  >
    {children}
  </motion.div>
);

function CountUp({
  to,
  duration = 1.2,
  prefix = "",
  suffix = "",
  className = "",
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
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
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

const AnimatedSection: React.FC<
  React.HTMLAttributes<HTMLElement> & { id?: string }
> = ({ children, className = "", ...rest }) => (
  <motion.section
    {...rest}
    className={className}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.18 }}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.section>
);

// Componente de título de seção reutilizável
const SectionTitle: React.FC<{
  children: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
}> = ({ children, subtitle, centered = false }) => (
  <div className={centered ? "text-center" : ""}>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
      {children}
    </h2>
    {subtitle && (
      <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
    <div
      className={`mt-6 h-1 w-16 bg-[var(--accent-primary)] rounded-full ${
        centered ? "mx-auto" : ""
      }`}
    />
  </div>
);

export default function Home() {
  return (
    <AnimatedPage>
      <Navigation />
      <Hero />

      {/* SEÇÃO: QUEM SOMOS */}
      <AnimatedSection
        id="quem-somos"
        className="relative overflow-hidden py-24 md:py-32 bg-[var(--bg-primary)]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Coluna Esquerda - Texto */}
            <div>
              <SectionTitle>
                Quem <span className="text-[var(--accent-primary)]">Somos</span>
              </SectionTitle>

              <div className="mt-8 space-y-6">
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  A IDEAL é uma empresa que presta serviços de Assessoria em
                  Engenharia, Segurança do Trabalho, Saúde Ocupacional e Meio
                  Ambiente.
                </p>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  A qualidade do nosso serviço e a preocupação genuína com o
                  cliente são o diferencial de nossa marca. Oferecemos soluções
                  customizadas para minimizar passivos, atender requisitos
                  legais e promover saúde e segurança.
                </p>
              </div>
            </div>

            {/* Coluna Direita - Grid de Diferenciais */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Award,
                  title: "Qualidade Técnica",
                  desc: "Profissionais certificados e experientes",
                },
                {
                  icon: Headphones,
                  title: "Atendimento Personalizado",
                  desc: "Soluções sob medida para cada cliente",
                },
                {
                  icon: Globe,
                  title: "Cobertura Nacional",
                  desc: "Presença em 11 estados brasileiros",
                },
                {
                  icon: CheckCircle,
                  title: "Compliance Total",
                  desc: "Conformidade com todas as normas",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group p-6 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-subtle)] hover:border-[var(--border-accent)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-glow)] flex items-center justify-center mb-4 group-hover:bg-[var(--accent-primary)] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[var(--accent-primary)] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* SEÇÃO: MISSÃO / VISÃO / VALORES */}
      <AnimatedSection className="relative py-24 md:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Missão",
                content:
                  "Garantir segurança e qualidade nos ambientes de trabalho por meio de soluções técnicas em Engenharia, SST e Meio Ambiente.",
                accent: "border-l-4 border-l-[var(--accent-primary)]",
              },
              {
                icon: Eye,
                title: "Visão",
                content:
                  "Ser referência nacional em qualidade e inovação em SST, promovendo ambientes seguros, sustentáveis e humanizados.",
                accent: "bg-[var(--bg-tertiary)]",
              },
              {
                icon: Heart,
                title: "Valores",
                content:
                  "Comprometimento com a qualidade, ética, segurança e valorização das pessoas em tudo o que fazemos.",
                accent: "border-t-4 border-t-[var(--accent-primary)]",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`group p-8 bg-[var(--bg-tertiary)] rounded-2xl border border-[var(--border-subtle)] hover:border-[var(--border-accent)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--accent-glow)] ${item.accent}`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-[var(--accent-glow)] flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[var(--accent-primary)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {item.content}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* SEÇÃO: DIRETORIA */}
      <AnimatedSection
        id="contato-diretoria"
        className="relative py-24 md:py-32 overflow-hidden"
      >
        {/* Background com gradiente diagonal */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 30% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <SectionTitle centered>
            Nossa <span className="text-[var(--accent-primary)]">Diretoria</span>
          </SectionTitle>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Pedro Henrique",
                role: "Sócio Diretor",
                photo: "/images/bg-pedro.png",
                bio: "Com mais de quinze anos de experiência em Saúde, Segurança do Trabalho, Meio Ambiente e Qualidade. Técnico e Tecnólogo em Segurança do Trabalho, Bombeiro Profissional Civil e Auditor da ISO 45001. Passagens por Odebrecht Ambiental, BRK Ambiental, KWS Sementes, ADM do Brasil e LongPing.",
              },
              {
                name: "Guilherme Caldas",
                role: "Sócio Diretor",
                photo: "/images/bg-guilherme.png",
                bio: "Engenheiro Mecânico formado pela UFU e pós-graduado em Engenharia de Segurança do Trabalho. Mais de uma década de atuação em SSMA com passagens por Monsanto, Biosev, Nidera/Syngenta, CMOC e LongPing em funções de analista, especialista e coordenador corporativo.",
              },
            ].map((d, index) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-[var(--bg-tertiary)] rounded-3xl border border-[var(--border-subtle)] hover:border-[var(--border-accent)] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--accent-glow)]"
              >
                <div className="p-8">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    {/* Foto */}
                    <div className="relative shrink-0">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-[var(--border-subtle)] group-hover:border-[var(--accent-primary)] transition-colors">
                        <img
                          src={d.photo}
                          alt={d.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="text-center sm:text-left flex-1">
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">
                        {d.name}
                      </h3>
                      <p className="text-[var(--accent-primary)] font-medium mt-1">
                        {d.role}
                      </p>

                      {/* Linha decorativa */}
                      <div className="h-px w-16 bg-[var(--border-accent)] my-4 mx-auto sm:mx-0" />

                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                        {d.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* SEÇÃO: NÚMEROS / COBERTURA */}
      <AnimatedSection
        id="estados"
        className="relative py-16 md:py-24 bg-[var(--bg-primary)]"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Título centralizado */}
          <SectionTitle centered>
            Nossa <span className="text-[var(--accent-primary)]">Cobertura</span>
          </SectionTitle>

          {/* Layout horizontal: Stats à esquerda, Mapa à direita */}
          <div className="mt-12 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            {/* Coluna esquerda - Stats */}
            <div className="lg:w-1/3 space-y-6">
              <div className="flex gap-8">
                <div className="group">
                  <div className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tight">
                    <CountUp to={11} duration={2.5} />
                  </div>
                  <div className="text-lg text-[var(--text-secondary)] mt-1">
                    Estados
                  </div>
                  <div className="h-1 w-10 bg-[var(--accent-primary)] mt-3 rounded-full group-hover:w-16 transition-all duration-300" />
                </div>

                <div className="group">
                  <div className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tight">
                    <CountUp to={200} duration={3} prefix="+" />
                  </div>
                  <div className="text-lg text-[var(--text-secondary)] mt-1">
                    Clientes
                  </div>
                  <div className="h-1 w-10 bg-[var(--accent-primary)] mt-3 rounded-full group-hover:w-16 transition-all duration-300" />
                </div>
              </div>

              <p className="text-[var(--text-secondary)] leading-relaxed">
                Atendemos empresas em todo o território nacional, oferecendo
                soluções técnicas de excelência em segurança do trabalho e meio
                ambiente.
              </p>
            </div>

            {/* Coluna direita - Mapa */}
            <div className="lg:w-2/3">
              <BrazilMap />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* SEÇÃO: SERVIÇOS (Grid 4x2) */}
      <AnimatedSection
        id="servicos"
        className="relative py-24 md:py-32 bg-[var(--bg-secondary)]"
      >
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 80% 20%, rgba(255, 107, 53, 0.08) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <SectionTitle centered subtitle="Soluções completas em SST e Meio Ambiente">
            Nossos{" "}
            <span className="text-[var(--accent-primary)]">Serviços</span>
          </SectionTitle>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Inventários",
                desc: "Espaço Confinado, Máquinas, Equipamentos de Içamento e Trabalho em Altura.",
                icon: FileText,
              },
              {
                title: "Procedimentos",
                desc: "Procedimentos Operacionais de Segurança com padrão IDEAL.",
                icon: ClipboardCheck,
              },
              {
                title: "Terceirização",
                desc: "Triagem, avaliações técnicas e psicológicas para o melhor perfil.",
                icon: Users,
              },
              {
                title: "Treinamentos",
                desc: "Instrutores certificados em SST, Saúde e Meio Ambiente.",
                icon: GraduationCap,
              },
              {
                title: "Documentações",
                desc: "LTCAT, PGR, PCMSO, laudos e análises ergonômicas.",
                icon: FolderOpen,
              },
              {
                title: "Projetos",
                desc: "Linhas de vida, proteções coletivas e plano de rigging com ART.",
                icon: Ruler,
              },
              {
                title: "Gestão e-Social",
                desc: "Gestão completa de eventos de SST com garantia de transmissão.",
                icon: ShieldCheck,
              },
              {
                title: "Assessorias",
                desc: "Diagnósticos, auditorias, investigações e licenciamento ambiental.",
                icon: SlidersHorizontal,
              },
            ].map((s, index) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group p-6 bg-[var(--bg-tertiary)] rounded-2xl border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--accent-glow)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-glow)] flex items-center justify-center mb-4 group-hover:bg-[var(--accent-primary)] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[var(--accent-primary)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* SEÇÃO: ESPAÇO CONFINADO */}
      <AnimatedSection
        id="espaco-confinado"
        className="relative min-h-[600px] overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/bg-espaco-confinado.png"
            alt="Espaço Confinado"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)]/95 via-[var(--bg-primary)]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-accent)] bg-[var(--accent-glow)] mb-6">
              <Award className="w-4 h-4 text-[var(--accent-primary)]" />
              <span className="text-sm font-medium text-[var(--accent-primary)]">
                Nosso Diferencial
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight">
              O melhor inventário de{" "}
              <span className="text-[var(--accent-primary)]">
                espaço confinado
              </span>{" "}
              do Brasil!
            </h2>

            <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed">
              Nossos inventários são elaborados de forma completa e padronizada,
              seguindo os mais altos critérios técnicos da IDEAL SST. Os
              documentos são acompanhados de uma Ficha Técnica Padrão IDEAL, com
              informações detalhadas de todos os ambientes e ART emitida por
              profissional habilitado.
            </p>

            <a
              href="#contato-comercial"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 text-base font-semibold text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-glow)]"
            >
              Saiba Mais
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* SEÇÃO: TERCEIRIZAÇÃO */}
      <AnimatedSection
        id="terceirizacao"
        className="relative py-20 md:py-28 bg-[var(--bg-secondary)]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Coluna Esquerda - Imagem */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div
                className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)",
                }}
              />
              <img
                src="/images/tec.png"
                alt="Terceirização de Profissionais em Segurança do Trabalho"
                className="relative w-full h-auto"
              />
            </motion.div>

            {/* Coluna Direita - Conteúdo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-8">
                Terceirização de Profissionais em{" "}
                <span className="text-[var(--accent-primary)]">
                  Segurança do Trabalho
                </span>
              </h2>

              <div className="space-y-5">
                {[
                  {
                    title: "Redução imediata de custos fixos",
                    desc: "Menos encargos trabalhistas, sem perda de qualidade técnica.",
                  },
                  {
                    title: "Conformidade total com a legislação",
                    desc: "Atuação alinhada às Normas Regulamentadoras e exigências legais.",
                  },
                  {
                    title: "Profissionais prontos para atuar",
                    desc: "Técnicos capacitados, com experiência prática em diferentes segmentos.",
                  },
                  {
                    title: "Flexibilidade operacional",
                    desc: "Alocação conforme demanda, período ou necessidade específica da empresa.",
                  },
                  {
                    title: "Gestão técnica especializada",
                    desc: "A IDEAL SST assume o acompanhamento e a responsabilidade técnica do serviço.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent-primary)] flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* SEÇÃO: PARCEIROS */}
      <AnimatedSection
        id="parceiros"
        className="relative py-10 md:py-14 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <SectionTitle centered subtitle="Grandes empresas que confiam no padrão IDEAL">
            <span className="text-[var(--bg-primary)]">Nossos</span>{" "}
            <span className="text-[var(--accent-primary)]">Parceiros</span>
          </SectionTitle>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Fade nas bordas */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Track animado com CSS animation para loop seamless */}
          <div
            className="flex items-center gap-12 md:gap-16 py-4 animate-marquee"
            style={{ width: "max-content" }}
          >
            {/* Logos duplicadas para loop infinito seamless */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-12 md:gap-16">
                {[
                  { src: "/images/parceiros/p1.png", alt: "Parceiros - Grupo 1" },
                  { src: "/images/parceiros/p2.png", alt: "Parceiros - Grupo 2" },
                  { src: "/images/parceiros/p3.png", alt: "Parceiros - Grupo 3" },
                  { src: "/images/parceiros/p4.png", alt: "Parceiros - Grupo 4" },
                  { src: "/images/parceiros/p5.png", alt: "Parceiros - Grupo 5" },
                  { src: "/images/parceiros/p6.png", alt: "Parceiros - Grupo 6" },
                ].map((logo, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className={`flex items-center flex-shrink-0 ${index === 0 ? "h-10 md:h-12 translate-y-0.5" : index === 1 ? "h-11 md:h-14" : "h-10 md:h-12"}`}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* SEÇÃO: CTA FINAL */}
      <AnimatedSection className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--accent-muted) 0%, var(--accent-primary) 50%, var(--accent-secondary) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, white 1px, transparent 1px),
                             radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Pronto para elevar a segurança da sua empresa?
          </h2>

          <p className="mt-6 text-xl text-white/80">
            Entre em contato conosco e descubra como podemos ajudar sua empresa
            a alcançar excelência em SST.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5538999029541?text=Olá! Gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-[var(--accent-primary)] bg-white hover:bg-gray-100 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              Fale pelo WhatsApp
            </a>

            <a
              href="mailto:contato@idealsst.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 hover:border-white hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Enviar Email
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* FOOTER */}
      <footer className="relative bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Logo e descrição */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo-ideal-eng.png"
                  alt="IDEAL"
                  className="w-12 h-12"
                />
                <div>
                  <span className="text-xl font-bold text-[var(--text-primary)]">
                    IDEAL
                  </span>
                  <span className="block text-xs text-[var(--text-muted)]">
                    Engenharia + SST
                  </span>
                </div>
              </div>
              <p className="mt-4 text-[var(--text-secondary)] max-w-md">
                Assessoria especializada em Engenharia, Segurança do Trabalho,
                Saúde Ocupacional e Meio Ambiente. De Minas para o Brasil.
              </p>
            </div>

            {/* Links rápidos */}
            <div>
              <h4 className="font-semibold text-[var(--text-primary)] mb-4">
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                {["Quem Somos", "Serviços", "Parceiros", "Contato"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase().replace(" ", "-")}`}
                        className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-semibold text-[var(--text-primary)] mb-4">
                Contato
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-[var(--text-muted)]">
                  <Phone className="w-4 h-4 text-[var(--accent-primary)]" />
                  <a
                    href="tel:+5538999029541"
                    className="hover:text-[var(--accent-primary)] transition-colors"
                  >
                    (38) 99902-9541
                  </a>
                </li>
                <li className="flex items-center gap-2 text-[var(--text-muted)]">
                  <Mail className="w-4 h-4 text-[var(--accent-primary)]" />
                  <a
                    href="mailto:contato@idealsst.com"
                    className="hover:text-[var(--accent-primary)] transition-colors"
                  >
                    contato@idealsst.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-[var(--text-muted)]">
                  <MapPin className="w-4 h-4 text-[var(--accent-primary)] mt-0.5" />
                  <span>Rua Dr. Wladimir da Silva Neiva, 226, Paracatu - MG</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] text-center">
            <p className="text-[var(--text-muted)] text-sm">
              © 2026 IDEAL Engenharia e Assessoria. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Flutuante */}
      <motion.a
        href="https://wa.me/5538999029541?text=Olá! Gostaria de mais informações."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        className="fixed bottom-6 right-6 z-[999] w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-7 h-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </AnimatedPage>
  );
}
