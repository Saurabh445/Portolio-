import { memo, useRef, useState, useEffect } from 'react';
import { Gsap, useGsapReducedMotion, useGsapScroll, useGsapTransform } from '../utils/gsapAnimate';
import { Terminal, Code2, Database, Cpu, Download } from 'lucide-react';

// === DECORATIVE ORBITING ELEMENTS (Left & Right) ===
const OrbitingDecoration = ({ icon: Icon, delay, className, isRevealed, enableAmbientMotion }) => (
  <Gsap.div
    initial={false}
    animate={
      isRevealed
        ? { opacity: 1, y: 0, scale: 1 }
        : { opacity: 0, y: 12, scale: 0.9 }
    }
    transition={{
      opacity: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
      y: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
      scale: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    }}
    className={`absolute flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-lime-500/20 bg-white/60 backdrop-blur-lg shadow-[0_10px_30px_rgba(132,204,22,0.12)] ${className}`}
    style={enableAmbientMotion && isRevealed ? {
      animation: `hero-float 5.8s ${delay + 0.35}s ease-in-out infinite`,
      willChange: 'transform',
    } : undefined}
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lime-300/25 to-transparent" />
    <Icon size={18} className="relative text-black/65" />
  </Gsap.div>
);

// === MAIN COMPONENT ===
const HeroSection = memo(function HeroSection({ isRevealed = true }) {
  const containerRef = useRef(null);
  const reduceMotion = useGsapReducedMotion();
  const [enableParallax, setEnableParallax] = useState(false);
  const [enableAmbientMotion, setEnableAmbientMotion] = useState(false);

  const { scrollYProgress } = useGsapScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle scroll parallax
  const bgY = useGsapTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useGsapTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  // The portrait is a tall, narrow element, so it needs a gentler drift than
  // the text stack or it would appear to slide out from under the layout.
  const portraitY = useGsapTransform(scrollYProgress, [0, 1], ['0%', '7%']);

  useEffect(() => {
    if (typeof window === 'undefined' || reduceMotion) {
      setEnableParallax(false);
      setEnableAmbientMotion(false);
      return;
    }

    const parallaxMedia = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)');
    const updateParallax = () => {
      setEnableParallax(parallaxMedia.matches);
      setEnableAmbientMotion(parallaxMedia.matches);
    };

    updateParallax();

    if (parallaxMedia.addEventListener) {
      parallaxMedia.addEventListener('change', updateParallax);
    } else {
      parallaxMedia.addListener(updateParallax);
    }

    return () => {
      if (parallaxMedia.removeEventListener) {
        parallaxMedia.removeEventListener('change', updateParallax);
      } else {
        parallaxMedia.removeListener(updateParallax);
      }
    };
  }, [reduceMotion]);

  return (
    <header
      ref={containerRef}
      id="hero-section"
      className="min-h-screen min-h-[100svh] w-full relative bg-[#FAF9F6] selection:bg-lime-300 selection:text-black overflow-hidden flex flex-col items-center justify-center pt-16 pb-16"
    >
      {/* ── BACKGROUND ENGINEERING Grid & Dynamic Glow ── */}
      <Gsap.div
        initial={false}
        animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={enableParallax ? { y: bgY } : undefined}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center"
      >

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(163,230,53,0.12),transparent_48%),linear-gradient(to_bottom,rgba(163,230,53,0.04),transparent_48%)]" />

        {/* 1. Base Moving Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            ...(enableAmbientMotion && isRevealed ? { animation: 'hero-grid-scroll 14s linear infinite', willChange: 'transform' } : {}),
          }}
        />

        {/* 2. Plus/Cross Pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M40 38v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z' fill='%23000000' fill-opacity='1' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundPosition: 'center center'
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 18% 18%, rgba(163, 230, 53, 0.14), transparent 44%), radial-gradient(circle at 82% 15%, rgba(132, 204, 22, 0.1), transparent 42%), radial-gradient(circle at 50% 85%, rgba(190, 242, 100, 0.09), transparent 50%), linear-gradient(135deg, rgba(163, 230, 53, 0.02), rgba(234, 179, 8, 0.01))'
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[920px] max-h-[920px] rounded-full border border-lime-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72vw] h-[72vw] max-w-[720px] max-h-[720px] rounded-full border border-lime-500/10" />

        {/* 3. Dynamic Organic Glowing Orbs — CSS animations for zero JS overhead
            These use radial-gradient falloff instead of filter: blur(). A blurred
            solid circle is just a soft radial falloff, and dropping the filter lets
            the scale/translate loops run purely on the compositor. With blur() on
            the same element the browser re-rendered the 130px blur every frame. */}
        <div
          className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] opacity-[0.1]"
          style={{
            backgroundImage: 'radial-gradient(circle, #bef264 0%, #bef264 30%, rgba(190,242,100,0.62) 55%, rgba(190,242,100,0.28) 74%, rgba(190,242,100,0.08) 88%, rgba(190,242,100,0) 100%)',
            ...(enableAmbientMotion && isRevealed ? {
              animation: 'hero-orb-1 10s ease-in-out infinite',
              willChange: 'transform',
            } : { transform: 'translate3d(-50%, -50%, 0)' }),
          }}
        />
        <div
          className="absolute top-1/4 right-[20%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #a3e635 0%, #a3e635 30%, rgba(163,230,53,0.62) 55%, rgba(163,230,53,0.28) 74%, rgba(163,230,53,0.08) 88%, rgba(163,230,53,0) 100%)',
            ...(enableAmbientMotion && isRevealed ? {
              animation: 'hero-orb-2 12s 2s ease-in-out infinite',
              willChange: 'transform',
            } : {}),
          }}
        />
        <div
          className="absolute bottom-[10%] left-[20%] w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(circle, #d9f99d 0%, #d9f99d 30%, rgba(217,249,157,0.62) 55%, rgba(217,249,157,0.28) 74%, rgba(217,249,157,0.08) 88%, rgba(217,249,157,0) 100%)',
            ...(enableAmbientMotion && isRevealed ? {
              animation: 'hero-orb-3 15s 1s ease-in-out infinite',
              willChange: 'transform',
            } : {}),
          }}
        />

        {/* 4. Radial Vignette to blend gracefully with section edges */}
        <div className="absolute inset-0 bg-[#FAF9F6] [mask-image:radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-75" />

        {/* Soft bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FAF9F6] to-transparent pointer-events-none" />
      </Gsap.div>

      {/* ── PORTRAIT ──
          Transparent source cutout keeps the subject sharp and lets the hero
          background remain visible around the natural silhouette. */}
      <Gsap.div
        initial={false}
        animate={isRevealed && !reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute bottom-0 right-[2vw] z-[5] hidden 2xl:block"
      >
        <Gsap.div style={enableParallax ? { y: portraitY } : undefined}>
          <img
            src="/portrait.png"
            alt="Saurabh Kumar"
            width={1276}
            height={1233}
            loading="eager"
            decoding="async"
            draggable={false}
            className="block w-[min(45vw,82svh)] h-auto object-contain object-bottom select-none"
          />
        </Gsap.div>
      </Gsap.div>

      {/* ── MAIN CONTENT ──
          Centred below 1536px. At 2xl+ the .hero-split class left-aligns the
          stack and stretches it toward the portrait (see index.css). */}
      {/* Parallax wrapper (scroll-driven y only) */}
      <Gsap.div
        style={enableParallax ? { y: contentY } : undefined}
        className="hero-split relative z-10 w-full max-w-[1200px] px-5 sm:px-6 md:px-12 flex flex-col items-center text-center mt-8"
      >
        {/* Iris reveal + entrance wrapper */}
        <Gsap.div
          initial={false}
          animate={isRevealed
            ? { opacity: 1, y: 0, filter: 'blur(0px)', clipPath: 'circle(150% at 50% 100%)' }
            : { opacity: 0, y: 14, filter: 'blur(3px)', clipPath: 'circle(0% at 50% 100%)' }
          }
          transition={{
            clipPath: { duration: 1.25, ease: [0.2, 0.95, 0.3, 1] },
            opacity: { duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 1.0, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
            filter: { duration: 0.8, delay: 0.1 },
          }}
          className="w-full flex flex-col items-center hero-left"
        >

        {/* 2. Massive Clear Typography */}
        <div className="flex flex-col items-center justify-center relative w-full mb-4 md:mb-5 hero-left">
          {/* Left Decoration — hidden at 2xl+, where the text is left-aligned
              against the viewport edge and there is no margin left to sit in.
              Also hidden below sm: the name spans nearly the full phone width
              there, so a 40px disc at left-0 would sit on top of the "S". */}
          <OrbitingDecoration icon={Code2} delay={0.15} className="left-0 sm:left-2 lg:left-16 top-2 max-sm:hidden 2xl:hidden" isRevealed={isRevealed} enableAmbientMotion={enableAmbientMotion} />
          <OrbitingDecoration icon={Terminal} delay={0.45} className="left-6 sm:left-12 lg:left-28 bottom-8 hidden sm:flex 2xl:hidden" isRevealed={isRevealed} enableAmbientMotion={enableAmbientMotion} />

          <Gsap.h1
            initial={false}
            animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            /* Below sm the 4.25rem floor made "SAURABH" wider than a 320px
               viewport, so the word overflowed the screen. The phone size is
               viewport-relative and only applies under sm — from sm up the
               original clamp (and therefore the desktop lockup) is unchanged. */
            className="text-[clamp(2.5rem,17vw,9rem)] sm:text-[clamp(4.25rem,14vw,9rem)] font-black uppercase tracking-tight text-black leading-[0.88]"
          >
            SAURABH
          </Gsap.h1>

          <Gsap.h1
            initial={false}
            animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.5rem,17vw,9rem)] sm:text-[clamp(4.25rem,14vw,9rem)] font-black uppercase tracking-tight text-transparent leading-[0.88] mt-2 sm:mt-0 font-outline-fallback"
          >
            KUMAR
          </Gsap.h1>

          {/* Right Decoration — hidden at 2xl+, where the portrait takes this column,
              and below sm, where the name fills the width */}
          <OrbitingDecoration icon={Database} delay={0.28} className="right-0 sm:right-2 lg:right-16 top-10 max-sm:hidden 2xl:hidden" isRevealed={isRevealed} enableAmbientMotion={enableAmbientMotion} />
          <OrbitingDecoration icon={Cpu} delay={0.58} className="right-6 sm:right-12 lg:right-28 -bottom-2 hidden sm:flex 2xl:hidden" isRevealed={isRevealed} enableAmbientMotion={enableAmbientMotion} />
        </div>

        {/* 3. Clean Slogan with Green Accent */}
        <Gsap.div
          initial={false}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.38, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-2 mt-0 hero-left"
        >
          <h2 className="text-[clamp(1.35rem,4.2vw,2.25rem)] font-bold text-black/80 tracking-tight flex items-center justify-center flex-wrap gap-2 px-2 hero-left">
            Building <span className="bg-lime-400/30 px-2 rounded-md ring-1 ring-lime-500/20">Products</span> Teams &amp; Technology for Real-World Impact<span className="text-lime-500 font-extrabold -ml-1">.</span>
          </h2>
        </Gsap.div>

        {/* 4. CTA Buttons */}
        <Gsap.div
          initial={false}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ delay: 0.5, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mt-5 hero-left"
        >
          <a
            href="/Saurabh_Kumar_Resume.pdf"
            download
            className="group flex items-center gap-2 bg-black text-white px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-wider hover:bg-lime-400 hover:text-black transition-all duration-300"
          >
            Download CV <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </Gsap.div>



        </Gsap.div>

      </Gsap.div>
    </header>
  );
});

export default HeroSection;
