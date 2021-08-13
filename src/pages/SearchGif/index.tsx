import * as React from 'react'
import Search from '../../components/Search'
import Gif from '../../components/Gif'
import { getImages } from '../../libs/giphy'

type Image = {
  id: number,
  title: string,
  images: {
    preview_webp: {
      url: string
    }
  }
}

const SearchGif = () => {
  const [images, setImages] = React.useState<Image[]>([])
  const [query, setQuery] = React.useState<string>('')

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    getImages(query)
  }

  const handleQueryChanges: React.ChangeEventHandler<HTMLInputElement> = e => setQuery(e.target.value)

  React.useEffect(() => {
    getImages(query, 12).then(result => setImages(result.data))
  }, [query])

  return (
    <>
      <Search
        handleSubmit={handleSubmit}
        handleQueryChanges={handleQueryChanges}
        query={query}
      />
      {images.map((image: Image) => (
        <Gif
          url={image.images.preview_webp.url}
          title={image.title}
          key={image.id}
        />
      ))}
    </>
  )
}

export default SearchGif
