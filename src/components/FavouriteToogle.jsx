import { connect } from "react-redux";
import {onAddToFavourites} from './../redux/movieActions'

function Favouritetoogle(props) {
    return (
        <input onClick={() => props.onAddToFavourites(props.data)} type='button' value={props.isExist ? 'Remove from favourite' :'Add to favourite'} className={props.isExist ? 'btn star-bg-secondary text-white font-12':'btn star-bg-primary text-white font-12'} />
    )
}

export default connect(null,{onAddToFavourites})(Favouritetoogle);