// src/Componentes/ComparisonTable.jsx

import React from 'react';
import './ComparisonTable.css';
import FeatureRow from './FeatureRow';
import PlanTitle from './PlanTitle'; 
import SubscriptionButton from './SubscriptionButton';
import AvailabilityNote from './AvailabilityNote';

function ComparisonTable() {
  return (
    <div className="comparison-table-grid">
    
        
      {/* Fila 1: Encabezados (Características y Títulos de Planes) */}
      <div className="grid-cell feature-header-cell">
        <h3 className="feature-name-header">CARACTERISTICAS</h3>
      </div>
      <div className="grid-cell plan-header-cell basic-plan-column">
        <PlanTitle title="BÁSICO" />
        <div className="plan-title-line"></div>
      </div>
      <div className="grid-cell plan-header-cell premium-plan-column">
        <PlanTitle title="PREMIUM" /> 
        <div className="plan-title-line"></div>
      </div>

      {/* Fila 2: Pantallas simultáneas */}
      <div className="grid-cell feature-cell">
        <FeatureRow featureName="Pantallas simultáneas" />
      </div>
      <div className="grid-cell plan-value-cell basic-plan-column">1</div>
      <div className="grid-cell plan-value-cell premium-plan-column">5</div>

      {/* Fila 3: Nº perfiles */}
      <div className="grid-cell feature-cell">
        <FeatureRow featureName="Nº perfiles" />
      </div>
      <div className="grid-cell plan-value-cell basic-plan-column">3</div>
      <div className="grid-cell plan-value-cell premium-plan-column">5</div>

      {/* Fila 4: Resolución */}
      <div className="grid-cell feature-cell">
        <FeatureRow featureName="Resolución" />
      </div>
      <div className="grid-cell plan-value-cell basic-plan-column">1080</div>
      <div className="grid-cell plan-value-cell premium-plan-column">4K + HDR</div>

      {/* Fila 5: Audio Envolvente */}
      <div className="grid-cell feature-cell">
        <FeatureRow featureName="Audio Envolvente" />
      </div>
      <div className="grid-cell plan-value-cell basic-plan-column">No</div>
      <div className="grid-cell plan-value-cell premium-plan-column">Sí <span role="img" aria-label="wave">📶</span></div>

      {/* Fila 6: Botones de Suscripción */}
      <div className="grid-cell empty-cell"></div> 
      <div className="grid-cell button-cell basic-plan-column">
        <SubscriptionButton text="Suscribirme" />
      </div>
      <div className="grid-cell button-cell premium-plan-column">
        <SubscriptionButton text="Suscribirme" />
      </div>

      {/* Fila 7: Nota de disponibilidad (ocupa todo el ancho) */}
      <div className="grid-cell availability-note-cell" style={{ gridColumn: '1 / -1' }}>
        <AvailabilityNote text="Disponible solo para colombia" />
      </div>

    </div>
  );
}

export default ComparisonTable;