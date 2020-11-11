import { CHANGE_FAVOURITE_DATA, CHANGE_PAGES } from "./types"

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
    }
}