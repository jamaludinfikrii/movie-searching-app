import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Favourite from './components/Favourite'
import Jumbotron from './components/Jumbotron'
import Movielist from './components/MovieList'
import Navigations from './components/Navigations'
import { getStorage } from './redux/movieActions'
function App(props) {
  
  let {getStorage} = props
  useEffect(() => {
    getStorage()
  })

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


export default connect(mapStateToProps,{getStorage})(App);