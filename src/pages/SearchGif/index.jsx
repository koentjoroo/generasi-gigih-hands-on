import React from "react"
import Search from "../../components/Search"
import Gif from "../../components/Gif"

const SearchGif = () => {
  const [images, setImages] = React.useState([])

  const getImages = async query => {
    const API_KEY = import.meta.env.VITE_APP_GIPHY_API_KEY
    const LIMIT = 12
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${LIMIT}`
    const images = await fetch(endpoint).then(res => res.json())
    setImages(images.data)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const query = e.target.query.value
    getImages(query)
  }

  return (
    <div>
      <Search handleSubmit={handleSubmit} />
      {images.map(image => (
        <Gif
          url={image.images.preview_webp.url}
          title={image.title}
          key={image.id}
        />
      ))}
    </div>
  )
}

export default SearchGif
