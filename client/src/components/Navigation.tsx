/**
 * Navigation Component
 * Design: Minimalismo Corporativo Geométrico
 * - Menu horizontal fixo no topo
 * - Logo IDEAL à esquerda
 * - Links de navegação para as 11 seções
 * - Animações suaves ao hover
 * - Fundo escuro com borda laranja na base
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "Quem Somos", href: "#quem-somos", id: "1" },
  { label: "Contato Diretoria", href: "#contato-diretoria", id: "2" },
  { label: "Estados", href: "#estados", id: "3" },
  { label: "Serviços", href: "#servicos", id: "4" },
  { label: "Parceiros", href: "#parceiros", id: "5" },
  { label: "Espaço Confinado", href: "#espaco-confinado", id: "6" }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-sm flex items-center justify-center">
            <img
              src="/images/logo-ideal-eng.png"
              alt="Imagem institucional"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-white font-bold text-lg">IDEAL</h1>
            <p className="text-[#b0b0b0] text-xs">ENGENHARIA + ASSESSORIA</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => handleNavClick(item.id)}
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-[#FF5722] ${activeSection === item.id
                  ? "text-[#FF5722] border-b-2 border-[#FF5722]"
                  : "text-[#e0e0e0]"
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 hover:bg-[#1a1a1a] rounded transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#1a1a1a] border-t border-[#2a2a2a]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${activeSection === item.id
                    ? "text-[#FF5722] bg-[#2a2a2a] rounded"
                    : "text-[#e0e0e0] hover:text-[#FF5722]"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
