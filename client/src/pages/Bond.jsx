import React from 'react';

const Bond = ({ bond }) => {
  // Check if the bond is a UserBond and if it has the availableBond populated
  const displayIssuer = bond.issuer ? bond.issuer : (bond.availableBond ? bond.availableBond.issuer : 'N/A');
  const displayInterestRate = bond.interestRate ? (bond.interestRate * 100).toFixed(2) : (bond.availableBond ? (bond.availableBond.interestRate * 100).toFixed(2) : 'N/A');
  const displayMaturityDate = bond.maturityDate ? new Date(bond.maturityDate).toLocaleDateString() : (bond.availableBond ? new Date(bond.availableBond.maturityDate).toLocaleDateString() : 'N/A');

  return (
    <div className="bond-card">
      <h3>Bond Details</h3>
      <p>Issuer: {displayIssuer}</p>
      <p>Purchase Price: {bond.purchasePrice}</p>
      <p>Interest Rate: {displayInterestRate}%</p>
      <p>Maturity Date: {displayMaturityDate}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default Bond;