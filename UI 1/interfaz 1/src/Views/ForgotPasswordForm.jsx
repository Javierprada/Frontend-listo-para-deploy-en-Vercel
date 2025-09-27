import { useState } from "react";
import '../Views/ForgotPasswordForm.css';





function ForgotPasswordForm() {

    

    const [correo_electronico, setEmail] = useState ('');


    const handleSubmit = async (e) => {

        e.preventDefault();



        try {

            const response = await fetch('https://servidor-web-cloudinary-despliegue-production.up.railway.app/api/Pure_Cinema_Feel/forgot-password', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({correo_electronico: correo_electronico})
            });

            const result = await response.json();
            if (response.ok) {
                alert('Hemos enviado un enlace a tu correo electrónico para restablecer tu contraseña.');

            } else {
                alert(result.message || 'Ocurrio un error.');
            
            } 


        
        } catch (error) {
                console.error('Error al solicitar el restablecimiento:', error);
                alert('Error de conexión.');
            }




    };



    return(

        <div className="ForgotPasswordForm" >
           

            

            <div className="forgot-card" >
                <h2>Restablecimiento de contraseña.</h2>

                <form onSubmit={handleSubmit}>

                <input
                
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    value={correo_electronico}
                    onChange={(e) => setEmail(e.target.value)}
                
                />

                <button type="submit">Enviar enlace.</button> 

                </form>


            </div>




        </div>


    );






}

export default ForgotPasswordForm;