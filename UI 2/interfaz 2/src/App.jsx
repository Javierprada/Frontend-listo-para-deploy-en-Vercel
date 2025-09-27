import React from "react";
//import './App.css'; // Estilos globales
import PaymentSelectionHeader from "./assets/Componentes/PaymentSelectionHeader";
import PaymentMethodsSection from "./assets/Componentes/PaymentMethodsSection";



function App(){
  return(
    <div className="payment-selection-page">
      <PaymentSelectionHeader/>
      <PaymentMethodsSection/>
    </div>
  )
}




export default App;
