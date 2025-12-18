import { motion } from "framer-motion";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const HERO_IMAGES = [
  "/images/hero-banner.jpg",   
  "/images/innovation-tech.jpg",
  "/images/team-section.jpg",
  "/images/services-abstract.jpg",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#050505]"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={1}
          className="h-full w-full"
        >
          {HERO_IMAGES.map((src) => (
            <SwiperSlide key={src}>
              <div className="relative h-full w-full">
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover"
                  draggable={false}
                />
                {/* Overlay para manter legibilidade do conteúdo */}
                <div className="absolute inset-0 bg-black/55" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Vinheta sutil (opcional, mas deixa mais “premium”) */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_45%,transparent_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.7)_100%)]" />
      </div>

      {/* IDEAL fantasma vertical à direita */}


      {/* Conteúdo central com fade-in */}
      <motion.div
        className="relative z-10 flex min-h-screen items-center justify-center"
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, ease: "easeOut" }}
      >
        <div className="w-full max-w-7xl px-6">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
            {/* Logo */}
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

            {/* Texto */}
            <div className="flex items-center gap-5 sm:gap-7">
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

              <div className="w-px bg-[var(--ideal-orange)] opacity-90 h-12 sm:h-14 md:h-16 lg:h-20" />

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

          <div className="h-20 md:h-28" />
        </div>
      </motion.div>
    </section>
  );
}
  