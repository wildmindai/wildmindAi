'use client';
import React from 'react';
import { BsCoin } from 'react-icons/bs'; // You can replace this with your own icon if needed

type Props = {
  label?: string;
  tokens: number;
  onClick: () => void;
};

const SaveButton: React.FC<Props> = ({ label = 'Save', tokens, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-96 py-3 rounded-full bg-gradient-to-r from-[#6C47FF] to-[#8D4FFF] text-white font-semibold text-sm ml-8 flex justify-center items-center gap-2 hover:opacity-90 transition"
    >
      {label} (
      <BsCoin className="text-white text-base -mt-[1px]" />
      <span>{tokens}</span>
      )
    </button>
  );
};

export default SaveButton;