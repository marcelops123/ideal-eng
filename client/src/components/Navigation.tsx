/**
 * Navigation Component
 * Design: Header sofisticado com transparência e linha decorativa
 * - Fundo transparente → sólido no scroll
 * - Linha sutil laranja com gradiente fade nas pontas
 * - Animações suaves
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "Quem Somos", href: "#quem-somos", id: "1" },
  { label: "Diretoria", href: "#contato-diretoria", id: "2" },
  { label: "Cobertura", href: "#estados", id: "3" },
  { label: "Serviços", href: "#servicos", id: "4" },
  { label: "Terceirização", href: "#terceirizacao", id: "5" },
  { label: "Ideal pelo Brasil", href: "#ideal-pelo-brasil", id: "6" },
  { label: "Parceiros", href: "#parceiros", id: "7" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--bg-primary)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img
            src="/images/logo.png"
            alt="IDEAL Engenharia"
            className="h-8 sm:h-10 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => handleNavClick(item.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                activeSection === item.id
                  ? "text-[var(--accent-primary)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]/50"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent-primary)]" />
              )}
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="https://wa.me/5538999029541?text=Olá! Gostaria de mais informações."
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2.5 text-sm font-semibold text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-glow)]"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2.5 hover:bg-[var(--bg-elevated)] rounded-lg transition-colors border border-transparent hover:border-[var(--border-subtle)]"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-[var(--text-primary)]" />
          ) : (
            <Menu className="w-5 h-5 text-[var(--text-primary)]" />
          )}
        </button>
      </div>

      {/* Linha decorativa com gradiente */}
      <div
        className={`h-px w-full transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--accent-primary) 20%, var(--accent-primary) 80%, transparent 100%)",
        }}
      />

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-[var(--accent-primary)] bg-[var(--accent-glow)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href="https://wa.me/5538999029541?text=Olá! Gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 px-4 py-3 text-sm font-semibold text-center text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] rounded-lg transition-all duration-300"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
