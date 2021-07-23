import React from 'react'

const Search = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" name="query" placeholder="Search..." />
      <input type="submit" value="Search" />
    </form>
  );
}

export default Search