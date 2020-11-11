import { CHANGE_PAGES } from "./types"

export const goToPages = (pages) => {
    return{
        type : CHANGE_PAGES,
        payload : pages
    }
}