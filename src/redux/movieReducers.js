import { CHANGE_FAVOURITE_DATA, CHANGE_PAGES, FETCH_MOVIE_ERROR, FETCH_MOVIE_LOADING, FETCH_MOVIE_SUCCESS, NULL_FAVOURITE } from "./types";

const movieState = {
    movies : null,
    loading : false,
    error : null,
    pages : "search",
    favourite : null,
    favourite_ids : null
}

const MovieReducers = (state=movieState, action) => {
    switch(action.type){
        case CHANGE_PAGES:
            return{...state , pages : action.payload}
        case CHANGE_FAVOURITE_DATA :
            return {...state,favourite : action.payload.favourites, favourite_ids : action.payload.favourites_ids}
        case NULL_FAVOURITE:
            return{...state,favourite : null}
        case FETCH_MOVIE_SUCCESS:
            return {...state,movies : action.payload,loading : false,error : null}
        case FETCH_MOVIE_ERROR : 
            return {...state,error : action.payload,loading : false}
        case FETCH_MOVIE_LOADING : 
            return {...state,loading : true}
        default:
            return state
    }
}

export default MovieReducers;
