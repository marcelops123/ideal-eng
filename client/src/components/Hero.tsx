/**
 * Hero Component
 * Design: Minimalismo Corporativo Geométrico
 * - Imagem de fundo com overlay escuro
 * - Título grande em Montserrat
 * - Subtítulo em laranja
 * - Botão CTA com animação
 * - Linhas geométricas diagonais
 */

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-black overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-banner.jpg')",
          opacity: 0.3,
        }}
      />

      {/* Geometric Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5722] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF5722] opacity-5 rounded-full blur-3xl" />

      {/* Diagonal Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="0"
          x2="1200"
          y2="400"
          stroke="#FF5722"
          strokeWidth="2"
          opacity="0.1"
        />
        <line
          x1="0"
          y1="400"
          x2="1200"
          y2="800"
          stroke="#FF5722"
          strokeWidth="2"
          opacity="0.1"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 h-full flex items-start md:items-center justify-start">
        <div className="max-w-7xl mx-auto px-6 w-full pt-4 pb-24 md:pt-0 md:pb-0">
          <div className="max-w-2xl animate-fade-in">
            {/* Orange Accent Line */}
            <div className="h-1 w-20 bg-[#FF5722] mb-6 md:mb-8 rounded-full" />

            {/* Main Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Assessoria em Engenharia e Segurança do Trabalho
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[#FF5722] font-semibold mb-3 md:mb-4">
              Soluções customizadas para sua empresa
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#b0b0b0] mb-6 md:mb-8 leading-relaxed max-w-xl">
              A IDEAL oferece serviços de assessoria em engenharia, segurança do
              trabalho, saúde ocupacional e meio ambiente com qualidade e
              proficiência.
            </p>

            {/* CTA Button */}
            <a
              href="#quem-somos"
              className="inline-flex items-center gap-3 px-7 py-3 md:px-8 md:py-4 bg-[#FF5722] text-white font-semibold rounded-sm hover:bg-[#E64A19] transition-all duration-300 hover:gap-4 group"
            >
              Conheça Nossos Serviços
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[#b0b0b0] text-xs md:text-sm">Scroll</span>
          <svg
            className="w-4 h-4 md:w-5 md:h-5 text-[#FF5722]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

