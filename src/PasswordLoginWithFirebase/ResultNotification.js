import React from 'react';
import './ResultNotification.css';  // Ensure styles are applied

const ResultNotification = ({ result, onClose }) => {
    return (
        <div className="result-notification">
            <div className="result-content">
                <h2>Calories Burnt prediction : </h2>
                <p>{result}</p>  {/* Display the result */}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ResultNotification;