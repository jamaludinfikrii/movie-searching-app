import React from 'react'

const Loading = () => {
    return(
        <div className='text-center'>
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div>plase wait</div>
        </div>
    )
}

export default Loading;