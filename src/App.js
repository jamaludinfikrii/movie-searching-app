import React from 'react'
import { Emptydata } from './components/EmptyData'
import Jumbotron from './components/Jumbotron'
import Navigations from './components/Navigations'
function App(props) {
  return (
    <div>
      <Navigations />
      <Jumbotron />
      <Emptydata />
    </div>
  )
}

export default App