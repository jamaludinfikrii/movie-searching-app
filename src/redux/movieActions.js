import Axios from "axios"
import { CHANGE_FAVOURITE_DATA, CHANGE_PAGES,NULL_FAVOURITE,FETCH_MOVIE_SUCCESS,FETCH_MOVIE_ERROR, FETCH_MOVIE_LOADING, MODAL_OPEN, FETCH_MOVIE_DETAIL_LOADING, FETCH_MOVIE_DETAIL_SUCCESS, MODAL_CLOSED } from "./types"
import {omdbKeys} from './../keys/omdbKeys'

export const goToPages = (pages) => {
    return{
        type : CHANGE_PAGES,
        payload : pages
    }
}


export const getStorage = () => {
    let favourites = localStorage.getItem('favourites_data')
    let favourites_ids = localStorage.getItem('favourites_ids')

    if(favourites && favourites_ids){
        return{
            type : CHANGE_FAVOURITE_DATA,
            payload : {
                favourites,
                favourites_ids
            }
        }
    }else{
        return{
            type : NULL_FAVOURITE
        }
    }
}

export const onAddToFavourites = (data) => {
    let favourites = localStorage.getItem('favourites_data')
    let favourites_ids = localStorage.getItem('favourites_ids')


    
    if(favourites && favourites_ids){
        favourites = JSON.parse(favourites)
        favourites_ids = JSON.parse(favourites_ids)
       
        favourites.push(data)
        favourites_ids.push(data.imdbID)
    }else{
        favourites = [data]
        favourites_ids = [data.imdbID]
    }

    console.log(favourites)
    console.log(favourites_ids)

    favourites = JSON.stringify(favourites)
    favourites_ids = JSON.stringify(favourites_ids)

    localStorage.setItem('favourites_data',favourites)
    localStorage.setItem('favourites_ids',favourites_ids)
    
    favourites = localStorage.getItem('favourites_data')
    favourites_ids = localStorage.getItem('favourites_ids')

    if(favourites && favourites_ids){
        return{
            type : CHANGE_FAVOURITE_DATA,
            payload : {
                favourites,
                favourites_ids
            }
        }
    }else{
        return{
            type : NULL_FAVOURITE
        }
    }
}


export const onRemoveFromFavourites = (id) => {
    let favourites = JSON.parse(localStorage.getItem('favourites_data'))
    let favourites_ids = JSON.parse(localStorage.getItem('favourites_ids'))

    let index = favourites_ids.indexOf(id)
    console.log(index)
    favourites.splice(index,1)
    favourites_ids.splice(index,1)

    favourites = JSON.stringify(favourites)
    favourites_ids = JSON.stringify(favourites_ids)
    
    localStorage.setItem('favourites_data',favourites)
    localStorage.setItem('favourites_ids',favourites_ids)

    if(JSON.parse(favourites) && JSON.parse(favourites_ids)){
        return{
            type : CHANGE_FAVOURITE_DATA,
            payload : {
                favourites,
                favourites_ids
            }
        }
    }else{
        return{
            type : NULL_FAVOURITE
        }
    }
}


export const searchDataMovie = (title) => {
    return (dispatch) => {
        dispatch({
            type : FETCH_MOVIE_LOADING
        })
        Axios.get(`http://www.omdbapi.com/?apikey=${omdbKeys}&s=${title}`)
        .then((res) => {
                if(res.data.Response === 'False'){
                    dispatch({
                        type : FETCH_MOVIE_ERROR,
                        payload : res.data.Error
                    })
                    // movie error
                }else{
                    dispatch({
                        type : FETCH_MOVIE_SUCCESS,
                        payload : res.data.Search
                    })
                }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}


export const getDataMovieDetail = (imdbID) => {
    return (dispatch) => {
        dispatch({
            type : MODAL_OPEN
        })
        dispatch({
            type : FETCH_MOVIE_DETAIL_LOADING
        })

        Axios.get(`http://www.omdbapi.com/?apikey=${omdbKeys}&i=${imdbID}`)
        .then((res) => {
            dispatch({
                type : FETCH_MOVIE_DETAIL_SUCCESS,
                payload : res.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
}


export const closeModal = () => {
    return {
        type : MODAL_CLOSED
    }
}