import { useEffect, useState } from 'react';
import './UploadMovie.css';

function UploadMovie() {
  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    genre: '',
    director: '',
    actors: '',
    release_date: '',
    duration_minutes: '',
    trailer_url: '',
    video: null,
    poster: null
  });

  const fetchMovies = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/admin/movies', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      if (data.success) {
        setMovies(data.movies);
      }
    } catch (error) {
      console.error('❌ Error al cargar películas:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = new FormData();
    for (const key in formData) {
      dataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch('http://localhost:8080/api/admin/movies', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
          // fetch lo gestiona con FormData el 'Content-Type' .
        },
        body: dataToSend
      });

      const result = await response.json();
      if (result.success) {
        alert('🎬 Película añadida con éxito');
        fetchMovies();
      } else {
        alert('⚠️ Error al subir película');
      }
    } catch (error) {
      console.error('❌ Error al subir película:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar esta película?')) return;

    try {
      const res = await fetch(`http://localhost:8080/api/admin/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      if (data.success) {
        alert('🗑 Película eliminada');
        fetchMovies();
      }
    } catch (error) {
      console.error('❌ Error al eliminar película:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>🎞 Subir nueva película</h2>
      <form className="upload-form" onSubmit={handleSubmit} encType="multipart/form-data">

        <input name="title" placeholder="Título" value={formData.title} onChange={handleChange} required />
        <input name="description" placeholder="Descripción" value={formData.description} onChange={handleChange} />
        <input name="genre" placeholder="Género" value={formData.genre} onChange={handleChange} />
        <input name="director" placeholder="Director" value={formData.director} onChange={handleChange} />
        <input name="actors" placeholder="Actores" value={formData.actors} onChange={handleChange} />
        <input name="release_date" type="date" value={formData.release_date} onChange={handleChange} />
        <input name="duration_minutes" type="number" placeholder="Duración (min)" value={formData.duration_minutes} onChange={handleChange} />
        <input name="trailer_url" placeholder="URL del tráiler (opcional)" value={formData.trailer_url} onChange={handleChange} />
        <input type="file" name="video" accept="video/*" required onChange={handleChange} />
        <input type="file" name="poster" accept="image/*" required onChange={handleChange} />
       
        <button type="submit">📤 Subir Película</button>
      </form>

      <h3>🎬 Películas subidas</h3>
      <table className="movies-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Género</th>
            <th>Duración</th>
            <th>Director</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.duration_minutes} min</td>
              <td>{movie.director}</td>
              <td>
                <button className="btn-edit"  onClick={() => handleEdite(movie)}>✏️ Editar </button>
                <button className="btn-delete" onClick={() => handleDelete(movie.id)}>🗑 Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UploadMovie;