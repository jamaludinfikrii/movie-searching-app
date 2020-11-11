const movieState = {
    movies : null,
    loading : false,
    pages : "search",
    favourite : null
}

const MovieReducers = (state=movieState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default MovieReducers;
