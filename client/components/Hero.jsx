// Hero.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

export const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content-wrapper">
        <div className="hero-grid">
          <div className="hero-text-container">
            <h1 className="hero-title">
              Invest in High-Yield Fixed Income Securities
            </h1>
            <p className="hero-subtitle">
              Start your journey towards financial freedom with secured investments that offer attractive returns.
            </p>
            <div className="hero-buttons">
              <button className="hero-primary-button">
                Start Investing <ArrowRight className="hero-button-icon" />
              </button>
              <button className="hero-secondary-button">
                Learn More
              </button>
            </div>
          </div>
          <div className="hero-image-container">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Investment"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;