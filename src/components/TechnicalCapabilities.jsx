import { memo, useRef, useState, useEffect } from 'react';
import { Gsap, useGsapInView } from '../utils/gsapAnimate';
import { Target, BarChart2, Cpu, Users, Boxes, Compass, Handshake } from 'lucide-react';

const CAPABILITIES = [
  { title: 'Product Strategy', icon: Target },
  { title: 'Business Development', icon: BarChart2 },
  { title: 'Technology & Execution', icon: Cpu },
  { title: 'Leadership', icon: Compass },
  { title: 'Product Development', icon: Boxes },
  { title: 'Business Strategy', icon: Handshake },
  { title: 'Team Building', icon: Users },
];

const TechnicalCapabilities = memo(function TechnicalCapabilities() {
  const gridRef = useRef(null);
  const isInView = useGsapInView(gridRef, { once: true, amount: 0.15 });
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (isInView) {
      let currentIndex = 0;
      // 700ms sequential cascade lighting up the boxes for a smooth reveal
      const interval = setInterval(() => {
        setActiveIndex(currentIndex);
        currentIndex++;

        // Clear when it reaches past the ghost cell
        if (currentIndex > CAPABILITIES.length) {
          setTimeout(() => setActiveIndex(-1), 700);
          clearInterval(interval);
        }
      }, 700);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section id="capabilities-section" className="pt-24 pb-32 w-full relative bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Big Title Area - CENTERED */}
        <div className="mb-20 md:mb-28 flex flex-col items-center text-center max-w-4xl mx-auto">
          <Gsap.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2rem,10.5vw,3rem)] sm:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] text-black"
          >
            Skills <br />
            <span className="text-black/20">and Capabilities.</span>
          </Gsap.h2>
        </div>

        {/* ARCHITECTURAL MATRIX GRID - SOLID BLACK BORDERS */}
        <Gsap.div
          ref={gridRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-l-2 border-t-2 border-black group/grid bg-[#FAF9F6]"
        >
          {CAPABILITIES.map((cap, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={i}
                className={`group/cell relative border-r-2 border-b-2 border-black p-4 sm:p-5 md:p-8 lg:p-10 min-h-[180px] md:min-h-[300px] lg:min-h-[340px] flex flex-col justify-between overflow-hidden transition-colors duration-500 hover:bg-[#0A0A0A] ${isActive ? '!bg-[#0A0A0A]' : ''}`}
              >
                {/* Number & Icon Row */}
                <div className="flex justify-between items-start relative z-10">
                  <span className={`font-mono text-xs md:text-sm font-bold text-black group-hover/cell:text-lime-400 transition-colors duration-500 tracking-[0.12em] md:tracking-[0.16em] ${isActive ? '!text-lime-400' : ''}`}>
                    0{i + 1}
                  </span>
                  <cap.icon className={`w-5 h-5 md:w-8 md:h-8 text-black group-hover/cell:text-lime-400 transition-colors duration-500 ${isActive ? '!text-lime-400' : ''}`} strokeWidth={2} />
                </div>

                {/* Center massive number watermark — hidden on mobile */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block text-[10rem] md:text-[14rem] font-black tracking-tighter text-transparent [-webkit-text-stroke:2px_black] group-hover/cell:opacity-0 pointer-events-none transition-all duration-500 z-0 ${isActive ? '!opacity-0' : ''}`}>
                  {i + 1}
                </div>

                {/* Title Row */}
                <div className="relative z-10 mt-auto">
                  <h3 className={`text-[15px] sm:text-base md:text-2xl lg:text-3xl font-black uppercase text-black tracking-tight leading-[1.1] mb-1 md:mb-2 break-words hyphens-none group-hover/cell:text-lime-400 transition-colors duration-500 ${isActive ? '!text-lime-400' : ''}`}>
                    {cap.title}
                  </h3>
                </div>
              </div>
            );
          })}

          {/* Ghost Cell for layout balance on 4-col XL screens */}
          {(() => {
            const isGhostActive = activeIndex === CAPABILITIES.length;
            return (
              <div className={`flex border-r-2 border-b-2 border-black p-4 sm:p-5 md:p-8 lg:p-10 min-h-[180px] md:min-h-[300px] lg:min-h-[340px] bg-transparent flex-col justify-center items-center text-center group/ghost hover:bg-[#0A0A0A] transition-colors duration-500 ${isGhostActive ? '!bg-[#0A0A0A]' : ''}`}>
                <div className={`w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-black group-hover/ghost:border-lime-400 flex items-center justify-center mb-4 md:mb-6 animate-[spin_10s_linear_infinite] group-hover/ghost:animate-[spin_3s_linear_infinite] transition-all duration-500 ${isGhostActive ? '!border-lime-400 !animate-[spin_3s_linear_infinite]' : ''}`}>
                  <div className={`w-1.5 h-1.5 md:w-2 md:h-2 bg-black group-hover/ghost:bg-lime-400 rounded-full transition-colors duration-500 ${isGhostActive ? '!bg-lime-400' : ''}`} />
                </div>
                <span className={`font-mono text-[11.5px] tracking-[0.06em] sm:text-[13px] sm:tracking-[0.14em] md:tracking-[0.16em] uppercase text-black font-bold group-hover/ghost:text-lime-400 transition-colors duration-500 ${isGhostActive ? '!text-lime-400' : ''}`}>
                  Continuously<br />Evolving
                </span>
              </div>
            );
          })()}
        </Gsap.div>

      </div>
    </section>
  );
});

export default TechnicalCapabilities;
