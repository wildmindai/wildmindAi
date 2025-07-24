'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Props = {
  title: string;
  colors: string[];
  selected: string;
  onSelect: (color: string) => void;
  includeCustomInput?: boolean;
  customPlaceholder?: string; // Add custom placeholder prop
};

const DropDownWithCircle: React.FC<Props> = ({
  title,
  colors,
  selected,
  onSelect,
  includeCustomInput = false,
  customPlaceholder = "Enter Color Name", // Default placeholder
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customColor, setCustomColor] = useState('');

  const handleCustomSubmit = () => {
    if (customColor.trim() !== '') {
      onSelect(customColor.trim());
      setIsOpen(false);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto text-white relative">
      {/* Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer px-4 py-3 text-lg font-normal"
      >
        <span>{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Image src="/icons/down.svg" width={30} height={30} alt="Toggle" />
        </motion.span>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="origin-top mt-3 flex flex-col gap-3 overflow-hidden"
          >
            {colors.map((color, index) => (
              <div
              key={index}
              onClick={() => {
                onSelect(color);
                setIsOpen(false);
              }}
              className={`group w-full px-5 py-3 rounded-lg cursor-pointer transition-all flex justify-between items-center
                ${selected === color
                  ? 'bg-[#1c1c1c] border border-violet-500'
                  : 'bg-[#1a1a1a] border border-transparent hover:bg-[#2a2a2a]'}`}
            >
              <span className="transition-transform duration-200 group-hover:translate-x-1">{color}</span>
              <span
                className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                  selected === color ? 'border-violet-500 bg-violet-500' : 'border-violet-500'
                }`}
              />
            </div>
            ))}

            {includeCustomInput && (
              <div className="w-full px-5 py-3 rounded-lg bg-[#1a1a1a]">
                <input
                  type="text"
                  placeholder={customPlaceholder}
                  value={customColor}
                  onChange={(e) => setCustomColor(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleCustomSubmit();
                  }}
                  className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDownWithCircle;
