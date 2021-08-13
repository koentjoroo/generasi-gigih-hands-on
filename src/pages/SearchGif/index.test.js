import { render, getByText, getByPlaceholderText } from '@testing-library/react'
import {} from 'jest'
import SearchGif from './index'

test('ensure search bar is rendered', () => {
    render(<SearchGif />)
    const input = getByPlaceholderText(/search/i)
    const button = getByText(/search/i)

})