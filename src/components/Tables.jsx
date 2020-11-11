import React from 'react'
import { moviesData } from './DummyDatas'
export function Tables(props) {
    

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
                    moviesData.map((val,index) => {
                        return(
                            <tr key={index}>
                                <td><span className='star-link' style={{textDecoration:'underline'}}>{val.Title} </span> </td>
                                <td className='text-secondary'>{val.Year}</td>
                                <td className='text-secondary'>{val.imdbID}</td>
                                <td className='text-secondary'>
                                    <input type='button' value='Add to favourite' className='btn star-bg-primary text-white font-12' />
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
