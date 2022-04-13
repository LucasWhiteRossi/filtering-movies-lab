import {Card} from './components/Card'
import movies from './data/movies'

function App() {

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

export default App;
