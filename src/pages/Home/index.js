import {Card} from '../../components/Card'
import movies from '../../data/movies'

export function Home (){
    
    const filtered = movies.filter((movie)=>{ return movie.vote_average > 7})

    return (
        <div className="App">
        {filtered.map((currentMovie)=>{
        return (
            <Card movie={currentMovie}/>
        )
    })}
    </div>
    );
}