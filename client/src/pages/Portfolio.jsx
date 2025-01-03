import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import Bond from "./Bond"; // Import the Bond component (assuming it's in components)

export const Portfolio = () => {
  const { user, authorizationToken, API } = useAuth();
  const [bonds, setBonds] = useState([]);

  useEffect(() => {
    const fetchUserBonds = async () => {
      try {
        console.log("User:", user); // Log user data
        console.log("Authorization Token:", authorizationToken); // Log token

        const response = await fetch(`${API}/api/bonds/user-bonds`, {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Bonds from server:", data.bonds); // Log data from server
          setBonds(data.bonds);
          console.log("Bonds state:", bonds); // Log updated state
        } else {
          console.error("Failed to fetch bonds");
        }
      } catch (error) {
        console.error("Error fetching bonds:", error);
      }
    };

    if (user) {
      fetchUserBonds();
    }
  }, [user, authorizationToken, API]);

  return (
    <div>
      {/* Check if user data is available before rendering */}
      {user && <h1>{user.username}'s Portfolio</h1>}

      {/* Display a loading message while fetching data */}
      {bonds.length === 0 && <p>Loading bonds...</p>}

      {/* Display bonds using the Bond component */}
      {bonds.map((bond) => (
        <Bond key={bond._id} bond={bond} />
      ))}
    </div>
  );
};