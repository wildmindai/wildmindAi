'use client';
import React from 'react';

type numberof = {
  id: string;
  label: string;       // e.g. "1:1"     // path to image for the box
};

type Props = {
  title: string;
  options: numberof[];
  onSelect: (id: string) => void;
  selectedId?: string;
};

const Numberof: React.FC<Props> = ({ title, options, onSelect, selectedId }) => {
  return (
    <div className="flex flex-col gap-3 mt-4 ">
      <h2 className="text-white text-lg font-semibold ml-10">{title}</h2>
      <div className="flex gap-4 flex-wrap justify-center items-center">
        {options.map((option) => {
          const isSelected = selectedId === option.id;
          return (
            <div
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={`w-[80px] h-[80px] flex flex-col justify-center items-center px-3 py-2 rounded-lg cursor-pointer 
                transition-all border 
                ${isSelected ? 'border-violet-500 bg-[#1c1c1c]' : 'border-[#2b2b2b] bg-[#111111]'}`}
            >
              <span className="flex text-white text-sm pt-1 items-center justify-center">{option.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Numberof;