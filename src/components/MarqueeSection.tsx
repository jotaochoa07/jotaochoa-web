import React, { useState, useEffect, useRef } from 'react';

const GIF_URLS = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

export const MarqueeSection: React.FC = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const offset = (window.innerHeight - rect.top) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1Images = [...GIF_URLS.slice(0, 11), ...GIF_URLS.slice(0, 11), ...GIF_URLS.slice(0, 11)];
  const row2Images = [...GIF_URLS.slice(11), ...GIF_URLS.slice(11), ...GIF_URLS.slice(11)];

  return (
    <section ref={sectionRef} className="bg-[#000000] pt-24 sm:pt-32 md:pt-40 pb-16 overflow-hidden">
      <div className="flex flex-col gap-4">
        {/* Row 1 - Moves Right */}
        <div
          className="flex gap-4 transition-transform duration-75 ease-out"
          style={{
            transform: `translateX(${scrollOffset - 600}px)`,
            willChange: 'transform',
          }}
        >
          {row1Images.map((src, index) => (
            <div
              key={`r1-${index}`}
              className="flex-shrink-0 w-[320px] sm:w-[380px] md:w-[420px] h-[200px] sm:h-[240px] md:h-[270px] rounded-2xl overflow-hidden border border-white/10 shadow-xl group"
            >
              <img
                src={src}
                alt="Agent Demo Preview"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Row 2 - Moves Left */}
        <div
          className="flex gap-4 transition-transform duration-75 ease-out"
          style={{
            transform: `translateX(${-(scrollOffset - 300)}px)`,
            willChange: 'transform',
          }}
        >
          {row2Images.map((src, index) => (
            <div
              key={`r2-${index}`}
              className="flex-shrink-0 w-[320px] sm:w-[380px] md:w-[420px] h-[200px] sm:h-[240px] md:h-[270px] rounded-2xl overflow-hidden border border-white/10 shadow-xl group"
            >
              <img
                src={src}
                alt="Agent Demo Preview"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
