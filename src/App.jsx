import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import SearchGif from './pages/SearchGif'
import Trending from './pages/Trending'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/search">
              <SearchGif />
            </Route>
            <Route path="/trending">
              <Trending />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </div>
  )
}

export default App
