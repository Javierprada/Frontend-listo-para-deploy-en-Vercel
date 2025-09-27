import React, { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './ProfileAdmin.css';



 const admin = {
    name: 'Profile-Admin',
    photo: '/IMG/Admin.jpg', 
  };


const ProfileAdmin = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

 

  const handleEdit = (user) => {
    alert(`Editar usuario: ${user.name}`);
  };

  const handleDelete = (userId) => {
    const confirmDelete = window.confirm('¿Estás seguro que deseas eliminar este usuario?');
    if (confirmDelete) {
      alert(`Usuario con ID ${userId} eliminado (simulado)`);
    }
  };






  useEffect(() => {
    fetch('https://servidor-web-cloudinary-despliegue-production.up.railway.app/api/users', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setUsers(data.data);
          setFilteredUsers(data.data); // Inicializa también los filtrados
          setError('');
        } else {
          setError('❌ Error al obtener los usuarios del servidor.')
        }
      })
      .catch(error => {
        console.error('Error al cargar usuarios del servidor:', error);
        setError('No se pudo cargar la lista de usuarios');
      });
  
  }, []);




  useEffect(() =>{
    if (searchTerm === '') {
      setFilteredUsers(users);
    }
      
  }, [searchTerm, users])





  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    const results = users.filter((user) =>
        (`${user.nombres} ${user.apellidos}`)?.toLowerCase().includes(term) ||
        user.correo_electronico?.toLowerCase().includes(term) ||
        user.id === parseInt(term.trim())||
        user.rol?.toLowerCase().includes(term.trim())
    );
    setFilteredUsers(results);
  };

  return (


        <div>


              <video className='background-video-admin' autoPlay muted loop playsInline >
                <source src='public/Videos/Black fondo.mp4' type='video/mp4' />

              </video>



              <div className="profile-admin-container">





                <div className="admin-card">
                  <img src={admin.photo} alt="Foto del administrador" className="admin-photo" />
                  <h2 className="admin-name">🎬 {admin.name}</h2>
                  <button className="gallery-button" onClick={() => navigate('/movie-gallery')}>
                    📽 Ir a Galería de Películas
                  </button>
                </div>

                <div className="user-table-section">
                  <h3 className='h3' >👥 Lista de Usuarios</h3>
                  {error && <p className="error-message">{error}</p>}

                  <div className="search-container">
                    <input
                      type="text"
                      placeholder="Buscar por nombre, email o ID..."
                      className="search-input"
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch} className="search-button">🔍 Buscar</button>
                  </div>

                <table className="user-table">
                  <thead className='thead' >
                    <tr>
                      <th>Nombres</th>
                      <th>correo_electronico</th>
                      <th>ID</th>
                      <th>Rol</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody className='tbody' >
                    {filteredUsers.length === 0 ? (
                      <tr>
                        <td colSpan="5" style={{ textAlign: 'center' }}>🔍 No se encontraron usuarios.</td>
                      </tr>
                    
                    ) : filteredUsers.map(user => (
                      <tr className='tr'  key={user.id}>
                        <td>{user.nombres} {user.apellidos} </td>
                        <td>{user.correo_electronico}</td>
                        <td>{user.id}</td>
                        <td>{user.rol}</td>
                        <td>
                          <button className="b-edit" onClick={() => handleEdit(user)}>
                          <span role="img" aria-label="edit">✏️</span>
                          <span>Editar</span></button>
                          <button className="b-delete" onClick={() => handleDelete(user._id)}>
                          <span role="img" aria-label="edit">🗑 </span>
                          <span>Eliminar</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
          </div>







          
        </div>


    
  );
};

export default ProfileAdmin;