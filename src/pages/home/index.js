import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get("discover/movie", {
                params:{
                    api_key: "f43ccdb229bd661d7fb9f7b09432cb97",
                    language: "en-US",
                    page: 1,
                }
            })
            setMovies(response.data.results.slice(0,10))
        }
        loadMovies();
    }, [])
    
    return(
        <div className="container">
        <div className="movie-list">
            {movies.map((movie) => {
                return(
                    <article key={movie.id}>
                        <strong>{movie.title}</strong>
                        <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                        <div className="acessLink">
                            <Link to={`/details/${movie.id}`}>Acessar</Link>
                        </div>
                    </article>
                )
            })}
        </div>
        </div>
    )
}

export default Home;