import React, { useEffect, useState } from 'react';
import './MovieList.css';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('https://servidor-web-cloudinary-despliegue-production.up.railway.app/api/admin/movies', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Error al obtener películas');
                }

                const data = await response.json();
                setMovies(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="movie-list-container">
            <h2>🎬 Lista de Películas Cargadas</h2>

            {loading && <p>Cargando películas...</p>}
            {error && <p className="error-msg">{error}</p>}

            {!loading && !error && (
                <table className="movie-table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Género</th>
                            <th>Duración</th>
                            <th>Poster</th>
                            <th>Video</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie.id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.duration_minutes} min</td>
                                <td>
                                    {movie.poster_url && (
                                        <img src={movie.poster_url} alt="Poster" width="60" />
                                    )}
                                </td>
                                <td>
                                    {movie.video_url ? (
                                        <a href={movie.video_url} target="_blank" rel="noreferrer">
                                            Ver video
                                        </a>
                                    ) : (
                                        'N/A'
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MovieList;