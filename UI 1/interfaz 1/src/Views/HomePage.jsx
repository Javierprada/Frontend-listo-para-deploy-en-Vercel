import {useNavigate} from 'react-router-dom';

import '../Views/HomePage.css';


function HomePage () {
    const navigate = useNavigate();


    const handleLoginClick = () => navigate('login');
    const handleRegisterClick = () => navigate('register');


    return(
        <div className='movie-details-container' >

            
            <video className='background-video-1' autoPlay loop muted playsInline>
                <source src="https://res.cloudinary.com/c1030/video/upload/v1759001170/Black_fondo_uodrtg.mp4" type='video/mp4' />
            </video>


            


            <div className='content'>


                



                <div className='Card-shadow'>
                    <h1>INICIA TU EXPERIENCIA</h1>



                    <video className='video-hall' autoPlay loop muted playsInline>

                    <source src="https://res.cloudinary.com/c1030/video/upload/v1759001512/obras_de_arte_astrales_ofl7qa.mp4" type='video/mp4'/>

                    </video>



                    <div className='button-group' >


                        <button className='iniciar-sesión' onClick={handleLoginClick}>

                        <svg xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 -960 960 960" width="24px"><path d="M560-280v-80h80v-480H160v120H80v-120q0-33 23.5-56.5T160-920h480q33 0 56.5 23.5T720-840v180l160-160v440L720-540v180q0 33-23.5 56.5T640-280h-80ZM178-160q-17 0-31.5-6.5T121-184L0-304l14-14q9-9 20-13.5t22-4.5q12 0 23 4.5T98-318l22 22v-294q0-13 9-21.5t21-8.5q13 0 21.5 8.5T180-590v150h40v-210q0-13 9-21.5t21-8.5q13 0 21.5 8.5T280-650v210h40v-170q0-13 9-21.5t21-8.5q13 0 21.5 8.5T380-610v170h40v-130q0-13 9-21.5t21-8.5q13 0 21.5 8.5T480-570v330q0 33-23 56.5T400-160H178Zm462-680v480-480Z"/></svg>

                        Iniciar Sesión
                        </button>

                        <button className='btn-register' onClick={handleRegisterClick}>

                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-240Zm-320 80v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q37 0 73 4.5t72 14.5l-67 68q-20-3-39-5t-39-2q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32h240v80H160Zm400 40v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-340L683-120H560Zm300-263-37-37 37 37ZM620-180h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19ZM480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Z"/></svg>

                        Registrarme
                        </button>


                    </div>



                </div>



            </div>

        </div>
    );

}

export default HomePage;

