import React from 'react'
import { connect } from 'react-redux'
import {goToPages} from './../redux/movieActions'

function Navigations(props) {
    return (
        <div style={{position : "absolute", top : '10px'}} className='text-white w-100 text-center'>
            <span onClick={() => props.goToPages('search')} className={props.pages === 'search' ? 'star-active-link mr-4 font-weight-bold' : 'star-link mr-4'} >Search Movie</span>
            <span onClick={() => props.goToPages('favourite')} className={props.pages === 'favourite' ? 'star-active-link font-weight-bold' : 'star-link'}>My Favourite</span>   
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pages : state.pages
    }
}

export default connect(mapStateToProps,{goToPages})(Navigations)