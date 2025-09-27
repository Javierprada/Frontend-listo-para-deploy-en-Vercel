import { useEffect, useState } from 'react';
import './MovieGallery.css';


function MovieGallery() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://servidor-web-cloudinary-despliegue-production.up.railway.app/api/admin/movies', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setMovies(data.movies);
        console.log("Películas cargadas:", data.movies); 
      }
    };
    fetchMovies();
  }, []);



  const getFullUrl = (url) => {
    return url.startsWith('http') ? url : `https://servidor-web-cloudinary-despliegue-production.up.railway.app${url}`;
  };



  return (
    <div>


        <div className='video-background-gallery' >

          <video className='video-gallery' autoPlay loop muted playsInline >
            <source src="public/Videos/Black fondo.mp4" type='video/mp4' />

          </video>

        </div>




        <div className='img-h2'>

            <img className='img' src="public/IMG/Filmico 1.png" alt='Filmico 1' ></img>
            <h2>Galería de Películas</h2>


        </div>



      
        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={getFullUrl(movie.poster_url)}
                alt={movie.title}
                className="movie-poster"
              />
              <h4 className='h-4' >{movie.title}</h4>
              <button onClick={() => setSelectedMovie(movie)}>▶ Ver</button>
            </div>
          ))}
        </div>

        {selectedMovie && (
          <div data-testid="movie-player" className="modal-overlay">
            <div className="player-container">
              <video
                src={getFullUrl(selectedMovie.video_url)}
                controls
                controlsList='nodownload'
                onContextMenu={(e)=> e.preventDefault()}
                autoPlay
              />
              <button onClick={() => setSelectedMovie(null)} className="close-button">
                ❌ Closed
              </button>
            </div>
          </div>
        )}


    </div>
  );
}

export default MovieGallery;