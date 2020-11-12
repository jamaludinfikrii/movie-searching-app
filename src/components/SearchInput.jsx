import React, { useRef } from 'react'
import { connect } from 'react-redux'
import {searchDataMovie} from './../redux/movieActions'
import searchIcon from './../icons/search.svg'

const SearchInput = (props) => {
    const inputRef = useRef()

    return(
        <div className='col-md-6 d-flex' style={{backgroundColor : "#f6f7fa" ,borderRadius : '20px'}}>
            <input ref={(el) => inputRef.current = el} placeholder='Search your favourites here !!' style={{backgroundColor : "#f6f7fa",border : "none"}} className='star-input py-3 px-3 flex-grow-1 font-12' type="text"/>
            <img onClick={() => props.searchDataMovie(inputRef.current.value)} className='star-link' src={searchIcon} alt="icon"/>
        </div>
    )
}


export default connect(null,{searchDataMovie})(SearchInput);
