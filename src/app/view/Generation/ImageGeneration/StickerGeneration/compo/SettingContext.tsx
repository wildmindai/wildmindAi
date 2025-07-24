import React, { useState } from 'react'
import Numberof from "../../../ui/numberof"
import DropDownWithCircle from '../../../ui/DropDownWithCircle'
import ToggleSetting from '../../../ui/ToggleSetting'
import SaveButton from '../../../ui/SaveButton'

const SettingContext = () => {
  const [settings, setSettings] = useState({
    number: '1',
    saveFileAs: 'Sticker',
    expression: 'Happy',
    addToCollection: 'Collection 1',
    stickerConsistency: false,
    privateMode: false,
    photoReal: false,
    negativePrompt: false,
    transparency: false,
    tiling: false,
    useFixedSeed: false
  })
  
  const numberof = [
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
    { id: '4', label: '4' }
  ]

  const saveFileOptions = ['Sticker', 'Gif']
  const expressions = ['Happy', 'Sad', 'Emotional']

  return (
    <div className="p-4 text-white scrollbar-hide overflow-y-auto">
      <Numberof
        title="Number of Stickers"
        options={numberof}
        selectedId={settings.number}
        onSelect={(value) => setSettings((prev) => ({ ...prev, number: value }))}
      />
      
      <DropDownWithCircle
        title="Save File as"
        colors={saveFileOptions}
        selected={settings.saveFileAs}
        onSelect={(value) => setSettings((prev) => ({ ...prev, saveFileAs: value }))}
        includeCustomInput={false}
      />

      <DropDownWithCircle
        title="Expression"
        colors={expressions}
        selected={settings.expression}
        onSelect={(value) => setSettings((prev) => ({ ...prev, expression: value }))}
        includeCustomInput={true}
        customPlaceholder="Enter Expression"
      />

      <ToggleSetting
        label="Sticker Consistency"
        enabled={settings.stickerConsistency}
        onToggle={(value) => setSettings((prev) => ({ ...prev, stickerConsistency: value }))}
      />

      <ToggleSetting
        label="Private Mode"
        enabled={settings.privateMode}
        onToggle={(value) => setSettings((prev) => ({ ...prev, privateMode: value }))}
      />

      <ToggleSetting
        label="Photo Real"
        enabled={settings.photoReal}
        onToggle={(value) => setSettings((prev) => ({ ...prev, photoReal: value }))}
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
        <div>Number of Stickers: {settings.number}</div>
        <div>Save File as: {settings.saveFileAs}</div>
        <div>Expression: {settings.expression}</div>
        <div>Sticker Consistency: {settings.stickerConsistency ? "ON" : "OFF"}</div>
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
