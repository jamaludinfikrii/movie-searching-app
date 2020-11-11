import React from 'react'
import { Jumbotron } from './components/Jumbotron'
import Navigations from './components/Navigations'
function App(props) {
  return (
    <div>
      <Navigations />
      <Jumbotron />
    </div>
  )
}

export default App