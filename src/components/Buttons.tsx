import React from 'react';

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = 'CONTACT ME',
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative group inline-flex items-center justify-center rounded-full btn-brand-gradient text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 ${className}`}
    >
      <span className="relative z-10 font-bold">{label}</span>
      <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
    </button>
  );
};

interface LiveProjectButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = 'LIVE PROJECT',
  href,
  onClick,
  className = '',
}) => {
  const content = (
    <span className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA]/40 text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm transition-all duration-300 hover:bg-[#01C9C7]/20 hover:border-[#01C9C7] hover:text-[#01C9C7]">
      {label}
    </span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-block ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`inline-block cursor-pointer ${className}`}>
      {content}
    </button>
  );
};
