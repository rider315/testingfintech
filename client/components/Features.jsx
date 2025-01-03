// Features.jsx
import React from 'react';
import { Shield, TrendingUp, Clock, Users } from 'lucide-react';
import './Features.css';

export const Features = () => {
  const features = [
    {
      icon: <Shield className="feature-icon-color" />,
      title: 'Secured Investments',
      description: 'Your investments are backed by high-quality assets and thoroughly vetted.'
    },
    {
      icon: <TrendingUp className="feature-icon-color" />,
      title: 'High Returns',
      description: 'Earn attractive returns through carefully curated investment opportunities.'
    },
    {
      icon: <Clock className="feature-icon-color" />,
      title: 'Regular Payouts',
      description: 'Receive timely interest payments directly to your bank account.'
    },
    {
      icon: <Users className="feature-icon-color" />,
      title: 'Expert Support',
      description: '24/7 support from our team of investment experts.'
    }
  ];

  return (
    <div className="features-container">
      <div className="features-content-wrapper">
        <div className="features-header">
          <h2 className="features-title">Why Choose WintWealth</h2>
          <p className="features-subtitle">
            We provide a secure platform for high-yield investments
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-bg">
                {feature.icon}
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;