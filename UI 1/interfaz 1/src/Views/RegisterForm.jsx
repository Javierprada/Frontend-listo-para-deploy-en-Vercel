import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../Views/RegisterForm.css';




function RegisterForm () {

  const navigate = useNavigate();



  const [formData, setFormData] = useState({

    nombres: '',
    apellidos: '',
    correo_electronico: '',
    contraseña: ''

  });



  const handleChange = async (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });


  };



  const handleRegister = async (e) => {

    e.preventDefault();

    try {
      const response = await fetch ('https://servidor-web-cloudinary-despliegue-production.up.railway.app/api/Pure_Cinema_Feel/register', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },

        body: JSON.stringify(formData)

      });


      const result = await response.json();

      if (response.ok) {
        alert('Registro éxitoso');
        navigate('/login'); // Redirige al login

      } else {
        alert(`Error: ${result.error || 'Error en el registro'}`);

      }



    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Error de conexión con el servidor')
    }


  };




  return(

    <div className='primary-container'>



          <video className='full-screen-background-video' autoPlay loop muted playsInline >
              <source src='https://res.cloudinary.com/c1030/video/upload/v1759001170/Black_fondo_uodrtg.mp4' type='video/mp4'/>

          </video>
        


            



          <div className='register-content'>

            <video className='video-background-register' autoPlay loop muted playsInline >
              <source src='https://res.cloudinary.com/c1030/video/upload/v1759001100/Obras_de_arte_hrwaae.mp4' type='video/mp4'/>

            </video>


            <h2 className='Text-h2'>
            <img  className='img-p'  src='/IMG/Filmico 1.png' alt='Filmico' ></img>
              
            Registrate</h2>

            <form className='register-card' onSubmit={handleRegister}>

                <input data-testid="name-input"  className='register-input' type='text' placeholder='nombres' name='nombres' value={formData.nombres} onChange={handleChange} required/>
                <input data-testid="lastname-input"  className='register-input' type='text' placeholder='apellidos' name='apellidos' value={formData.apellidos} onChange={handleChange} required />
                <input data-testid="email-input" className='register-input' type='email' placeholder='correo_electronico' name='correo_electronico' value={formData.correo_electronico} onChange={handleChange} required />
                <input data-testid="password-input" className='register-input' type='password' placeholder='constraseña' name='contraseña' value={formData.contraseña} onChange={handleChange} required />
                <button className='test-hover-btn' type='submit'>Crear Cuenta</button>
            

            </form>

            

          </div>



    </div>
    
  );


}

export default RegisterForm;