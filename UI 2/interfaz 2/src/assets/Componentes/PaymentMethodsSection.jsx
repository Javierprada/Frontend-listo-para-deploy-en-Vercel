import React from "react";
import './PaymentMethodsSection.css';
import SecurityMessage from './SecurityMessage';
import PaymentOption from './PaymentOption';
import CreditCardLogos from './CreditCardLogos';
import VirtualWalletLogos from './VirtualWalletLogos';
import ActionIndicator from './ActionIndicator';
import payPal from '../../Imagenes/PayPal.png';

const PayPalLogo = () => (
    <img src={payPal} alt="PayPal" className="paypal-logo" />
);

function PaymentMethodsSection () {
    return(
        <div className="payment-methods-section">
            <SecurityMessage/>
            <div className="payment-option-list">
                <PaymentOption
                    title="Tarjeta de credito / debito"
                    logos={<CreditCardLogos/>}
                    ActionIndicator={<ActionIndicator/>}
                />
                <PaymentOption
                title="PayPal"
                logos={<PayPalLogo/>}
                ActionIndicator={<ActionIndicator/>}
                />

                <PaymentOption
                    title="Billeteras digitales"
                    logos={<VirtualWalletLogos/>}
                    ActionIndicator={<ActionIndicator/>}
                />



            </div>
        </div>
    );
};










export default PaymentMethodsSection;