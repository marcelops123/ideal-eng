/**
 * Hero (Capa) - Página 1 do PDF (refinado)
 * - Marca centralizada (horizontal e vertical)
 * - Tipografia maior e responsiva (mobile bonito)
 * - Glow laranja mais harmônico/suave
 * - “IDEAL” watermark horizontal abaixo do glow (como no PDF)
 * - “IDEAL” fantasma vertical à direita (discreto)
 */

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#050505]"
    >


      <div className="pointer-events-none absolute right-8 top-1/2 hidden lg:block -translate-y-1/2 select-none">
        <div className="[font-family:var(--font-title)] text-[190px] tracking-[0.12em] rotate-90 origin-center text-white opacity-[0.06]">
          IDEAL
        </div>
      </div>

      {/* Conteúdo central */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="w-full max-w-7xl px-6">
          {/* Wrapper centralizado */}
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
            {/* Logo (responsiva) */}
            <div className="shrink-0">
              <img
                src="/images/logo-ideal-eng.png"
                alt="IDEAL"
                className="
                  object-contain
                  w-[120px] h-[120px]
                  sm:w-[140px] sm:h-[140px]
                  md:w-[170px] md:h-[170px]
                  lg:w-[190px] lg:h-[190px]
                "
              />
            </div>

            {/* Texto (responsivo / central) */}
            <div className="flex items-center gap-5 sm:gap-7">
              {/* IDEAL */}
              <div
                className="
                  [font-family:var(--font-title)]
                  text-white uppercase leading-none
                  tracking-[0.18em] sm:tracking-[0.22em]
                  text-[42px] sm:text-[54px] md:text-[68px] lg:text-[78px]
                "
              >
                IDEAL
              </div>

              {/* Traço vertical laranja */}
              <div className="w-px bg-[var(--ideal-orange)] opacity-90 h-12 sm:h-14 md:h-16 lg:h-20" />

              {/* Engenharia / + Assessoria */}
              <div className="flex flex-col leading-none">
                <div
                  className="
                    [font-family:var(--font-title)]
                    uppercase tracking-[0.20em]
                    text-white
                    text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px]
                  "
                >
                  ENGENHARIA
                </div>

                <div className="mt-2 flex items-baseline gap-2">
                  <span
                    className="
                      [font-family:var(--font-title)]
                      text-[var(--ideal-orange)]
                      text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px]
                    "
                  >
                    +
                  </span>
                  <span
                    className="
                      [font-family:var(--font-title)]
                      uppercase tracking-[0.20em]
                      text-white
                      text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px]
                    "
                  >
                    ASSESSORIA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* respiro inferior, mas sem “CTA” */}
          <div className="h-20 md:h-28" />
        </div>
      </div>
    </section>
  );
}
