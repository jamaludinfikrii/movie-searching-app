import React from 'react'
import { connect } from 'react-redux'
import { Emptydata } from './EmptyData'

function Movielist(props) {
    

    if(props.movies === null){
        return(
            <div className='container pt-4'>
                <Emptydata description="Start searching your movie now !!" />
            </div>
        )
    }
    return (
        <div className='container pt-4'>
            <h3>Your Movie Search</h3>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        movies : state.movies
    }
}



export default connect(mapStateToProps)(Movielist);