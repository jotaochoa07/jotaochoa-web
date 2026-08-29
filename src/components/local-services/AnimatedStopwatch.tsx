import { useEffect, useState } from 'react';
import { Clock3 } from 'lucide-react';

const sequence = [12, 24, 36, 48];

export const AnimatedStopwatch = () => {
  const [value, setValue] = useState(48);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let step = 0;
    setValue(sequence[step]);
    const timer = window.setInterval(() => {
      step += 1;
      setValue(sequence[Math.min(step, sequence.length - 1)]);
      if (step >= sequence.length - 1) window.clearInterval(timer);
    }, 380);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="ls-stopwatch-wrap" aria-label="Tu negocio en Internet en hasta 48 horas">
      <div className="ls-stopwatch-crown" aria-hidden="true" />
      <div className="ls-stopwatch-button" aria-hidden="true" />
      <div className="ls-stopwatch">
        <div className="ls-stopwatch-face">
          <Clock3 size={28} className="mb-2 text-[#f4e900]" aria-hidden="true" />
          <strong key={value} className="ls-stopwatch-number">{value}</strong>
          <span className="ls-stopwatch-hours">horas</span>
          <span className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-white/55">Tu negocio en Internet</span>
        </div>
      </div>
      <p className="mt-5 max-w-sm text-center text-sm font-semibold text-white/65">El plazo comienza cuando recibimos el pago y todo el material necesario.</p>
    </div>
  );
};
