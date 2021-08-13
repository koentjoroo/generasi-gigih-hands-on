import React from 'react'
import Gif from '../../components/Gif'
import { getTrendingImages } from '../../libs/giphy'

const Trending = () => {
  const [images, setImages] = React.useState([])

  React.useEffect(() => {
    getTrendingImages(12).then(result => setImages(result.data))
  }, [])

  return images.map(image => (
    <Gif
      url={image.images.preview_webp.url}
      title={image.title}
      key={image.id}
    />
  ))
}

export default Trending