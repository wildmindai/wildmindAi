'use client';
import React from 'react';

type RatioOption = {
  id: string;
  label: string;       // e.g. "1:1"
  image?: string;      // path to image for the box
};

type Props = {
  title: string;
  options: RatioOption[];
  onSelect: (id: string) => void;
  selectedId?: string;
};

const AspectRatioSelector: React.FC<Props> = ({ title, options, onSelect, selectedId }) => {
  return (
    <div className="flex flex-col gap-3 mt-4">
      <h2 className="text-white text-lg font-semibold ml-10">{title}</h2>
      <div className="flex gap-4 flex-wrap justify-center items-center">
        {options.map((option) => {
          const isSelected = selectedId === option.id;
          return (
            <div
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={`w-[80px] h-[80px] flex flex-col justify-between items-center px-3 py-2 rounded-lg cursor-pointer 
                transition-all border text-center  
                ${isSelected ? 'border-violet-500 bg-[#1c1c1c]' : 'border-[#2b2b2b] bg-[#111111]'}`}
            >
              <div
                className="w-10 h-12 bg-center bg-contain bg-no-repeat"
                style={{
                  backgroundImage: option.image ? `url(${option.image})` : undefined,
                }}
              />
              <span className="text-white text-sm pt-1">{option.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AspectRatioSelector;