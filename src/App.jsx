import React from "react";
import { gifs } from "./data/sample";
import Search from "./components/Search";
import Gif from "./components/Gif";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Search />
      {gifs.map(({ id, title, webp, rating }) => (
        rating === 'g' && <Gif url={webp} title={title} key={id} />
      ))}
    </div>
  );
}

export default App;
