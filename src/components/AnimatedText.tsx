import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={`flex flex-wrap justify-center gap-x-2 gap-y-1 ${className}`}>
      {words.map((word, wordIdx) => {
        const start = wordIdx / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={wordIdx} word={word} progress={scrollYProgress} range={[start, end]} />
        );
      })}
    </p>
  );
};

interface WordProps {
  word: string;
  progress: any;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="transition-opacity duration-150">
      {word}
    </motion.span>
  );
};
