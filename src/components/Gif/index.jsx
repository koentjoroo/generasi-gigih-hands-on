import React from 'react'

export default function Gif({ url, title }) {
    return (
        <>
        <h1>{title}</h1>
        <img title={title} src={url} alt={title} />
        </>
    )
}