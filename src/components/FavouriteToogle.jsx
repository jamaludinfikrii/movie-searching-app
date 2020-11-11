function Favouritetoogle(props) {
    

    return (
        <input type='button' value={props.isExist ? 'Remove from favourite' :'Add to favourite'} className={props.isExist ? 'btn star-bg-secondary text-white font-12':'btn star-bg-primary text-white font-12'} />
    )
}

export default Favouritetoogle;