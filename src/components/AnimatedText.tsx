import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  const paragraphs = text.split('\n\n').filter(Boolean);
  const totalWords = text.split(/\s+/).filter(Boolean).length;
  let wordCounter = 0;

  return (
    <div ref={containerRef} className={`flex flex-col gap-6 sm:gap-8 ${className}`}>
      {paragraphs.map((para, paraIdx) => {
        const words = para.split(/\s+/).filter(Boolean);
        return (
          <p key={paraIdx} className="flex flex-wrap justify-center gap-x-2.5 gap-y-1.5">
            {words.map((word) => {
              const start = wordCounter / totalWords;
              const end = start + 1 / totalWords;
              wordCounter++;
              return (
                <Word key={wordCounter} word={word} progress={scrollYProgress} range={[start, end]} />
              );
            })}
          </p>
        );
      })}
    </div>
  );
};

interface WordProps {
  word: string;
  progress: any;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);

  return (
    <motion.span style={{ opacity }} className="transition-opacity duration-150 text-[#D7E2EA]">
      {word}
    </motion.span>
  );
};
