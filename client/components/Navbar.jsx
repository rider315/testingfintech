// import { NavLink } from "react-router-dom";
// import "./Navbar.css";

// import { useAuth } from "../src/store/auth";

// export const Navbar = () => {
//     const { isLoggedIn } = useAuth();
//   return (
//     <>
//       <header>
//         <div className="container">
//           <div className="logo-brand">
//             <NavLink to="/">Rider Infinity</NavLink>
//           </div>

//           <nav>
//             <ul>
//               <li>
//                 <NavLink to="/"> Home </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/about"> About </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/service"> Services </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/contact"> Contact </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/homeblog"> Blogs </NavLink>
//               </li>

//               {isLoggedIn ? (
//                 <li>
//                   <NavLink to="/logout"> Logout </NavLink>
//                 </li>
//               ) : (
//                 <>
//                   <li>
//                     <NavLink to="/register"> Register </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/login"> Login </NavLink>
//                   </li>
//                 </>
//               )}
//             </ul>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// };


import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../src/store/auth";
import { useState } from "react";

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
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/" onClick={closeMenu}>Rider Infinity</NavLink>
          </div>

          <nav className={isMenuOpen ? "nav-open" : ""}>
            <ul>
              <li>
                <NavLink to="/" onClick={closeMenu}> Home </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={closeMenu}> About </NavLink>
              </li>
              <li>
                <NavLink to="/service" onClick={closeMenu}> Services </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeMenu}> Contact </NavLink>
              </li>
              <li>
                <NavLink to="/homeblog" onClick={closeMenu}> Blogs </NavLink>
              </li>
              <li>
                <NavLink to="/privacypolicy" onClick={closeMenu}> Privacy Policy </NavLink>
              </li>

              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout" onClick={closeMenu}> Logout </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register" onClick={closeMenu}> Register </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" onClick={closeMenu}> Login </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </header>
    </>
  );
};


