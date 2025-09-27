import React from 'react';
import './FeatureRow.css';

const FeatureRow = ({ featureName, basicValue, premiumValue }) => {
    return (
        <div className="feature-row">
            <div className="feature-name">{featureName}</div>
            <div className="feature-value-basic">{basicValue}</div>
            <div className="feature-value-premium">{premiumValue}</div>
        </div>
    );
};

export default FeatureRow;