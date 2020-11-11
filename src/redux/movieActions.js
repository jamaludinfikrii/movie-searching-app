import { CHANGE_FAVOURITE_DATA, CHANGE_PAGES,NULL_FAVOURITE } from "./types"

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
        favourites_ids.push(data.imdbId)
    }else{
        favourites = [data]
        favourites_ids = [data.imdbId]
    }

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