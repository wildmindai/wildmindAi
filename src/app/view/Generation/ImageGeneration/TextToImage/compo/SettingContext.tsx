import React, { useState } from 'react'
import ModelPresetSelector from '../../../ui/ModelPresetSelector'
import AspectRatioSelector from '../../../ui/AspectRatioSelector'
import DropDownWithoutCircle from '../../../ui/DropDownWithoutCircle'
import DropDownWithCircle from '../../../ui/DropDownWithCircle'
import SaveButton from '../../../ui/SaveButton'
import VisualIntensityToggle from '../../../ui/VisualIntensityToggle'


const SettingContext = () => {
  const [settings, setSettings] = useState({
    model: 'Stable XL',
    aspectRatio: '1:1',
    contentType: '-',
    visualIntensity: 'OFF',
    styles: '-',
    effects: '-',
    colorTone: '-',
    lighting: '-',
    cameraAngle: '-',
    photoReal: false,
    privateMode: false,
    collection: 'Collection 1',
    negativePrompt: false,
    transparency: false,
    tiling: false,
    fixedSeed: false,
  })

  const models = [
    { id: 'stable-xl', name: 'Stable XL', image: '/models/stable-xl.jpg' },
    { id: 'flux-dev', name: 'Flux.1 Dev', image: '/models/flux-dev.jpg' },
    { id: 'sd-large', name: 'Stable Diffusion 3.5 Large', image: '/models/sd-large.jpg' },
    { id: 'sd-medium', name: 'Stable Diffusion 3.5 Medium', image: '/models/sd-medium.jpg' },
    { id: 'flux-schnell', name: 'Flux.1 Schnell', image: '/models/flux-schnell.jpg' },
    { id: 'stable-turbo', name: 'Stable Turbo', image: '/models/stable-turbo.jpg' },
  ]

  const aspectOptions = [
    { id: '2:3', label: '2:3', image: '/11.svg' },
    { id: '1:1', label: '1:1', image: '/23.svg' },
    { id: '16:9', label: '16:9', image: '/169.svg' },
    { id: 'custom', label: 'Custom', image: '/custom.svg' },
  ]

  const styleOptions = [
    '3d Render',
    'Bokeh',
    'Cinematic',
    'Creative',
    'Graphic Design Pop Art',
    'Graphic Design Vector',
    'Illustration',
  ]

  const colorOptions = ['Pink', 'Blue', 'Red', 'Orange']
  const lightOptions = [
    'Back Lightning',
    'Side Right Lightning',
    'Top Down Lightning',
    'Front Lightning',
    'Side Left Lightning',
    'Bottom Up Lightning',
  ]
  const cameraOptions = [
    'Front View',
    'Back View',
    'Right Side View',
    'Left Side View',
    'Top View',
    'Bottom View',
  ]

  return (
    <div className="p-4 text-white scrollbar-hide overflow-y-auto">
      <ModelPresetSelector
        models={models}
        onSelect={(value) => setSettings((prev) => ({ ...prev, model: value.name }))}
      />

      <AspectRatioSelector
        title="Aspect Ratio"
        options={aspectOptions}
        selectedId={settings.aspectRatio}
        onSelect={(value) => setSettings((prev) => ({ ...prev, aspectRatio: value }))}
      />

      <DropDownWithCircle
        title="Social Media Frame"
        colors={['Profile', 'Post']}
        selected={settings.collection}
        onSelect={(value) => setSettings((prev) => ({ ...prev, collection: value }))}
        includeCustomInput={false}
      />

      <DropDownWithoutCircle
        title="Style Palettes"
        palettes={styleOptions}
        selected={settings.styles}
        onSelect={(value) => setSettings((prev) => ({ ...prev, styles: value }))}
      />

      <DropDownWithoutCircle
        title="Content Type"
        palettes={['Photography', 'Digital Art', 'Sketch', 'Anime', 'Cartoon']}
        selected={settings.contentType}
        onSelect={(value) => setSettings((prev) => ({ ...prev, contentType: value }))}
      />

      <div className="mb-2">
        <VisualIntensityToggle />
      </div>

      <DropDownWithCircle
        title="Composition"
        colors={colorOptions}
        selected={settings.colorTone}
        onSelect={(value) => setSettings((prev) => ({ ...prev, colorTone: value }))}
        includeCustomInput={true}
      />

      <DropDownWithoutCircle
        title="Effects"
        palettes={['Glow', 'Blur', 'Depth of Field', 'Shadow']}
        selected={settings.effects}
        onSelect={(value) => setSettings((prev) => ({ ...prev, effects: value }))}
      />

      <DropDownWithCircle
        title="Lighting"
        colors={lightOptions}
        selected={settings.lighting}
        onSelect={(value) => setSettings((prev) => ({ ...prev, lighting: value }))}
        includeCustomInput={false}
      />

      <DropDownWithCircle
        title="Camera Angle"
        colors={cameraOptions}
        selected={settings.cameraAngle}
        onSelect={(value) => setSettings((prev) => ({ ...prev, cameraAngle: value }))}
        includeCustomInput={false}
      />

      <SaveButton tokens={100} onClick={() => console.log('Saved settings:', settings)} />
      {/* Summary Section */}
      <div className="mt-4 p-4 bg-zinc-900 rounded-lg text-lg space-y-1 scrollbar-hide overflow-y-auto">
        <div>Model Selection: {settings.model}</div>
        <div>Aspect Ratio: {settings.aspectRatio}</div>
        <div>Content Type: {settings.contentType}</div>
        <div>Visual Intensity: {settings.visualIntensity}</div>
        <div>Styles: {settings.styles}</div>
        <div>Effects: {settings.effects}</div>
        <div>Colour and Tone: {settings.colorTone}</div>
        <div>Lighting: {settings.lighting}</div>
        <div>Camera Angle: {settings.cameraAngle}</div>
        <div>Private Mode: {settings.privateMode ? "ON" : "OFF"}</div>
        <div>Collection: {settings.collection}</div>
        <div>Photo Real: {settings.photoReal ? "ON" : "OFF"}</div>
        <div>Negative Prompt: {settings.negativePrompt ? "ON" : "OFF"}</div>
        <div>Transparency: {settings.transparency ? "ON" : "OFF"}</div>
        <div>Tiling: {settings.tiling ? "ON" : "OFF"}</div>
        <div>Use Fixed Seed: {settings.fixedSeed ? "ON" : "OFF"}</div>
      </div>
        {/* <TextToImagePage /> */}
    </div>
  )
}

export default SettingContext