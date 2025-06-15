import React from 'react';
import './CapabilityCard.css';

const CapabilityCard = ({ title, description, icon }) => {
  return (
    <div className="capability-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CapabilityCard;