import React from 'react'
import { connect } from 'react-redux'
import Favouritetoogle from './FavouriteToogle'
import { getDataMovieDetail } from './../redux/movieActions'


function Tables(props) {
    return (
        <table className='table mt-4'>
            <thead className='star-bg-primary text-white'>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Year</th>
                    <th scope="col">Imdb Id</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((val,index) => {
                        return(
                            <tr key={index}>
                                <td><span onClick={() => props.getDataMovieDetail(val.imdbID)} className='star-link' style={{textDecoration:'underline'}}>{val.Title} </span> </td>
                                <td className='text-secondary'>{val.Year}</td>
                                <td className='text-secondary'>{val.imdbID}</td>
                                <td className='text-secondary'>
                                    <Favouritetoogle index={index} data={val} isExist={props.favourite_ids ? props.favourite_ids.includes(val.imdbID) : false} />
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}


const mapStateToProps = (state) => {
    return {
        favourite_ids : state.favourite_ids
    }
}

export default connect(mapStateToProps,{getDataMovieDetail})(Tables);
