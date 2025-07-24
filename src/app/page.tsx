import React from 'react'
import TextToImagePage from './view/Generation/ImageGeneration/TextToImage/page'
import StickerGeneration from './view/Generation/ImageGeneration/StickerGeneration/page'
import ImagetoImage from './view/Generation/ImageGeneration/ImageToImage/page'
import TextToMusicPage from './view/Generation/AudioGeneration/TextToMusic/page'

const page = () => {
  return (
    <div>
      {/* <TextToImagePage /> */}
      {/* <StickerGeneration /> */}
      {/* <ImagetoImage /> */}
      <TextToMusicPage />
    </div> 
  )
}

export default page