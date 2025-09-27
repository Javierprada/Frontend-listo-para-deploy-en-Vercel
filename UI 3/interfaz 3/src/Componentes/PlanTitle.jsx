import React from 'react';
import './PlanTitle.css';

const PlanTitle = ({ title }) => {
    return (
        <h3 className="plan-title">
            {title}
        </h3>
    );
};

export default PlanTitle;