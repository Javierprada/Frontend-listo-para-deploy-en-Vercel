import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './UploadMovie.css';


const initialState = {

  
  

    title: '',
    description: '',
    genre: '',
    director: '',
    actors: '',
    release_date: '',
    duration_minutes: '',
    trailer_url: '',
    existing_video_url: '',
    video: null,
    poster: null,
    
  };



  function UploadMovie(){

    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [formData, setFormData] = useState(initialState);
    const [isEditing, setIsEditing] = useState(false);
    const [editMovieId, setEditMovieId] = useState(null);
    const [uploading, setUploading] = useState(false);




    const fetchMovies = async () => {
    try {
      const response = await fetch('https://servidor-web-cloudinary-despliegue-production.up.railway.app/api/admin/movies', {
        method: 'GET',
        //credentials: 'include',
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


  // ✅ CORRECTO: Manejo del formulario

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };



  // ✅ Submit para crear o editar película
  const handleSubmit = async (e) => {
  e.preventDefault();



  setUploading(true); // Indica que la subida ha comenzado



  const url = isEditing
    ? `https://servidor-web-cloudinary-despliegue-production.up.railway.app/api/admin/update${editMovieId}`
    : 'https://servidor-web-cloudinary-despliegue-production.up.railway.app/api/admin/movies';

  const method = isEditing ? 'PUT' : 'POST';

  try {
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key] !== null){
        formDataToSend.append(key, formData[key]);
      }
      
    }

    const response = await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: formDataToSend,
    });

    const text = await response.text();
    console.log('📥 Respuesta del servidor:', text); 

    try {
      const result = JSON.parse(text); // Intenta convertir a JSON

      if (response.ok) {
        alert(isEditing ? '🎬 Película actualizada' : '🎬 Película cargada y almacenada');
        fetchMovies();
        setIsEditing(false);
        setEditMovieId(null);
        setFormData(initialState);
      } else {
        throw new Error(result.message || 'Error');
      }
    } catch (error) {
      console.error('⚠️ La respuesta no es JSON, probablemente es HTML:', error);
    }
  } catch (error) {
    console.error('❌ Error al subir la película:', error);
  } finally {
    setUploading(false); // Indica que la subida ha terminado
  }
};




  
  










  const handleDelete = async (id) => {
    

    if (!window.confirm('¿Estás seguro de eliminar esta película?')) return;

    try {
      const res = await fetch(`https://servidor-web-cloudinary-despliegue-production.up.railway.app/api/admin/delete/${id}`, {
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



  const handleEdit = (movie) => {
    setFormData({
      title: movie.title,
      description: movie.description,
      genre: movie.genre,
      director: movie.director,
      actors: movie.actors,
      release_date: movie.release_date,
      duration_minutes: movie.duration_minutes,
      video: null,
      poster: null,
      existing_video_url: movie.video_url 
    });
    setIsEditing(true);
    setEditMovieId(movie.id);
  };




  return (
    <div className="dashboard-container">


      <button className='profile-admin' onClick={() => navigate('/profileAdmin')} >
        🧑‍💻 Perfil-Admin
      </button>
      
      <div className='text' >


          <h1 className='h1'>🎬 PANEL DE ADMINISTRACIÓN</h1>
          <h1 className='h1' >Pure Cinema Feel</h1>
          

      </div>

      


      <form className="upload-form" onSubmit={handleSubmit} encType="multipart/form-data">

        <input name="title" placeholder="Título" value={formData.title ||''} onChange={handleChange} required />
        <input name="description" placeholder="Descripción" value={formData.description ||''} onChange={handleChange} />
        <input name="genre" placeholder="Género" value={formData.genre ||''} onChange={handleChange} />
        <input name="director" placeholder="Director" value={formData.director ||''} onChange={handleChange} />
        <input name="actors" placeholder="Actores" value={formData.actors ||''} onChange={handleChange} />
        <input name="release_date" type="date" value={formData.release_date ||''} onChange={handleChange} />
        <input name="duration_minutes" type="number" placeholder="Duración (min)" value={formData.duration_minutes ||''} onChange={handleChange} />
        <input name="trailer_url" placeholder="URL del tráiler (opcional)" value={formData.trailer_url ||''} onChange={handleChange} />
        <input type="file" name="video" accept="video/*" onChange={handleChange} required={!isEditing} />
        <input type="file" name="poster" accept="image/*"  onChange={handleChange} required={!isEditing} />


        {uploading && (
          <div className='loadinContainer'>
            <p>📤 Subiendo película... esto puede tomar varios minutos.</p>
            <div className='loading-spinner'>🔄</div>
          </div>
        )}

        <button className='button-submit'  type="submit" disabled={uploading}> {uploading ? '⏳ Subiendo...' : '📤 Cargar Película'}</button>
      </form>

      
      <div className='title'>
        <img className='img' src="public/IMG/Filmico 1.png" alt="Filmico 1"></img>
        <h3 className='peliculas-subidas' >Películas subidas</h3>
      </div>


      <table className="movies-table">
        <thead className='Headers' >
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
                <button className="btn-edit"  onClick={() => handleEdit(movie)}>✏️ Editar </button>
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