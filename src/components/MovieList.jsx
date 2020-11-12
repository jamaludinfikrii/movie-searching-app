import React from 'react'
import { connect } from 'react-redux'
import { Emptydata } from './EmptyData'
import Loading from './Loading'
import Tables from './Tables'



function Movielist(props) {
    
    if(props.loading){
        return(
            <div className='pt-5'>
                <Loading />
            </div>
        )
    }
    console.log(props.error)
    if(props.error !== null){
        return(
            <div className='container pt-4'>
                <Emptydata title='Error !!' description={props.error}/>
            </div>
        )
    }

    if(props.movies === null){
        return(
            <div className='container pt-4'>
                <Emptydata title='Data Empty' description="Start searching your movie now !!" />
            </div>
        )
    }

    console.log(props.movies)
    return (
        <div className='container py-5'>
            <h3 className='star-color-primary'>Your Movie Search</h3>
            <Tables data={props.movies}/>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        movies : state.movies,
        loading : state.loading,
        error : state.error
    }
}



export default connect(mapStateToProps)(Movielist);