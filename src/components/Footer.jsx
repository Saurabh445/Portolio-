import { memo } from 'react';
import { Gsap } from '../utils/gsapAnimate';

const Footer = memo(function Footer() {
  return (
    <footer id="contact-section" className="bg-[#0A0A0A] text-white pt-20 md:pt-24 pb-safe-12 w-full relative overflow-hidden">
      {/* Subtle Matrix BG */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 relative z-10 flex flex-col justify-between min-h-[50vh]">

        {/* ── SECTION HEADER ── */}
        <Gsap.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 md:mb-24"
        >
          <div className="w-2 h-2 bg-lime-400 rounded-[2px] animate-pulse" />
          <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] md:tracking-[0.26em] text-white/40">
            {'// INITIALIZE_CONTACT'}
          </span>
          <div className="flex-1 h-[1px] bg-white/10" />
        </Gsap.div>

        {/* Main Grid Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 md:gap-16 lg:gap-8 mb-20 md:mb-24">

          {/* Left: Huge Name */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.95] sm:leading-[0.9] text-white mb-6">
                LET'S <br />
                <span className="text-lime-400 transform inline-block italic pr-4">CONNECT.</span>
              </h2>
            </div>
          </div>

          {/* Right: Contact Details */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 lg:gap-x-12">
            {[
              { label: 'Email', value: 'saurabhsinghania2003@gmail.com', href: 'mailto:saurabhsinghania2003@gmail.com' },
              { label: 'Phone', value: '8869800183', href: 'tel:8869800183' },
              { label: 'Company Email', value: 'contact@beckkon.com', href: 'mailto:contact@beckkon.com' },
              { label: 'Website', value: 'beckkon.com', href: 'https://beckkon.com', external: true },
              { label: 'LinkedIn', value: 'https://www.linkedin.com/in/saurabh-kumar-518893408/', href: 'https://www.linkedin.com/in/saurabh-kumar-518893408/', external: true },
              { label: 'Instagram', value: 'https://www.instagram.com/_saurabh____k_?stkn=ZnUzN2g3cjZ0MWF5&utm_source=qr', href: 'https://www.instagram.com/_saurabh____k_?stkn=ZnUzN2g3cjZ0MWF5&utm_source=qr', external: true }
            ].map((item) => (
              <div key={item.label} className="min-w-0">
                <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.18em] md:tracking-[0.24em]">
                  {item.label}
                </span>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="mt-3 block font-mono text-xs md:text-sm font-bold text-white/65 hover:text-lime-400 transition-colors break-words"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
});

export default Footer;
