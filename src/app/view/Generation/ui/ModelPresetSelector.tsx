'use client';
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Model = {
  id: string;
  name: string;
  image: string;
};

type Props = {
  models: Model[];
  onSelect: (model: Model) => void;
};

const ModelPresetSelector: React.FC<Props> = ({ models, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Optional: Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-sm mx-auto relative">
      {/* Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black text-teal-300 text-lg font-semibold border border-gray-600 px-10 py-6 rounded-lg cursor-pointer flex justify-between items-center"
      >
        <span>Model & Preset</span>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <Image src="/icons/down.svg" width={30} height={30} alt="Toggle" />
        </span>
      </div>

      {/* Dropdown Animated */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="origin-top overflow-hidden"
          >
            <div className="mt-2 flex flex-col gap-4 p-2 rounded-lg shadow-xl ">
              {models.map((model) => (
                <div
                  key={model.id}
                  onClick={() => {
                    onSelect(model);
                    setIsOpen(false);
                  }}
                  className="bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors p-3 rounded-lg flex items-center gap-4 cursor-pointer"
                >
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-12 h-12 rounded-md object-cover"
                  />
                  <span className="text-white text-sm">{model.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModelPresetSelector;