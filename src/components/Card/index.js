import { Link } from "react-router-dom"

export function Card(props){
    const url = `https://image.tmdb.org/t/p/w185/${props.movie.backdrop_path}`
    return (
        <div className="card" style={{width: "18rem"}}> 
            <img className="card-img-top" src={url} alt={props.movie.title}/> 
            <div className="card-body"> 
                <p className="card-text">
                    {props.movie.overview}
                </p>
                <Link to={`/movie/${props.movie.title}`}><button>Descubra mais</button></Link> 
            </div> 
        </div> 
    )
}