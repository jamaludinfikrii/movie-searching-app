import React from 'react'
import { connect } from 'react-redux'
import { Emptydata } from './EmptyData'
import { Tables } from './Tables'

function Movielist(props) {
    

    if(props.movies != null){
        return(
            <div className='container pt-4'>
                <Emptydata description="Start searching your movie now !!" />
            </div>
        )
    }
    return (
        <div className='container py-5'>
            <h3 className='star-color-primary'>Your Movie Search</h3>
            <Tables />
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        movies : state.movies
    }
}



export default connect(mapStateToProps)(Movielist);