export const GifItem = ({gifsTitle, gifsUrl}) =>{
    //console.log(gifsUrl)
    return(
        <div className="card">
            <img src={gifsUrl} alt={gifsTitle} />
            <p>{gifsTitle}</p>
        </div>
    )
}