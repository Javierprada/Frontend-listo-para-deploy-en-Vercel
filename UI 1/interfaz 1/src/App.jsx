import { Routes, Route } from 'react-router-dom';
import HomePage from './Views/HomePage';
import LoginForm from './Views/LoginForm';

import RegisterForm from './Views/RegisterForm';
import './Styles_globals/App.css'; 
import ForgotPasswordForm from './Views/ForgotPasswordForm';
import AdminDashboard from './Views/AdminDashboard';
import UploadMovie from './Views/UploadMovie';
import MovieGallery from './Views/MovieGallery';
import ProfileAdmin from './Views/profileAdmin';













function App() {
  return(
   
      <div className='App'>
       
          <Routes>

            <Route path='/' element={<HomePage/>} /> {/* Ruta para la pagina de inicio*/}
            <Route path='/login' element={<LoginForm/>} /> {/* Ruta para la pagina de login*/}
            <Route path='/admin-dashboard' element={<AdminDashboard/>} /> {/* Ruta para la pagina de login*/}
            <Route path='/register' element={<RegisterForm/>} /> {/* Ruta para la pagina de registro*/}
            <Route path='/upload-movie' element={<UploadMovie/>} /> {/* Ruta para la pagina de registro*/}
            <Route path='/restablecimiento' element={<ForgotPasswordForm/>} /> {/* Ruta para la pagina de restablecimiento de contraseña*/}
            <Route path='/movie-gallery' element={<MovieGallery/>} />
            <Route path='/profileAdmin' element={<ProfileAdmin/>} />

          </Routes>
      

      </div>
   
  )




}









export default App;








