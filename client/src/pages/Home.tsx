"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Mail, Phone, MapPin, Briefcase, Globe, MessageCircle } from "lucide-react";
import { animate, motion, useInView, useMotionValue } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  FileText,
  ClipboardCheck,
  Users,
  GraduationCap,
  FolderOpen,
  Ruler,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { title } from "process";
import ShinyText from "@/components/ShinyText";
import TiltedCard from "@/components/TiltedCard";
import GradientText from "@/components/GradientText";
import SpotlightCard from "@/components/SpotlightCard";

const AnimatedPage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    className="min-h-screen bg-[#050505] text-white"
  >
    {children}
  </motion.div>
);

const bgFadeZoom = {
  hidden: {
    opacity: 0,
    scale: 1.08,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};


const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.30,
      duration: 1.2,
      ease: "easeOut",
    },
  }),
};

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

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

const Title: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <h2
    className={[
      "[font-family:var(--font-title)] uppercase tracking-[0.14em]",
      "text-[var(--ideal-orange)]",
      className,
    ].join(" ")}
  >
    {children}
  </h2>
);

const Body: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <p className={["[font-family:var(--font-body)] text-white/70", className].join(" ")}>
    {children}
  </p>
);

export default function Home() {
  return (
    <AnimatedPage>
      <Navigation />
      <Hero />

      {/* 1) QUEM SOMOS + Missão/Visão/Valores (mesma ideia do PDF) */}
      <AnimatedSection
        id="quem-somos"
        className="relative overflow-hidden pt-24 md:pt-28 pb-18"
      >
        <div className="absolute inset-0">
          <img
            src="/images/logo-bg.png"
            alt="Imagem institucional"
            className="w-full h-full object-cover opacity-35"
          />
          {/* overlays para contraste e suavidade */}
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/60 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/45" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex justify-start">
            <h2
              className="
        [font-family:var(--font-title)]
        uppercase tracking-[0.14em]
        text-[var(--ideal-orange)]
        text-3xl md:text-4xl
      "
            >
              <GradientText
                className="text-3xl md:text-4xl text-start"
                colors={[
                  "#e53935",
                  "#f4511e",
                  "#fb8c00",
                  "#ffa726",
                  "#ff6f00",
                ]}
                animationSpeed={6}
                showBorder={false}
              >
                QUEM SOMOS
              </GradientText>
            </h2>
          </div>

          {/* Texto (Jura) */}
          <div className="mt-8 max-w-4xl space-y-6">
            <p className="[font-family:var(--font-body)] text-white/75 text-base md:text-lg leading-relaxed">
              A IDEAL é uma empresa que presta serviços de Assessoria em Engenharia,
              Segurança do Trabalho, Saúde Ocupacional e Meio Ambiente.
            </p>

            <p className="[font-family:var(--font-body)] text-white/75 text-base md:text-lg leading-relaxed">
              A qualidade do nosso serviço e a preocupação genuína com o cliente são o
              diferencial de nossa marca. Oferecemos soluções customizadas para
              minimizar passivos, atender requisitos legais e promover saúde e segurança.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-9xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-stretch">
                {[
                  {
                    k: "Missão",
                    v: "Garantir segurança e qualidade nos ambientes de trabalho por meio de soluções técnicas em Engenharia, SST e Meio Ambiente.",
                  },
                  {
                    k: "Visão",
                    v: "Ser referência nacional em qualidade e inovação em SST, promovendo ambientes seguros, sustentáveis e humanizados.",
                  },
                  {
                    k: "Valores",
                    v: "Comprometimento com a qualidade, ética, segurança e valorização das pessoas em tudo o que fazemos.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.k}
                    custom={index}
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="flex items-stretch justify-center"
                  >
                    <TiltedCard
                      // Você pode trocar por uma imagem mais neutra (textura/gradiente) se não quiser “álbum”
                      imageSrc="/images/bg-espaco-confinado.png"
                      altText={`${item.k}`}
                      captionText={item.k}
                      containerHeight="220px"
                      containerWidth="100%"
                      imageHeight="220px"
                      imageWidth="100%"
                      rotateAmplitude={12}
                      scaleOnHover={1.02}
                      showMobileWarning={false}
                      showTooltip={false}
                      displayOverlayContent={true}
                      overlayContent={
                        <div className="relative h-full w-full rounded-xl overflow-hidden flex items-center justify-center text-center">
                          <div className="absolute inset-0 bg-[var(--ideal-orange-2)]/90" />
                          <div className="absolute inset-0 bg-gradient-to-b from-white/12 via-transparent to-black/15" />

                          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-6 min-h-[220px]">
                            <div
                              className="
                      [font-family:var(--font-title)]
                      uppercase
                      tracking-[0.16em]
                      text-lg md:text-xl
                      font-bold
                      mb-4
                      text-white
                    "
                            >
                              {item.k}
                            </div>

                            <p
                              className="
                      [font-family:var(--font-body)]
                      text-white/95
                      text-sm md:text-base
                      leading-relaxed
                    "
                            >
                              {item.v}
                            </p>
                          </div>
                        </div>
                      }
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* respiro inferior */}
          <div className="h-10 md:h-14" />
        </div>
      </AnimatedSection>


      <AnimatedSection id="contato-diretoria" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ff3b1f_0%,#ff3b1f_35%,#111_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_65%_at_50%_35%,rgba(0,0,0,.18)_0%,rgba(0,0,0,0)_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-20">

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[
              {
                name: "Pedro Henrique",
                role: "Sócio Diretor",
                photo: "/images/bg-pedro.png",
                bio: `Com mais de quinze anos de experiência em Saúde, Segurança do Trabalho, Meio Ambiente e Qualidade, atua desde 2010 em empresas de assessoria, grandes obras e operações industriais em diferentes estados do país.
Tem passagem por companhias de referência como Odebrecht Ambiental, BRK Ambiental, KWS Sementes, ADM do Brasil e LongPing, onde exerceu funções de liderança técnica e supervisão.
Técnico e Tecnólogo em Segurança do Trabalho, Bombeiro Profissional Civil e Auditor da ISO 45001, também atua como instrutor e palestrante em segurança ocupacional.`,
              },
              {
                name: "Guilherme Caldas",
                role: "Sócio Diretor",
                photo: "/images/bg-guilherme.png",
                bio: `Engenheiro Mecânico formado pela Universidade Federal de Uberlândia (UFU) e pós-graduado em Engenharia de Segurança do Trabalho pela Universidade Cândido Mendes, Guilherme Caldas atua há mais de uma década na área de Saúde, Segurança e Meio Ambiente (SSMA).
Sua trajetória profissional inclui passagens por grandes empresas dos setores de sementes, mineração e sucroenergético, como Monsanto, Biosev, Nidera/Syngenta, CMOC e LongPing, onde exerceu funções de analista, especialista e coordenador corporativo, consolidando ampla experiência técnica e de gestão. `,
              },
            ].map((d, index) => (
              <motion.div
                key={d.name}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="bg-black/55 border border-black/30"
              >
                <div className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={d.photo}
                      alt={d.name}
                      className="w-44 h-44 object-cover rounded-md"
                    />

                    <div className="mt-5 [font-family:var(--font-title)] text-white uppercase tracking-[0.12em]">
                      {d.name}
                    </div>

                    <div className="[font-family:var(--font-body)] text-white/70 text-sm">
                      {d.role}
                    </div>
                  </div>

                  <p className="mt-6 [font-family:var(--font-body)] text-white/70 leading-relaxed text-sm md:text-base">
                    {d.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 3) 11 ESTADOS +200 CLIENTES (igual destaque do PDF) */}
      <AnimatedSection id="estados" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black" />


        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="[font-family:var(--font-title)] text-white text-6xl md:text-7xl tracking-[0.08em]">
                <CountUp
                  to={11}
                  duration={2.5}
                  className="[font-family:var(--font-title)] text-white text-6xl md:text-7xl tracking-[0.08em]"
                />
              </div>

              <div className="[font-family:var(--font-title)] font-weight-bold uppercase tracking-[0.18em] text-white text-3xl md:text-4xl mt-2">
                Estados
              </div>

              <div className="mt-10">
                <CountUp
                  to={200}
                  duration={3.0}
                  prefix="+ "
                  className="[font-family:var(--font-title)] text-white text-6xl md:text-7xl tracking-[0.08em]"
                />
              </div>

              <div className="[font-family:var(--font-title)] uppercase tracking-[0.18em] text-white text-3xl md:text-4xl mt-2">
                Clientes
              </div>
            </div>

            {/* mapa genérico */}
            <div className="relative">
              <img
                src="/images/mapa-brasil.png"
                alt="Mapa do Brasil"
                className="w-full max-h-[520px] object-contain"
              />
              <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_50%,rgba(255,59,31,0.26)_0%,rgba(255,59,31,0.16)_40%,rgba(0,0,0,0)_75%)]" />

              <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/20 to-black/60" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 4) NOSSOS PRINCIPAIS SERVIÇOS (layout lista com barra laranja lateral) */}
      <AnimatedSection id="servicos" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#070707]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_65%_at_85%_35%,rgba(255,59,31,.16)_0%,rgba(0,0,0,0)_70%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-20">

          <div className="text-left">


            <GradientText
              className="text-3xl md:text-4xl text-start"
              colors={[
                "#e53935",
                "#f4511e",
                "#fb8c00",
                "#ffa726",
                "#ff6f00",
              ]}
              animationSpeed={6}
              showBorder={false}
            >
              NOSSOS PRINCIPAIS SERVIÇOS
            </GradientText>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Inventários",
                desc: "Nossos inventários são completos e incluem uma ficha técnica padrão IDEAL, com todas as informações unitárias de cada local, além da respectiva ART. Realizamos Inventários de Espaço Confinado, Inventário de Máquinas e Equipamentos, Inventário de Equipamentos de Içamentos de Cargas e Inventário de Equipamentos de Trabalho em Altura.",
                icon: FileText,
              },
              {
                title: "Procedimentos",
                desc: "Somos especialistas no quesito dentro do território nacional. Desenvolvemos Procedimentos Operacionais de Segurança, com qualidade e padrão IDEAL, além de entregar todos os respectivos anexos linkados ao mesmo.",
                icon: ClipboardCheck,
              },
              {
                title: "Terceirização de Mão de Obra",
                desc: "Você nos informa a necessidade e nós te entregamos o melhor perfil para contemplar o seu time! Temos um vasto banco de perfis, buscamos os melhores profissionais do mercado através de uma forte triagem, avaliações técnicas e psicológicas, tudo para você obter a melhor experiência do padrão IDEAL.",
                icon: Users,
              },
              {
                title: "Treinamentos",
                desc: "A IDEAL conta com instrutores competentes e qualificados, para realizar todos os treinamentos correspondentes a segurança do trabalho, saúde e meio ambiente. Nossos instrutores possuem certificações nacionais e internacionais, oferecendo um aprendizado, dinâmica e qualidade no padrão IDEAL.",
                icon: GraduationCap,
              },
              {
                title: "Documentações de SSMA",
                desc: "Elaboramos todos os documentos, programas e laudos de segurança do trabalho, saúde e meio ambiente com a qualidade e padrão IDEAL.  Desenvolvemos laudos (LTCAT, LI, LP), PGR, PCMSO, PCA, PPR, PGRSS, análises ergonômicas, PPP, ordens de serviços, CAT, análises de riscos de projetos e muito mais. Além de realizarmos avaliações ambientais de ruído, vibrações, poeiras, calor & frio.",
                icon: FolderOpen,
              },
              {
                title: "Projetos",
                desc: "Temos uma divisão de projetos qualificada e experiente para lhe oferecer as melhores soluções do mercado, com a garantia do conselho regional de engenharia e agronomia (CREA) em conjunto com a respectiva anotação de responsabilidade técnica (ART). Desenvolvemos projetos  e laudos de linhas de vida, proteções coletivas, plano de rigging e muito mais.",
                icon: Ruler,
              }
            ].map((s, index, arr) => {
              const Icon = s.icon;

              return (

                <React.Fragment key={s.title}>
                  <SpotlightCard className="group
                bg-[#0b0b0b]
                border border-white/10
                rounded-2xl
                p-6
                transition-all
                duration-300
                hover:border-[var(--ideal-orange)]
                hover:shadow-[0_10px_20px_rgba(0,0,0,0.45)]" spotlightColor="rgba(250, 138, 104, 0.603)">
                    {/* Card real */}

                    <div
                      className="
                
              "
                    >
                      <div
                        className="
                  w-12 h-12
                  rounded-xl
                  bg-white/5
                  flex items-center justify-center
                  mb-4
                  transition-colors
                  group-hover:bg-[var(--ideal-orange)]
                "
                      >
                        <Icon className="w-6 h-6 text-[var(--ideal-orange)] group-hover:text-white" />
                      </div>

                      <h3 className="[font-family:var(--font-title)] uppercase tracking-[0.14em] text-white text-sm mb-2">
                        {s.title}
                      </h3>

                      <p className="[font-family:var(--font-body)] text-white/65 text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </div>

                  </SpotlightCard>
                </React.Fragment>
              );
            })}
          </div>
          <div className="mt-12 justify-center lg:pl-60 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Gestão e-Social",
                desc: "Não se preocupe com o envio dos eventos de SST no eSocial da sua empresa! Fazemos a gestão completa de SST para a sua empresa, incluindo a elaboração de documentos e envio dos eventos ao eSocial. Garantimos todas as transmissões de eventos, com qualidade, pontualidade e responsabilidade, além de lhes oferecer mensalmente todos os comprovantes de envios.",
                icon: ShieldCheck,
              },
              {
                title: "Assessorias Customizadas de SSMA",
                desc: "Temos uma assessoria customizada para o seu momento e cenário, utilizamos toda a nossa experiência, proficiência e qualificação, para lhes entregar diversos serviços como, analises de riscos, diagnósticos operacionais de SST, melhorias de processos, auditorias, investigação de acidentes, licenciamento ambiental, outorga de recursos hídricos, pareceres técnicos e muito mais. ",
                icon: SlidersHorizontal,
              },
            ].map((s, index, arr) => {
              const Icon = s.icon;

              return (
                <React.Fragment key={s.title}>
                  <SpotlightCard className="group
                bg-[#0b0b0b]
                border border-white/10
                rounded-2xl
                p-6
                transition-all
                duration-300
                hover:border-[var(--ideal-orange)]
                hover:shadow-[0_10px_20px_rgba(0,0,0,0.45)]" spotlightColor="rgba(250, 138, 104, 0.603)">
                  {/* Card real */}
                  <div
                  >
                    <div
                      className="
                  w-12 h-12
                  rounded-xl
                  bg-white/5
                  flex items-center justify-center
                  mb-4
                  transition-colors
                  group-hover:bg-[var(--ideal-orange)]
                "
                    >
                      <Icon className="w-6 h-6 text-[var(--ideal-orange)] group-hover:text-white" />
                    </div>

                    <h3 className="[font-family:var(--font-title)] uppercase tracking-[0.14em] text-white text-sm mb-2">
                      {s.title}
                    </h3>

                    <p className="[font-family:var(--font-body)] text-white/65 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  </SpotlightCard>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </AnimatedSection>


      {/* 5) ESPAÇO CONFINADO (split foto + texto com gradiente) */}
      <AnimatedSection id="espaco-confinado" className="relative overflow-hidden">
        {/* Background animado */}
        <motion.div
          className="absolute inset-0"
          variants={bgFadeZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/images/bg-espaco-confinado.png"
            alt="Espaço Confinado"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/55 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/70" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[620px]">
            <div className="hidden lg:block" />

            {/* Texto */}
            <div className="relative">
              <div className="bg-black/35 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-[2px]">
                <h3
                  className="
              [font-family:var(--font-title)]
              uppercase
              text-center
              tracking-[0.12em]
              text-[var(--ideal-orange)]
              font-extrabold
              text-2xl sm:text-3xl md:text-4xl
              leading-tight
            "
                >
                  O melhor inventário de espaço confinado do Brasil!
                </h3>

                <p className="[font-family:var(--font-body)] text-white/75 mt-8 leading-relaxed text-base md:text-lg">
                  Nossos inventários são elaborados de forma completa e padronizada, seguindo os mais altos critérios técnicos da IDEAL SST. Os documentos são acompanhados de uma Ficha Técnica Padrão IDEAL, que reúne informações detalhadas e unitárias de todos os ambientes, além da respectiva ART (Anotação de Responsabilidade Técnica) emitida por profissional habilitado.<br></br><br></br>

                  Realizamos Inventários de Espaço Confinado, assegurando o mapeamento preciso dos riscos, a conformidade com as normas regulamentadoras e a implementação de medidas preventivas eficazes.

                  Nosso objetivo é oferecer diagnósticos técnicos confiáveis que contribuam para a segurança dos colaboradores, a eficiência operacional e o cumprimento das exigências legais em todos os ambientes de trabalho.
                </p>

                <p className="[font-family:var(--font-body)] text-white/75 mt-4 leading-relaxed text-base md:text-lg">
                  Asseguramos mapeamento preciso dos riscos, conformidade com normas e implementação de medidas preventivas eficazes.
                </p>

                <p className="[font-family:var(--font-body)] text-white/75 mt-4 leading-relaxed text-base md:text-lg">
                  Nosso objetivo é oferecer diagnósticos técnicos confiáveis que contribuam para segurança, eficiência operacional e atendimento legal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>


      {/* 6) PARCEIROS (split preto / branco com logos) */}
      <AnimatedSection id="parceiros" className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* esquerda preta */}
          <div className="
  relative
  bg-black
  px-6 sm:px-10 md:px-14
  py-16 md:py-20
  flex
  items-center
">
            <div className="absolute inset-0 bg-[radial-gradient(55%_65%_at_30%_25%,rgba(255,59,31,.14)_0%,rgba(0,0,0,0)_70%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/75" />

            <div className="relative max-w-xl">
              {/* detalhe laranja */}
              <div className="h-1 w-16 bg-[var(--ideal-orange)] rounded-full mb-6" />

              <h2
                className="
            [font-family:var(--font-title)]
            uppercase tracking-[0.14em]
            text-[var(--ideal-orange)]
            text-3xl sm:text-4xl md:text-5xl
            leading-tight
          "
              >
                <GradientText
                  className="text-3xl md:text-4xl text-start"
                  colors={[
                    "#e53935",
                    "#f4511e",
                    "#fb8c00",
                    "#ffa726",
                    "#ff6f00",
                  ]}
                  animationSpeed={6}
                  showBorder={false}
                >
                  Alguns Parceiros
                </GradientText>

              </h2>

              <p className="[font-family:var(--font-body)] text-white/78 mt-7 text-base sm:text-lg md:text-xl leading-relaxed">
                Somos referência nacional no desenvolvimento de assessorias customizadas,
                procedimentos internos, laudos, inventários de segurança, melhorias contínuas,
                projetos e terceirização com alto critério de seleção.
              </p>

              <p className="[font-family:var(--font-body)] text-white/70 mt-5 text-sm sm:text-base md:text-lg">
                Conheça alguns dos nossos parceiros:
              </p>
            </div>
          </div>

          {/* direita branca */}
          <div className="relative bg-white px-6 sm:px-10 md:px-14 py-16 md:py-20 rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-l from-white via-white to-white/90 rounded-xl" />

            <div className="relative flex items-center justify-center">
              <img
                src="/images/parceiros.png"
                alt="Logos de parceiros"
                className="
            w-full
            max-w-[760px]
            h-[320px] sm:h-[420px] md:h-[520px]
            object-contain
          "
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 7) CONTATO COMERCIAL (blocos laranja com ícones) */}
      <AnimatedSection id="contato-comercial" className="relative overflow-hidden">
        <div className="absolute inset-0">

          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(55%_70%_at_75%_35%,rgba(255,59,31,.22)_0%,rgba(0,0,0,0)_70%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <h2 className="[font-family:var(--font-title)] uppercase tracking-[0.16em] text-[var(--ideal-orange)] text-3xl md:text-5xl text-center">
            <div className="flex justify-center">
              <GradientText
                className="text-3xl md:text-4xl"
                colors={[
                  "#e53935",
                  "#f4511e",
                  "#fb8c00",
                  "#ffa726",
                  "#ff6f00",
                ]}
                animationSpeed={6}
                showBorder={false}
              >
                CONTATO COMERCIAL
              </GradientText>
            </div>
          </h2>

          <p className="text-center">
            <ShinyText
              text="Entre em contato conosco e conheça o nosso trabalho."
              disabled={false}
              speed={3}
              className='
            [font-family:var(--font-body)] text-white/70 text-center mt-6'
            />
          </p>

          <div className="mt-12 max-w-3xl mx-auto space-y-5">
            {[
              {
                icon: <Phone className="w-6 h-6 text-white" />,
                label: "Telefone",
                value: "(38) 99902-9541",
                href: "tel:+5538999029541",
              },
              {
                icon: <Mail className="w-6 h-6 text-white" />,
                label: "Email",
                value: "contato@idealsst.com",
                href: "mailto:contato@idealsst.com",
              },
              {
                icon: <MapPin className="w-6 h-6 text-white" />,
                label: "Matriz",
                value: "Rua Dr. Wladimir da Silva Neiva, 226, Paracatu - MG.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 bg-black/45 border border-white/10"
              >
                <div className="w-16 h-16 bg-[var(--ideal-orange)] flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="py-4 pr-6">
                  <div className="[font-family:var(--font-body)] text-white/60 text-xs uppercase tracking-[0.18em]">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="[font-family:var(--font-body)] text-white/85 hover:text-[var(--ideal-orange)] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="[font-family:var(--font-body)] text-white/85">
                      {item.value}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="[font-family:var(--font-body)] text-white/55">
              © 2026 IDEAL Engenharia e Assessoria. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </AnimatedSection>
      <motion.a
        href="https://wa.me/5538999029541?text=Olá!%20Gostaria%20de%20mais%20informações."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        className="
    fixed
    bottom-6
    right-6
    z-[999]
    w-14
    h-14
    rounded-full
    bg-[#25D366]
    flex
    items-center
    justify-center
    shadow-[0_12px_30px_rgba(0,0,0,0.45)]
    hover:scale-110
    hover:shadow-[0_16px_40px_rgba(0,0,0,0.55)]
    transition-transform
    duration-300
  "
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>
    </AnimatedPage>
  );
}
