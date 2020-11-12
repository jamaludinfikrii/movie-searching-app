import React from 'react'
import { connect } from 'react-redux'
import Loading from './Loading'
import {closeModal} from './../redux/movieActions'

const Modal = (props) => {
    let isOpen = props.isOpen ? 'ai-display-block' : 'ai-display-none'
    
    return(
        <div className={`ai-modal ${isOpen}`}>
            <div className="ai-modal-main px-5 py-4 ">
                {
                    props.loadingMovieDetail 
                    ?
                    <Loading />
                    :
                    props.dataDetail
                    ?
                    <>
                        <h3 className='border-bottom pb-3'>Movie Detail</h3>
                        <table>
                            <tbody>
                                {
                                    Object.keys(props.dataDetail).slice(0,9).map((val) => {
                                        return(
                                            <tr>
                                                <td className='text-secondary font-weight-bold text-capitalize pr-3'>{val}</td>
                                                <td className='star-color-primary font-weight-bold text-capitalize'>{props.dataDetail[val]}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <div className='border-top mt-4 pt-4 text-right'>
                            <input type="button" value="Close" onClick={props.closeModal} className='btn star-bg-primary text-white'/>
                        </div>
                    </>
                    :
                    null
                }
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        isOpen : state.isOpen,
        dataDetail : state.dataDetail,
        errorMovieDetail : state.errorMovieDetail,
        loadingMovieDetail : state.loadingMovieDetail
    }
}


export default connect(mapStateToProps,{closeModal})(Modal);