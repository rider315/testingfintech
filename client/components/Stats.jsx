// Stats.jsx
import React from 'react';
import './Stats.css';

export const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stats-content-wrapper">
        <div className="stats-grid">
          <div className="stats-item">
            <div className="stats-value">₹1000Cr+</div>
            <div className="stats-label">Assets Under Management</div>
          </div>
          <div className="stats-item">
            <div className="stats-value">50,000+</div>
            <div className="stats-label">Happy Investors</div>
          </div>
          <div className="stats-item">
            <div className="stats-value">12%</div>
            <div className="stats-label">Average Returns</div>
          </div>
          <div className="stats-item">
            <div className="stats-value">100%</div>
            <div className="stats-label">Secured Investments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;