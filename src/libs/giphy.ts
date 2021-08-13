const API_KEY = import.meta.env.VITE_APP_GIPHY_API_KEY

export const getTrendingImages = (LIMIT: number) => {
  return fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${LIMIT}`
  ).then(res => res.json())
}

export const getImages = (QUERY: string, LIMIT?: number) => {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${QUERY}&limit=${LIMIT}`
  ).then(res => res.json())
}
