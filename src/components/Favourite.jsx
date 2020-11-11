import React from 'react'
import { connect } from 'react-redux'
import { Emptydata } from './EmptyData'

function Favourite(props) {
    

    if(props.favourite === null){
        return(
            <div className='container pt-4'>
                <Emptydata description="Add your favourite movie now !!" />
            </div>
        )
    }
    return (
        <div className='container pt-4'>
            <h3>Your Favourite</h3>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        favourite : state.favourite
    }
}



export default connect(mapStateToProps)(Favourite);