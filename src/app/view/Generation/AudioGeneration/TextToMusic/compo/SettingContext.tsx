
import React, { useState } from 'react'
import ModelPresetSelector from '../../../ui/ModelPresetSelector'
import DropDownWithCircle from '../../../ui/DropDownWithCircle'
import ToggleSetting from '../../../ui/ToggleSetting'
import SaveButton from '../../../ui/SaveButton'

const SettingContext = () => {
  const [settings, setSettings] = useState({
    model: 'Stable XL',
    length: '5 Second',
    privateMode: false,
    photoReal: false,
    negativePrompt: false,
    transparency: false,
    tiling: false,
    useFixedSeed: false
  })

  const models = [
    { id: 'stable-xl', name: 'Stable XL', image: '/models/stable-xl.jpg' },
    { id: 'flux-dev', name: 'Flux.1 Dev', image: '/models/flux-dev.jpg' },
    { id: 'sd-large', name: 'Stable Diffusion 3.5 Large', image: '/models/sd-large.jpg' },
    { id: 'sd-medium', name: 'Stable Diffusion 3.5 Medium', image: '/models/sd-medium.jpg' },
    { id: 'flux-schnell', name: 'Flux.1 Schnell', image: '/models/flux-schnell.jpg' },
    { id: 'stable-turbo', name: 'Stable Turbo', image: '/models/stable-turbo.jpg' },
  ]

  const lengthOptions = ['5 Second', '10 Second', '15 Second', '30 Second', '1 Minute', '2 Minute']

  return (
    <div className="p-4 text-white scrollbar-hide overflow-y-auto">
      <ModelPresetSelector
        models={models}
        onSelect={(value) => setSettings((prev) => ({ ...prev, model: value.name }))}
      />

      <DropDownWithCircle
        title="Length"
        colors={lengthOptions}
        selected={settings.length}
        onSelect={(value) => setSettings((prev) => ({ ...prev, length: value }))}
        includeCustomInput={true}
        customPlaceholder="Add Custom Length"
      />

      <ToggleSetting
        label="Private Mode"
        enabled={settings.privateMode}
        onToggle={(value) => setSettings((prev) => ({ ...prev, privateMode: value }))}
      />

      <ToggleSetting
        label="Negative Prompt"
        enabled={settings.negativePrompt}
        onToggle={(value) => setSettings((prev) => ({ ...prev, negativePrompt: value }))}
      />

      <ToggleSetting
        label="Transparency"
        enabled={settings.transparency}
        onToggle={(value) => setSettings((prev) => ({ ...prev, transparency: value }))}
      />

      <ToggleSetting
        label="Tiling"
        enabled={settings.tiling}
        onToggle={(value) => setSettings((prev) => ({ ...prev, tiling: value }))}
      />

      <ToggleSetting
        label="Use Fixed Seed"
        enabled={settings.useFixedSeed}
        onToggle={(value) => setSettings((prev) => ({ ...prev, useFixedSeed: value }))}
      />

      <SaveButton tokens={100} onClick={() => console.log('Saved settings:', settings)} />
      
      {/* Summary Section */}
      <div className="mt-4 p-4 bg-zinc-900 rounded-lg text-lg space-y-1 scrollbar-hide overflow-y-auto">
        <div>Model Selection: {settings.model}</div>
        <div>Length: {settings.length}</div>
        <div>Private Mode: {settings.privateMode ? "ON" : "OFF"}</div>
        <div>Photo Real: {settings.photoReal ? "ON" : "OFF"}</div>
        <div>Negative Prompt: {settings.negativePrompt ? "ON" : "OFF"}</div>
        <div>Transparency: {settings.transparency ? "ON" : "OFF"}</div>
        <div>Tiling: {settings.tiling ? "ON" : "OFF"}</div>
        <div>Use Fixed Seed: {settings.useFixedSeed ? "ON" : "OFF"}</div>
      </div>
    </div>
  )
}

export default SettingContext

