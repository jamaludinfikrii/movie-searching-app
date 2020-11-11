import React from 'react'
import emptyIcon from './../icons/confused.svg'

export function Emptydata(props) {
    

    return (
        <div className='row justify-content-center mx-3'>
            <div className="col-md-3 text-center">
                <h3 className='font-weight-bold star-color-primary text-center mb-3'>Data Still Empty</h3>
                <img src={emptyIcon} alt="icon" width='50%' className='text-center'/>
            </div>
        </div>
    )
}
