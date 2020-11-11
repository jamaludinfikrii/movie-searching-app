import React from 'react'
import { connect } from 'react-redux'
import Favourite from './components/Favourite'
import Jumbotron from './components/Jumbotron'
import Movielist from './components/MovieList'
import Navigations from './components/Navigations'
function App(props) {
  return (
    <div>
      <Navigations />
      <Jumbotron />
      {
        props.pages === 'search' ? 
        <Movielist />
        :
        <Favourite />
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      pages : state.pages
  }
}


export default connect(mapStateToProps)(App);