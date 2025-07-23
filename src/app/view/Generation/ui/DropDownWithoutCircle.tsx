'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Props = {
  title: string;
  palettes: string[];
  selected: string;
  onSelect: (style: string) => void;
};

const DropDownWithoutCircle: React.FC<Props> = ({ title, palettes, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(true); // set to true by default

  return (
    <div className="w-full max-w-sm mx-auto text-white relative">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer px-4 py-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-normal">{title}</h2>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Image src="/icons/down.svg" width={30} height={30} alt="Toggle" />
        </motion.span>
      </div>

      {/* Animated Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="origin-top overflow-hidden flex flex-col gap-2"
          >
            {palettes.map((style, index) => (
              <div
                key={index}
                onClick={() => {
                  onSelect(style);
                  setIsOpen(false); // auto-close dropdown
                }}
                className={`group w-full px-4 py-3 rounded-lg cursor-pointer transition-colors flex items-center
                  ${selected === style
                    ? 'bg-[#1c1c1c] border border-violet-500'
                    : 'bg-[#1a1a1a] border border-transparent hover:bg-[#2a2a2a]'}`}
              >
                <span className="transition-transform duration-200 group-hover:translate-x-1">{style}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDownWithoutCircle;