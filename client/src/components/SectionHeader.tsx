/**
 * SectionHeader Component
 * Design: Minimalismo Corporativo Geométrico
 * - Número da seção em laranja
 * - Título em preto com fundo branco
 * - Linha divisória laranja
 */

interface SectionHeaderProps {
  number: string;
  title: string;
}

export default function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-12">
      {/* Orange Number Box */}
      <div className="flex-shrink-0 w-16 h-16 bg-[#FF5722] rounded-sm flex items-center justify-center">
        <span className="text-white font-bold text-2xl">{number}</span>
      </div>

      {/* Title Bar */}
      <div className="flex-1 bg-black border-l-4 border-[#FF5722] pl-6 py-4">
        <h2 className="text-4xl font-bold text-white uppercase tracking-wide">
          {title}
        </h2>
      </div>
    </div>
  );
}
