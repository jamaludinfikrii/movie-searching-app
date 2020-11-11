import React from 'react'
import cameraIcon from './../icons/video-camera.svg'
import searchIcon from './../icons/search.svg'

export function Jumbotron(props) {
    return (
        <div className='star-bg-gradient py-5'>
            <div className="container text-center">
                <h1 className='text-white text-capitalize font-weight-bold font-24'>Moviegoers Things</h1>
                <span style={{display : "inline-block",borderRadius : "200px"}} className='bg-white p-4 shadow my-4'>
                    <img src={cameraIcon} width='100px'alt="icon"/>
                </span>
                <p className='text-white text-capitalize font-16 font-weight-light'>fetched from omdb api</p>

                <div className="row mx-3 mx-md-0 justify-content-center mt-5">
                    <div className='col-md-6 d-flex' style={{backgroundColor : "#f6f7fa" ,borderRadius : '20px'}}>
                        <input  placeholder='Search your favourites here !!' style={{backgroundColor : "#f6f7fa",border : "none"}} className='star-input py-3 px-3 flex-grow-1 font-12' type="text"/>
                        <img className='star-link' src={searchIcon} alt="icon"/>
                    </div>
                </div>
            </div>
        </div>  
    )
}
