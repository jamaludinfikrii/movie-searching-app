import React from 'react'
import { connect } from 'react-redux'
import { Emptydata } from '../components/EmptyData'
import Modal from '../components/Modal'
import Tables from '../components/Tables'

function Favourite(props) {
    
    if(props.favourite === null || JSON.parse(props.favourite).length === 0){
        return(
            <div className='container pt-4'>
                <Emptydata title='Data Empty' description="Add your favourite movie now !!" />
            </div>
        )
    }
    
    return (
        <div className='container pt-4'>
            <h3>Your Favourite</h3>
            <p>{props.dataDetail}</p>
            <Tables data={JSON.parse(props.favourite)}/>
            <Modal/>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        favourite : state.favourite,
    }
}



export default connect(mapStateToProps)(Favourite);