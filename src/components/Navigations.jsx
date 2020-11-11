import React from 'react'
import { connect } from 'react-redux'

function Navigations(props) {
    return (
        <div style={{position : "absolute", top : '10px'}} className='text-white w-100 text-center'>
            <span className={props.pages === 'search' ? 'star-active-link mr-4 font-weight-bold' : 'star-link mr-4'} >Search Movie</span>
            <span className={props.pages === 'favourite' ? 'star-active-link font-weight-bold' : 'star-link'}>My Favourite</span>   
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pages : state.pages
    }
}

export default connect(mapStateToProps)(Navigations)