import React from "react";
import { gif } from "./data/sample";
import Search from "./components/Search";
import Gif from "./components/Gif";
import "./App.css";

function App() {
  const { url, title } = gif;
  return (
    <div className="App">
      <Search />
      <Gif url={url} title={title} />
    </div>
  );
}

export default App;
