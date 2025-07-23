"use client"

import type React from "react"
import { useState } from "react"
import { Wand2 } from "lucide-react"

const InputBox: React.FC = () => {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    if (!prompt.trim() || isGenerating) return
    setIsGenerating(true)
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <div className="flex-grow flex items-center bg-white/10 rounded-2xl border border-white/15 p-1.5 shadow-lg w-full">
      <input
        type="text"
        className="flex-grow px-4 py-2 bg-transparent text-white placeholder-gray-500 focus:outline-none rounded-3xl"
        placeholder="Type a prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
        aria-label="AI prompt input"
      />
      <button className="p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Magic prompt">
        <Wand2 size={20} className="text-cyan-400" />
      </button>
      <button
        onClick={handleGenerate}
        disabled={isGenerating}
        className="px-6 py-2.5 rounded-xl bg-[#6C47FF] hover:bg-[#5a38d1] transition-colors text-white font-semibold  disabled:bg-purple-900 disabled:text-gray-400 disabled:cursor-not-allowed"
      >
        {isGenerating ? "Generating" : "Generate"}
      </button>
    </div>
  )
}

export default InputBox
