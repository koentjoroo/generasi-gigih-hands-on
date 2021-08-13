import React from 'react'
import { Box } from '@chakra-ui/react'

type GifProps = {
    url: string,
    title: string
}

const Gif = ({ url, title }: GifProps): JSX.Element => {
    return (
        <Box p={4} m="4 auto">
        <p>{title}</p>
        <img title={title} src={url} alt={title} />
        </Box>
    )
}

export default Gif