// import { NavLink } from "react-router-dom";
// import "./Navbar.css";
// import { useAuth } from "../src/store/auth";
// import { useState } from "react";

// export const Navbar = () => {
//   const { isLoggedIn } = useAuth();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <>
//       <header>
//         <div className="container">
//           <div className="logo-brand">
//             <NavLink to="/" onClick={closeMenu}>
//               Rider Infinity
//             </NavLink>
//           </div>

//           <nav className={isMenuOpen ? "nav-open" : ""}>
//             <ul>
//               <li>
//                 <NavLink to="/" onClick={closeMenu}>
//                   {" "}
//                   Home{" "}
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/about" onClick={closeMenu}>
//                   {" "}
//                   About{" "}
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/service" onClick={closeMenu}>
//                   {" "}
//                   Services{" "}
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/contact" onClick={closeMenu}>
//                   {" "}
//                   Contact{" "}
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/homeblog" onClick={closeMenu}>
//                   {" "}
//                   Blogs{" "}
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/privacypolicy" onClick={closeMenu}>
//                   {" "}
//                   Privacy Policy{" "}
//                 </NavLink>
//               </li>

//               {/* Conditionally render the Portfolio link */}
//               {isLoggedIn && (
//                 <li>
//                   <NavLink to="/portfolio" onClick={closeMenu}>
//                     Portfolio
//                   </NavLink>
//                 </li>
//               )}

//               {isLoggedIn ? (
//                 <li>
//                   <NavLink to="/logout" onClick={closeMenu}>
//                     {" "}
//                     Logout{" "}
//                   </NavLink>
//                 </li>
//               ) : (
//                 <>
//                   <li>
//                     <NavLink to="/register" onClick={closeMenu}>
//                       {" "}
//                       Register{" "}
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/login" onClick={closeMenu}>
//                       {" "}
//                       Login{" "}
//                     </NavLink>
//                   </li>
//                 </>
//               )}
//             </ul>
//           </nav>
//           <div className="hamburger" onClick={toggleMenu}>
//             <div className="bar"></div>
//             <div className="bar"></div>
//             <div className="bar"></div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../src/store/auth";
import { useState } from "react";
import { Menu, X } from 'lucide-react'; // Import icons

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-content-wrapper">
        <div className="navbar-flex-container">
          <div className="navbar-logo-container">
            <NavLink to="/" onClick={closeMenu} className="navbar-logo">
              Rider Infinity
            </NavLink>
          </div>

          <nav className={`navbar-links-desktop ${isMenuOpen ? 'open' : ''}`}> {/* Apply 'open' class conditionally */}
            <ul className="navbar-links-list"> {/* Add a ul for consistent styling */}
              <li>
                <NavLink to="/" onClick={closeMenu} className="navbar-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={closeMenu} className="navbar-link">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/service" onClick={closeMenu} className="navbar-link">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeMenu} className="navbar-link">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeblog" onClick={closeMenu} className="navbar-link">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacypolicy" onClick={closeMenu} className="navbar-link">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/bonds" onClick={closeMenu} className="navbar-link">
                  Available Bonds
                </NavLink>
              </li>

              {isLoggedIn && (
                <li>
                  <NavLink to="/portfolio" onClick={closeMenu} className="navbar-link">
                    Portfolio
                  </NavLink>
                </li>
              )}

              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout" onClick={closeMenu} className="navbar-link navbar-button navbar-button-primary"> {/* Apply button styles */}
                    Logout
                  </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register" onClick={closeMenu} className="navbar-link navbar-button navbar-button-secondary"> {/* Apply button styles */}
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" onClick={closeMenu} className="navbar-link navbar-button navbar-button-primary"> {/* Apply button styles */}
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>

          <div className="navbar-menu-button-container-mobile">
            <button onClick={toggleMenu} className="navbar-menu-button">
              {isMenuOpen ? <X className="navbar-menu-icon" /> : <Menu className="navbar-menu-icon" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="navbar-menu-dropdown-mobile">
          <div className="navbar-menu-items-mobile">
            <NavLink to="/" onClick={closeMenu} className="navbar-menu-item-mobile">
              Home
            </NavLink>
            <NavLink to="/about" onClick={closeMenu} className="navbar-menu-item-mobile">
              About
            </NavLink>
            <NavLink to="/service" onClick={closeMenu} className="navbar-menu-item-mobile">
              Services
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu} className="navbar-menu-item-mobile">
              Contact
            </NavLink>
            <NavLink to="/homeblog" onClick={closeMenu} className="navbar-menu-item-mobile">
              Blogs
            </NavLink>
            <NavLink to="/privacypolicy" onClick={closeMenu} className="navbar-menu-item-mobile">
              Privacy Policy
            </NavLink>
            {isLoggedIn && (
              <NavLink to="/portfolio" onClick={closeMenu} className="navbar-menu-item-mobile">
                Portfolio
              </NavLink>
            )}
            {isLoggedIn ? (
              <NavLink to="/logout" onClick={closeMenu} className="navbar-menu-item-mobile navbar-menu-button-mobile-primary">
                Logout
              </NavLink>
            ) : (
              <>
                <NavLink to="/register" onClick={closeMenu} className="navbar-menu-item-mobile navbar-menu-button-mobile-secondary">
                  Register
                </NavLink>
                <NavLink to="/login" onClick={closeMenu} className="navbar-menu-item-mobile navbar-menu-button-mobile-primary">
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

