
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useAuth } from "../store/auth";

// export const Login = () => {
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();
//   const { storeTokenInLS, API } = useAuth();
//   const URL = `${API}/api/auth/login`;

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(user),
//       });

//       const res_data = await response.json();
//       if (response.ok) {
//         toast.success("Login successful");
//         storeTokenInLS(res_data.token);
//         setUser({ email: "", password: "" });
//         navigate("/");
//       } else {
//         toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
//         console.error("Invalid credentials:", res_data);
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <section>
//       <main>
//         <div className="section-registration">
//           <div className="container grid grid-two-cols">
//             <div className="registration-image reg-img">
//               <img
//                 src="/images/login.png"
//                 alt="a nurse with a cute look"
//                 width="400"
//                 height="500"
//               />
//             </div>
//             <div className="registration-form">
//               <h1 className="main-heading mb-3">Login form</h1>
//               <br />
//               <form onSubmit={handleSubmit}>
//                 <div>
//                   <label htmlFor="email">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={user.email}
//                     onChange={handleInput}
//                     placeholder="Enter your email"
//                     id="email"
//                     required
//                     autoComplete="off"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="password">Password</label>
//                   <input
//                     type="password"
//                     name="password"
//                     value={user.password}
//                     onChange={handleInput}
//                     placeholder="Enter your password"
//                     id="password"
//                     required
//                     autoComplete="off"
//                   />
//                 </div>
//                 <br />
//                 <button type="submit" className="btn btn-submit">
//                   Login
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </main>
//     </section>
//   );
// };


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import "./Login.css";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();
  const URL = `${API}/api/auth/login`;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      if (response.ok) {
        toast.success("Login successful");
        storeTokenInLS(res_data.token);
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        console.error("Invalid credentials:", res_data);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image reg-img">
              <img
                src="/images/login.png"
                alt="a nurse with a cute look"
                width="400"
                height="500"
              />
            </div>
            <div className="registration-form">
              <h1 className="main-heading mb-3">Login form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="Enter your email"
                    id="email"
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="Enter your password"
                    id="password"
                    required
                    autoComplete="off"
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

