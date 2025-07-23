"use client"

import type React from "react"
import { Settings } from "lucide-react"

interface SettingButtonProps {
  onClick: () => void
}

const SettingsButton: React.FC<SettingButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-4 bg-[#1C1D22] rounded-full border border-gray-700/50 hover:bg-white/10 transition-colors shadow-lg"
      aria-label="Open settings"
    >
      <Settings size={24} className="text-white" />
    </button>
  )
}

export default SettingsButton
