import React from 'react';
import './PlansHeader.css';
import Filmico1 from './Imagenes/Filmico 1.png';

const PlansHeader = () => {
    return (
        <div className="plans-header">
            
            <img src={Filmico1} alt="Filmico" className='plans-header-icon'></img>
            <h2 className="plans-header-title">Eligé Tu Plan</h2>
        </div>
    );
};

export default PlansHeader;