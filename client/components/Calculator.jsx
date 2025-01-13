import React, { useState, useEffect } from 'react';
import { Calculator as CalculatorIcon } from 'lucide-react';
import './Calculator.css'; // Import the CSS file

const Calculator = () => {
  const [amount, setAmount] = useState(10000);
  const [tenure, setTenure] = useState(12);
  const [rate, setRate] = useState(12);
  const [returns, setReturns] = useState(0);

  useEffect(() => {
    const monthlyRate = rate / 12 / 100;
    const totalReturns = amount * monthlyRate * tenure;
    setReturns(totalReturns);
  }, [amount, tenure, rate]);

  return (
    <div className="calculator-container">
      <div className="calculator-header">
        <CalculatorIcon className="calculator-icon" />
        <h3 className="calculator-title">Investment Calculator</h3>
      </div>

      <div className="calculator-input-group">
        <label className="calculator-label">
          Investment Amount (₹)
        </label>
        <input
          type="range"
          min="5000"
          max="1000000"
          step="5000"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="calculator-range"
        />
        <div className="calculator-amount-display">
          ₹{amount.toLocaleString()}
        </div>
      </div>

      <div className="calculator-input-group">
        <label className="calculator-label">
          Tenure (months)
        </label>
        <input
          type="range"
          min="3"
          max="60"
          step="3"
          value={tenure}
          onChange={(e) => setTenure(parseInt(e.target.value, 10))}
          className="calculator-range"
        />
        <div className="calculator-tenure-display">
          {tenure} months
        </div>
      </div>

      <div className="calculator-input-group">
        <label className="calculator-label">
          Interest Rate (%)
        </label>
        <input
          type="range"
          min="6"
          max="15"
          step="0.5"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="calculator-range"
        />
        <div className="calculator-rate-display">
          {rate}%
        </div>
      </div>

      <div className="calculator-results">
        <div className="calculator-returns-label">Total Returns</div>
        <div className="calculator-returns-amount">
          ₹{Math.round(returns).toLocaleString()}
        </div>
        <div className="calculator-returns-description">
          Over {tenure} months at {rate}% per annum
        </div>
      </div>
    </div>
  );
};

export default Calculator;