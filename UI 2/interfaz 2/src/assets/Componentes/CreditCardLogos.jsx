import React from 'react';
import './CreditCardLogos.css';

function CreditCardLogos() {
  return (
    <div className="credit-card-logos">
      
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="card-logo" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png" alt="Mastercard" className="card-logo" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/2560px-American_Express_logo_%282018%29.svg.png" alt="Amex" className="card-logo" />
      
    </div>
  );
}

export default CreditCardLogos;