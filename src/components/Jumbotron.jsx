import React from 'react'
import cameraIcon from './../icons/video-camera.svg'

import favouriteIcon from './../icons/rating.svg'
import { connect } from 'react-redux'
import SearchInput from './SearchInput'

function Jumbotron(props) {
    return (
        <div className={props.pages === 'search' ? 'star-bg-gradient py-5' : 'star-bg-favourite py-5'}>
            <div className="container text-center">
                <h1 className='text-white text-capitalize font-weight-bold font-24'>{props.pages === 'search' ?  "Search Movie" : "My Favourite"}</h1>
                <span style={{display : "inline-block",borderRadius : "200px"}} className='bg-white p-4 shadow my-4'>
                    <img src={props.pages === 'search' ? cameraIcon : favouriteIcon} width='100px'alt="icon"/>
                </span>
                <p className='text-white text-capitalize font-16 font-weight-light'>fetched from omdb api</p>

                <div className="row mx-3 mx-md-0 justify-content-center mt-5">
                    {
                        props.pages === 'search' &&
                        <SearchInput />
                    }
                </div>
            </div>
        </div>  
    )
}

const mapStateToProps = (state) => {
    return {
        pages : state.pages
    }
}

export default connect(mapStateToProps)(Jumbotron)
