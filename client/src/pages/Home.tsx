/**
 * Home Page - IDEAL Landing Page
 * Design: Minimalismo Corporativo Geométrico
 * - 11 seções correspondentes ao sumário do PDF
 * - Animações sutis ao scroll
 * - Layout assimétrico com blocos alternados
 * - Cores: Preto, branco e laranja
 */

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import { Mail, Phone, MapPin, Users, Target, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Section 1: Quem Somos */}
      <section
        id="quem-somos"
        className="py-20 bg-black border-b border-[#2a2a2a]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader number="1" title="Quem Somos" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-lg text-[#b0b0b0] leading-relaxed">
                A IDEAL é uma empresa que presta serviços de Assessoria em
                Engenharia, Segurança do Trabalho, Saúde Ocupacional e Meio
                Ambiente.
              </p>

              <p className="text-lg text-[#b0b0b0] leading-relaxed">
                A qualidade do nosso serviço e a preocupação genuína com o
                cliente são o diferencial de nossa marca. Oferecemos aos
                clientes uma solução customizada para garantir a minimização de
                passivos trabalhistas, atendimento aos requisitos legais e
                promover a saúde e a segurança de todos.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm hover:border-[#FF5722] transition-colors">
                  <div className="text-3xl font-bold text-[#FF5722] mb-2">
                    15+
                  </div>
                  <p className="text-[#b0b0b0]">Anos de Experiência</p>
                </div>
                <div className="p-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm hover:border-[#FF5722] transition-colors">
                  <div className="text-3xl font-bold text-[#FF5722] mb-2">
                    10+
                  </div>
                  <p className="text-[#b0b0b0]">Estados Atendidos</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src="/images/team-section.jpg"
                alt="Time IDEAL"
                className="w-full rounded-sm shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 rounded-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Visão & Missão */}
      <section
        id="visao-missao"
        className="py-20 bg-[#1a1a1a] border-b border-[#2a2a2a]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader number="2" title="Visão & Missão" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Visão */}
            <div className="p-8 bg-black border-l-4 border-[#FF5722] rounded-sm hover:shadow-lg hover:shadow-[#FF5722]/20 transition-all">
              <h3 className="text-3xl font-bold text-[#FF5722] mb-4 uppercase">
                Visão
              </h3>
              <p className="text-lg text-[#b0b0b0] leading-relaxed">
                Obtenção de um ambiente de produção seguro, humanizado, com
                capacitação de qualidade, cumprimento à legislação pertinente e
                favorável à produção, garantindo o bem-estar de todos.
              </p>
            </div>

            {/* Missão */}
            <div className="p-8 bg-black border-l-4 border-[#FF5722] rounded-sm hover:shadow-lg hover:shadow-[#FF5722]/20 transition-all">
              <h3 className="text-3xl font-bold text-[#FF5722] mb-4 uppercase">
                Missão
              </h3>
              <p className="text-lg text-[#b0b0b0] leading-relaxed">
                Ser referência no Brasil nas áreas de Segurança do Trabalho,
                Saúde e Meio Ambiente, entregando excelência em qualidade para
                nossos clientes.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="mt-12">
            <img
              src="/images/innovation-tech.jpg"
              alt="Inovação e Tecnologia"
              className="w-full rounded-sm shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Cases de Negócios */}
      <section
        id="cases"
        className="py-20 bg-black border-b border-[#2a2a2a]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader number="3" title="Cases de Negócios" />

          <p className="text-lg text-[#b0b0b0] mb-12 leading-relaxed max-w-3xl">
            Somos referência nacional no quesito de desenvolvimento de
            assessorias customizadas, procedimentos internos, laudos, inventários
            de segurança, melhorias contínuas de processos, projetos e
            terceirização de mão de obra com crivo de avaliação e seleção de
            alta performance.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Case 1: Nexa Resources */}
            <div className="p-8 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm hover:border-[#FF5722] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FF5722] rounded-sm flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Nexa Resources</h3>
              </div>
              <ul className="space-y-2 text-[#b0b0b0]">
                <li>✓ Revisões internas de procedimentos operacionais</li>
                <li>✓ Revisão de Programas de Segurança</li>
                <li>✓ Revisão de Formulários e Anexos</li>
                <li>✓ Criação de Novos Anexos</li>
                <li>✓ Capacitação do Time Nexa</li>
              </ul>
            </div>

            {/* Case 2: Laticínio Canto de Minas */}
            <div className="p-8 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm hover:border-[#FF5722] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FF5722] rounded-sm flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Laticínio Canto de Minas
                </h3>
              </div>
              <p className="text-[#b0b0b0] mb-4">
                Realização de Consultoria em SST e cultura de segurança do
                trabalho.
              </p>
              <ul className="space-y-2 text-[#b0b0b0]">
                <li>✓ Diagnóstico técnico e cultural em 3 unidades</li>
                <li>✓ Entrevistas e observações com 100+ colaboradores</li>
                <li>✓ Relatório detalhado de vulnerabilidades</li>
                <li>✓ Plano de trabalho priorizado</li>
                <li>✓ Ações de curto e longo prazo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Nossos Serviços */}
      <section
        id="servicos"
        className="py-20 bg-[#1a1a1a] border-b border-[#2a2a2a]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader number="4" title="Nossos Serviços" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Inventários",
                desc: "Inventários completos com ficha técnica padrão IDEAL, incluindo Espaço Confinado, Máquinas e Equipamentos, Içamentos e Trabalho em Altura.",
              },
              {
                title: "Procedimentos",
                desc: "Procedimentos Operacionais de Segurança com qualidade e padrão IDEAL, com todos os respectivos anexos linkados.",
              },
              {
                title: "Terceirização de Mão de Obra",
                desc: "Seleção de profissionais qualificados com triagem rigorosa, avaliações técnicas e psicológicas.",
              },
              {
                title: "Treinamentos",
                desc: "Instrutores competentes e qualificados com certificações nacionais e internacionais.",
              },
              {
                title: "Documentações de SSMA",
                desc: "Laudos (LTCAT, LI, LP), PGR, PCMSO, PCA, PPR, PGRSS, análises ergonômicas e muito mais.",
              },
              {
                title: "Projetos",
                desc: "Projetos qualificados com garantia do CREA e ART. Linhas de vida, proteções coletivas, plano de rigging.",
              },
              {
                title: "Gestão e-Social",
                desc: "Gestão completa de SST incluindo elaboração de documentos e envio de eventos ao eSocial.",
              },
              {
                title: "Assessorias Customizadas",
                desc: "Assessorias personalizadas com análises de riscos, diagnósticos, auditorias e investigação de acidentes.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-black border border-[#2a2a2a] rounded-sm hover:border-[#FF5722] hover:shadow-lg hover:shadow-[#FF5722]/10 transition-all group"
              >
                <div className="w-12 h-12 bg-[#FF5722] rounded-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-[#b0b0b0]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Etapas de Trabalho */}
      <section
        id="etapas"
        className="py-20 bg-black border-b border-[#2a2a2a]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader number="5" title="Etapas de Trabalho" />

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Contato Estratégico",
                desc: "Antes de iniciarmos qualquer trabalho, realizamos um contato estratégico com todos os nossos clientes, visando entender a real necessidade e objetivo, para que possamos entregar com o máximo de precisão e eficiência.",
              },
              {
                step: "2",
                title: "Desenvolvimento Estratégico",
                desc: "Desenvolvimento estratégico com a qualidade e proficiência IDEAL. Buscamos desenvolver nossos trabalhos de forma que nossas entregas sejam completas, eficientes e ricas de informações, além de um layout perfeito.",
              },
              {
                step: "3",
                title: "Entrega com Qualidade",
                desc: "Garantimos todas as entregas as que nos foram concedidas com pontualidade, qualidade e responsabilidade.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative flex gap-8 pb-8 border-l-4 border-[#FF5722] pl-8 last:border-l-0 last:pb-0"
              >
                {/* Step Circle */}
                <div className="absolute -left-6 top-0 w-12 h-12 bg-[#FF5722] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lg text-[#b0b0b0] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Atuação pelo Brasil */}
      <section
        id="atuacao"
        className="py-20 bg-[#1a1a1a] border-b border-[#2a2a2a]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader number="6" title="Atuação pelo Brasil" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Nexa Resources - MG",
              "Aura Minerals - TO",
              "Atvos - MS",
              "Prysmian - AM",
              "Petrobras - RJ",
              "Prysmian - PR",
              "Prysmian - MS",
              "Syngenta - MG",
              "Aura Minerals - RN",
            ].map((client, idx) => (
              <div
                key={idx}
                className="p-4 bg-black border border-[#2a2a2a] rounded-sm hover:border-[#FF5722] hover:bg-[#FF5722]/5 transition-all text-center"
              >
                <p className="text-[#b0b0b0] font-medium">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Estados em que Atuamos */}
      <section
        id="estados"
        className="py-20 bg-black border-b border-[#2a2a2a]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader number="7" title="Estados em que Atuamos" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Minas Gerais",
              "Goiás",
              "Tocantins",
              "Mato Grosso",
              "Mato Grosso do Sul",
              "Rio Grande do Norte",
              "Paraná",
              "Rio de Janeiro",
              "São Paulo",
              "Amazonas",
            ].map((state, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm hover:border-[#FF5722] hover:bg-[#FF5722]/5 transition-all text-center"
              >
                <p className="text-[#b0b0b0] font-medium">{state}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Alguns Parceiros */}
      <section
        id="parceiros"
        className="py-20 bg-[#1a1a1a] border-b border-[#2a2a2a]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader number="8" title="Alguns Parceiros" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              "Odebrecht Ambiental",
              "BRK Ambiental",
              "KWS Sementes",
              "ADM do Brasil",
              "LongPing",
              "Monsanto",
              "Biosev",
              "Nidera/Syngenta",
              "CMOC",
            ].map((partner, idx) => (
              <div
                key={idx}
                className="p-6 bg-black border border-[#2a2a2a] rounded-sm hover:border-[#FF5722] hover:shadow-lg hover:shadow-[#FF5722]/10 transition-all flex items-center justify-center min-h-24"
              >
                <p className="text-[#b0b0b0] font-medium text-center">
                  {partner}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Espaço Confinado */}
      <section
        id="espaco-confinado"
        className="py-20 bg-black border-b border-[#2a2a2a]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader number="9" title="Espaço Confinado" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#FF5722] uppercase">
                O Melhor Inventário de Espaço Confinado do Brasil!
              </h3>

              <p className="text-lg text-[#b0b0b0] leading-relaxed">
                Nossos inventários são elaborados de forma completa e
                padronizada, seguindo os mais altos critérios técnicos da IDEAL
                SST. Os documentos são acompanhados de uma Ficha Técnica Padrão
                IDEAL, que reúne informações detalhadas e unitárias de todos os
                ambientes, além da respectiva ART (Anotação de Responsabilidade
                Técnica) emitida por profissional habilitado.
              </p>

              <p className="text-lg text-[#b0b0b0] leading-relaxed">
                Realizamos Inventários de Espaço Confinado, assegurando o
                mapeamento preciso dos riscos, a conformidade com as normas
                regulamentadoras e a implementação de medidas preventivas
                eficazes.
              </p>

              <p className="text-lg text-[#b0b0b0] leading-relaxed">
                Nosso objetivo é oferecer diagnósticos técnicos confiáveis que
                contribuam para a segurança dos colaboradores, a eficiência
                operacional e o cumprimento das exigências legais em todos os
                ambientes de trabalho.
              </p>
            </div>

            {/* Image */}
            <div>
              <img
                src="/images/workplace-safety.jpg"
                alt="Espaço Confinado"
                className="w-full rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Contato Comercial */}
      <section
        id="contato-comercial"
        className="py-20 bg-[#1a1a1a] border-b border-[#2a2a2a]"
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader number="10" title="Contato Comercial" />

          <div className="max-w-2xl">
            <p className="text-lg text-[#b0b0b0] mb-8">
              Entre em contato conosco e conheça o nosso trabalho.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF5722] rounded-sm flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[#b0b0b0] text-sm">Email</p>
                  <a
                    href="mailto:contato@idealsst.com"
                    className="text-white text-lg font-semibold hover:text-[#FF5722] transition-colors"
                  >
                    contato@idealsst.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF5722] rounded-sm flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[#b0b0b0] text-sm">Telefone</p>
                  <a
                    href="tel:+5538999029541"
                    className="text-white text-lg font-semibold hover:text-[#FF5722] transition-colors"
                  >
                    (38) 99902-9541
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF5722] rounded-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[#b0b0b0] text-sm">Endereço</p>
                  <p className="text-white text-lg font-semibold">
                    Rua Dr. Wladimir da Silva Neiva, 226
                    <br />
                    Paracatu - MG
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF5722] rounded-sm flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[#b0b0b0] text-sm">CNPJ</p>
                  <p className="text-white text-lg font-semibold">
                    48.755.949/0001-28
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Contato Diretoria */}
      <section id="contato-diretoria" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader number="11" title="Contato Diretoria" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Guilherme Caldas",
                title: "Sócio Diretor",
                phone: "(34) 99917-5772",
                email: "guilhermecaldas@idealsst.com",
              },
              {
                name: "Pedro Henrique",
                title: "Sócio Diretor",
                phone: "(34) 99836-4577",
                email: "pedrogomes@idealsst.com",
              },
            ].map((director, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#1a1a1a] border border-[#2a2a2a] rounded-sm hover:border-[#FF5722] transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#FF5722] rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {director.name}
                    </h3>
                    <p className="text-[#FF5722] font-semibold">
                      {director.title}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#FF5722]" />
                    <a
                      href={`tel:${director.phone.replace(/\D/g, "")}`}
                      className="text-[#b0b0b0] hover:text-[#FF5722] transition-colors"
                    >
                      {director.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#FF5722]" />
                    <a
                      href={`mailto:${director.email}`}
                      className="text-[#b0b0b0] hover:text-[#FF5722] transition-colors"
                    >
                      {director.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-[#2a2a2a] text-center">
            <p className="text-[#b0b0b0] mb-2">
              © 2025 IDEAL Engenharia e Assessoria. Todos os direitos reservados.
            </p>
            <a
              href="https://www.idealsst.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF5722] hover:text-white transition-colors"
            >
              www.idealsst.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
