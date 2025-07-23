"use client"

import React, { useState } from "react"
import { Wand2, Plus, FolderOpen, Upload } from "lucide-react"

interface InputBoxProps {
  showAttachmentMenu?: boolean
}

const InputBox: React.FC<InputBoxProps> = ({ showAttachmentMenu = false }) => {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleGenerate = () => {
    if (!prompt.trim() || isGenerating) return
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <div className="relative w-full flex-grow flex items-center bg-white/10 rounded-2xl border border-white/15 p-1.5 shadow-lg">
      {/* + BUTTON WITH MENU */}
      {showAttachmentMenu && (
        <div className="relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-white hover:bg-white/10 transition-colors mr-2 border border-white/20"
            aria-label="Add attachment"
          >
            <Plus size={20} />
          </button>

          {menuOpen && (
            <div className="absolute bottom-full left-0 mb-3 z-50 w-56 bg-white/10 rounded-xl shadow-xl border border-white/10">
              <div className="px-4 py-3 font-semibold text-sm text-gray-400">Attachments</div>
              <button className="w-full text-left px-4 py-2 flex items-center hover:bg-white/10 transition-colors text-white">
                <FolderOpen size={16} className="mr-2" /> Choose From Library
              </button>
              <button className="w-full text-left px-4 py-2 flex items-center hover:bg-white/10 transition-colors text-white">
                <Upload size={16} className="mr-2" /> Upload From Devices
              </button>
            </div>
          )}
        </div>
      )}

      {/* PROMPT INPUT */}
      <input
        type="text"
        className="flex-grow px-4 py-2 bg-transparent text-white placeholder-gray-500 focus:outline-none rounded-3xl"
        placeholder="Type a prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
        aria-label="AI prompt input"
      />

      {/* MAGIC PROMPT BUTTON */}
      <button className="p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Magic prompt">
        <Wand2 size={20} className="text-cyan-400" />
      </button>

      {/* GENERATE BUTTON */}
      <button
        onClick={handleGenerate}
        disabled={isGenerating}
        className="ml-2 px-6 py-2.5 rounded-xl bg-[#6C47FF] hover:bg-[#5a38d1] transition-colors text-white font-semibold disabled:bg-purple-900 disabled:text-gray-400 disabled:cursor-not-allowed"
      >
        {isGenerating ? "Generating" : "Generate"}
      </button>
    </div>
  )
}

export default InputBox