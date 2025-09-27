import React from 'react';
import './SubscriptionButton.css';

const SubscriptionButton = ({ onClick }) => {
    return (
        <button className="subscription-button" onClick={onClick}>
            Suscribirme
        </button>
    );
};

export default SubscriptionButton;