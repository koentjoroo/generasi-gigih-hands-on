import React from 'react'

type SearchProps = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>,
  handleQueryChanges: React.ChangeEventHandler<HTMLInputElement>,
  query: string
}

const Search = ({ handleSubmit, handleQueryChanges, query }: SearchProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        onChange={handleQueryChanges}
        placeholder="Search..."
        value={query}
      />
      <input type="submit" value="Search" />
    </form>
  )
}

export default Search
