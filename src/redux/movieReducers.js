import { CHANGE_FAVOURITE_DATA, CHANGE_PAGES, NULL_FAVOURITE } from "./types";

const movieState = {
    movies : null,
    loading : false,
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
        default:
            return state
    }
}

export default MovieReducers;
