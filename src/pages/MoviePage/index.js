import './style.modules.css'
import { useParams } from 'react-router-dom';
import movies from '../../data/movies'

export function MoviePage() {
    
    const params = useParams()
    const movie = movies.filter((mov)=>{return mov.title===params.movieName})[0]
    
    function stars(rating){
        const rounded = Math.round(rating)
        let starString = ""
        const fullStar  = "★"
        
        for (let i=0; i<rounded; i++){
            starString += fullStar
        }

        return starString.padEnd(10,"☆")
    }    
    
    return (
    <div className="movie-box">
    <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={`${movie.original_title} poster`}
    />
    <p className='rating-area'><strong>Rating: </strong><span>{stars(movie.vote_average)}</span></p>
    <h1>{movie.original_title}</h1>
    <p className='text-area'>{movie.overview}</p>
    
    </div>
    
    
    
    );


}
