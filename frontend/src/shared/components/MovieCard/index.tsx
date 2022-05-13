import { Link } from 'react-router-dom';
import { Movie } from 'shared/types/movie';
import MovieScore from '../MovieScore';


type Props = {
  movie: Movie
}

function MovieCard( { movie } : Props) {

  return (
    <div>
      <img className="movie-movie-card-image" src={movie.image} alt={movie.title} />
      <div className="movie-card-bottom-container">
          <h3>{movie.title}</h3>
          <MovieScore />

          <Link to={`/form/${movie.id}`} >
           <div className="btn btn-primary movie-btn">Avaliar</div>
          </Link>

      </div>
    </div>
  );
}

export default MovieCard;
