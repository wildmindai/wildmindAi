'use client';
import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

type Props = {
  label: string;
  enabled: boolean;
  onToggle: (val: boolean) => void;
};

const ToggleSetting: React.FC<Props> = ({ label, enabled, onToggle }) => {
  return (
    <div className="flex items-center justify-between py-4 border-t border-[#2a2a2a] m-10 ">
      {/* Label and icon */}
      <div className="flex items-center gap-1">
        <span className="text-white font-medium text-lg font-semibold">{label}</span>
        <AiOutlineInfoCircle className="text-white text-xs mt-[1px]" />
      </div>

      {/* Custom Toggle */}
      <div
        onClick={() => onToggle(!enabled)}
        className={`w-[42px] h-[24px] flex items-center px-1 rounded-full cursor-pointer transition-all duration-200 
          ${enabled ? 'bg-white' : 'bg-white/30'}`}
      >
        <div
          className={`w-[16px] h-[16px] rounded-full bg-black transition-transform duration-200 
            ${enabled ? 'translate-x-[18px]' : 'translate-x-0'}`}
        />
      </div>
    </div>
  );
};

export default ToggleSetting;