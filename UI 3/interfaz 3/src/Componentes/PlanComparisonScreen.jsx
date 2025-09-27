import React from 'react';
import './PlanComparisonScreen.css'; 
import PlansHeader from './PlansHeader';
import ComparisonTable from './ComparisonTable';

function PlanComparisonScreen() {
  return (
    <div className="plan-comparison-container">
      <PlansHeader />
      <ComparisonTable />
    </div>
  );
}

export default PlanComparisonScreen;