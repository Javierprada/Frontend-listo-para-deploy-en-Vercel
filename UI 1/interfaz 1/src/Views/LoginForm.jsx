import {useNavigate} from 'react-router-dom';
import '../Views/LoginForm.css';
import {useState} from 'react';






function LoginForm () {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();








    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('https://servidor-web-cloudinary-despliegue-production.up.railway.app/api/Pure_Cinema_Feel/login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email, password})

            
            });

            const data = await response.json();

            if (!response.ok){
                setError(data.message || 'Error al iniciar sesión.');
                return;
            }

            // Guardar el token en localStorage
            localStorage.setItem('token', data.token);

            alert(data.message); // Mensaje de éxito.
            navigate('/admin-dashboard'); // La ruta del dashboard

        } catch (error) {
            console.error('Error en el login', error);
            setError('No se pudo conectar con el servidor')
        }



    };



    return(
        
        <div className='video-background-palms'>


            <video className='video-bg' autoPlay loop muted playsInline>

                <source src='https://res.cloudinary.com/c1030/video/upload/v1759001139/Blue_Purple_er9dzo.mp4' type='video/mp4'/>

            </video>


            <div className='login-container'>

            
            

            <form className='content-card'  onSubmit={handleLogin}>

                

                <h2 className='login-content-h2' >Iniciar Sesión</h2>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <input data-testid="email-input" className='login-input'  type='email' placeholder='correo electrónico' required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input data-testid="password-input" className='login-input'  type='password' placeholder='contraseña' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                
                <button className='btn-entrar'   type='submit'>
                    
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="35px" ><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>
                  Entrar  
                </button>


                    <p className='register-link' > ¿No tienes una cuenta? <button onClick={() => navigate('/register')} className='p-register'>Registrate</button> </p> 
                    <p className='register-link' > ¿Olvido su contraseña? <button onClick={() => navigate('/Restablecimiento')} className='forgot-password'>Restablecimiento</button> </p> 
            </form>


            </div>


        </div>
        
    );

}


export default LoginForm;
