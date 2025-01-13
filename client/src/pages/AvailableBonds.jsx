import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import "./AvailableBonds.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const AvailableBonds = () => {
  const [availableBonds, setAvailableBonds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { authorizationToken, API, isLoggedIn } = useAuth(); // Destructure isLoggedIn, remove user
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchAvailableBonds = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API}/api/bonds/available`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAvailableBonds(data.bonds);
      } catch (error) {
        console.error("Error fetching available bonds:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAvailableBonds();
  }, [API]); // Removed isLoggedIn and navigate from dependency array

  const handleInvest = async (bondId) => {
    if (!isLoggedIn) { // Check isLoggedIn here
      console.log("User not logged in. Redirecting to login to invest.");
      navigate('/login'); // Redirect to login if not logged in when trying to invest
      return;
    }

    console.log("Authorization Token being sent for investment:", authorizationToken);

    try {
      const response = await fetch(`${API}/api/bonds/invest`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify({ availableBondId: bondId, investmentAmount: 1 }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Investment successful:", data);

      setAvailableBonds((prevBonds) =>
        prevBonds.map((bond) =>
          bond._id === bondId
            ? { ...bond, availableUnits: bond.availableUnits - 1 }
            : bond
        )
      );
    } catch (error) {
      console.error("Error investing in bond:", error);
      // Handle investment error
    }
  };

  if (loading) {
    return <p>Loading available bonds...</p>;
  }

  if (error) {
    return <p>Error fetching available bonds: {error.message}</p>;
  }

  return (
    <div className="available-bonds-container">
      <h2>Available Bonds</h2>
      <p>Discover high-yield investment opportunities</p>
      <div className="bonds-grid">
        {availableBonds.map((bond) => (
          <div key={bond._id} className="bond-card">
            <h3>{bond.issuer}</h3>
            <p>Interest Rate: {(bond.interestRate * 100).toFixed(2)}%</p>
            <p>Tenure: {bond.tenure}</p>
            <p>Min Investment: ₹{bond.minInvestment}</p>
            <p>Available Units: {bond.availableUnits}</p>
            <p>Risk Level: {bond.riskLevel}</p>
            <button
              className="invest-button"
              onClick={() => handleInvest(bond._id)}
            >
              Invest Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableBonds;