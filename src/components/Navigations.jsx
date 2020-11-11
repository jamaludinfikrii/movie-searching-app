import React from 'react'

export function Navigations(props) {
    return (
        <div style={{position : "absolute", top : '10px'}} className='text-white font-weight-bold w-100 text-center'>
            <span style={{textDecoration : "underline"}} className='mr-4 star-link' >Search Movie</span>
            <span style={{textDecoration : "underline"}} className='star-link'>My Favourite</span>   
        </div>
    )
}
