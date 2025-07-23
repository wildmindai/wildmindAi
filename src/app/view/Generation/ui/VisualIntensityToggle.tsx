'use client';
import React, { useState } from 'react';

type Props = {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  initial?: number;
};

const VisualIntensityToggle: React.FC<Props> = ({
  label = 'Visual intensity',
  min = 0,
  max = 10,
  step = 0.1,
  initial = 1.0,
}) => {
  const [enabled, setEnabled] = useState(false);
  const [value, setValue] = useState<number>(initial);

  const increase = () => {
    setValue((prev) => Math.min(prev + step, max));
  };

  const decrease = () => {
    setValue((prev) => Math.max(prev - step, min));
  };

  return (
    <div className="w-full text-white space-y-3">
      {/* Top Label & Toggle */}
      <div className="flex items-center justify-between  pt-4 ml-6 mr-10">
        <span className="font-normal text-lg ml-2">{label}</span>
        <div
          onClick={() => setEnabled(!enabled)}
          className={`w-[42px] h-[24px] flex items-center px-1 rounded-full cursor-pointer transition-all duration-200 
            ${enabled ? 'bg-white' : 'bg-white/30'}`}
        >
          <div
            className={`w-[16px] h-[16px] rounded-full bg-black transition-transform duration-200 
              ${enabled ? 'translate-x-[18px]' : 'translate-x-0'}`}
          />
        </div>
      </div>

      {/* Value Control */}
      {enabled && (
        <div className="flex items-center justify-between bg-[#1a1a1a] px-5 py-2 rounded-md text-white font-semibold m-10">
          <button onClick={decrease} className="text-xl hover:opacity-80">−</button>
          <span>{value.toFixed(1)}</span>
          <button onClick={increase} className="text-xl hover:opacity-80">+</button>
        </div>
      )}
    </div>
  );
};

export default VisualIntensityToggle;