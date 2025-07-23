"use client"

import type React from "react"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import SettingsContent from "./compo/SettingContext"
import InputBox from "@/app/view/Generation/ui/InputBox"
import SettingsButton from "../../ui/SettingButton"
import Particles from "../../ui/Particles"



const TextToImagePage: React.FC = () => {
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (

    <div>
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#100b21] text-white overflow-hidden">
      {/* Decorative background elements have been commented out as per your code */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* <Image src="/newt2image/bg.png" alt="background" width={1920} height={1080} className="w-auto h-auto  md:-mt-48  object-contain " /> */}
        <Particles
          particleColors={['#A4C48C']}
          particleCount={420}
          particleSpread={7}
          speed={0.1}
          particleBaseSize={85}
          moveParticlesOnHover={true}
          alphaParticles={false}
          particleTransparency={50}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>
      {/* Navigation buttons */}
      <button className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors z-10">
        <ArrowLeft size={24} className="text-cyan-400" />
      </button>
      <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2 z-10">
        <button className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
          <ArrowRight size={24} className="text-cyan-400" />
        </button>
        <span className="text-xs text-gray-400">AI Stickers</span>
      </div>

      {/* Hero content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 space-y-8 w-full">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Text to image with AI Art
          <br />
          Generator
        </h1>
        <p className="max-w-xl text-gray-400">
          Create awe-inspiring masterpieces effortlessly and explore the endless possibilities of AI generated art.
          Enter a prompt, choose a style, and watch Imagine – AI art generator bring your ideas to life!
        </p>
        <div className="flex items-center space-x-2 w-full max-w-5xl">
        <InputBox />
          <SettingsButton onClick={() => setSettingsOpen(true)} />
        </div>
      </main>

      {/* Slide-in Settings Panel */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
          settingsOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/60" onClick={() => setSettingsOpen(false)} aria-hidden="true" />
        {/* Panel */}
        <div
  className={`relative w-[450px] max-w-full h-full overflow-y-auto transform transition-transform duration-300 ease-in-out ${
    settingsOpen ? 'translate-x-0' : '-translate-x-full'
  } bg-white/5 backdrop-blur-lg  rounded-2xl `}
>
          <div className="flex justify-between items-center p-4">
            <h2 className="text-xl font-semibold"></h2>
            <button
              onClick={() => setSettingsOpen(false)}
              className="text-gray-400 hover:text-white text-2xl leading-none"
              aria-label="Close settings"
            >
              &times;
            </button>
          </div>
          <SettingsContent />
        </div>
      </div>
    </div>
    </div>
  )
}

export default TextToImagePage
