import { CHANGE_PAGES } from "./types";

const movieState = {
    movies : null,
    loading : false,
    pages : "search",
    favourite : null
}

const MovieReducers = (state=movieState, action) => {
    switch(action.type){
        case CHANGE_PAGES:
            return{...state , pages : action.payload}
        default:
            return state
    }
}

export default MovieReducers;
