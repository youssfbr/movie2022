import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Movie } from 'shared/types/movie';
import { BASE_URL } from 'shared/utils/requests';
import './styles.css';

type Props = {
    movieId: string;
}

function FormCard({ movieId }: Props) {  

    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data);
            })
    }, [movieId]);

    return (
        <div className="movie-form-container">
            <img className="movie-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="movie-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="movie-form">
                    <div className="form-group movie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" placeholder="e-mail@email.com" />
                    </div>
                    <div className="form-group movie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-select" id="score">
                        <option selected>Selecione uma nota</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="movie-form-btn-container">
                        <button type="submit" className="btn btn-primary movie-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">
                    <button className="btn btn-primary movie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    )
}

export default FormCard;