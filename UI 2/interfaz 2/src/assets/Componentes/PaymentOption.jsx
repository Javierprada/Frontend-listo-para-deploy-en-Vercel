import React from 'react';
import './PaymentOption.css';

function PaymentOption({ title, logos, actionIndicator }) {
  return (
    <div className="payment-option">
      <span className="payment-option-title">{title}</span>
      <div className="payment-option-details">
        <div className="payment-option-logos">
          {logos}
        </div>
        {actionIndicator}
      </div>
    </div>
  );
}

export default PaymentOption;