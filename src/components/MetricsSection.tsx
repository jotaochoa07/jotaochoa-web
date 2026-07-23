import React from 'react';
import { FadeIn } from './FadeIn';
import { useLanguage } from '../context/LanguageContext';

export const MetricsSection: React.FC = () => {
  const { t } = useLanguage();

  const metrics = [
    {
      number: '20+',
      label: t.metrics.m1Label,
      subtext: t.metrics.m1Sub,
    },
    {
      number: '20+',
      label: t.metrics.m2Label,
      subtext: t.metrics.m2Sub,
    },
    {
      number: '3',
      label: t.metrics.m3Label,
      subtext: t.metrics.m3Sub,
    },
    {
      number: '1',
      label: t.metrics.m4Label,
      subtext: t.metrics.m4Sub,
    },
  ];

  return (
    <section id="metrics" className="relative w-full bg-[#000000] text-white py-14 sm:py-20 border-y border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {metrics.map((metric, idx) => (
            <FadeIn key={metric.label} delay={idx * 0.1} y={20}>
              <div className="flex flex-col items-center text-center">
                <span className="font-['Kanit'] font-black text-5xl sm:text-6xl md:text-7xl bg-gradient-to-b from-white via-[#D7E2EA] to-[#01C9C7] bg-clip-text text-transparent">
                  {metric.number}
                </span>
                <h3 className="font-['Montserrat'] font-extrabold text-sm sm:text-base text-white mt-2 mb-1 uppercase tracking-wider">
                  {metric.label}
                </h3>
                <p className="text-xs text-[#D7E2EA]/60 font-light">
                  {metric.subtext}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
