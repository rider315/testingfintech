import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Navbar } from "../components/Navbar";
import { Error } from "./pages/Error";
import { Footer } from "../components/Footer/Footer";
import { Logout } from "./pages/Logout";
import { AdminLayout } from "../components/layouts/Admin-Layout";
import { AdminUsers } from "./pages/Admin-Users";
import { AdminContacts } from "./pages/Admin-Contacts";
import { AdminUpdate } from "./pages/Admin-Update";
import { Blog } from "./pages/Blog";
import { Blogpost } from "./pages/Blogpost";
import { Homeblog } from "./pages/Homeblog";
import { Privacypolicy } from "./pages/Privacypolicy";
import {AvailableBonds} from "./pages/AvailableBonds"; // Update import path
// Import the new Portfolio page
import { Portfolio } from "./pages/Portfolio"; // Update import path
import { useAuth } from "./store/auth"; // Import useAuth hook

// import AdSense from "../components/AdSense";

import AdSenseScript from "../components/AdSenseScript";

const App = () => {
  const { isLoggedIn } = useAuth(); // Use the useAuth hook to check login status

  return (
    <>
      <div>
        {/* <AdSense/> */}
        <AdSenseScript />

        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/privacypolicy" element={<Privacypolicy />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Error />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/homeblog" element={<Homeblog />} />
            <Route path="/blog/:slug" element={<Blogpost />} />
            <Route path="/bonds" element={<AvailableBonds />} /> {/* Add route for AvailableBonds */}

            {/* Protected route for Portfolio */}
            <Route
              path="/portfolio"
              element={isLoggedIn ? <Portfolio /> : <Navigate to="/login" />}
            />

            <Route path="/admin" element={<AdminLayout />}>
              <Route path="users" element={<AdminUsers />} />
              <Route path="contacts" element={<AdminContacts />} />
              <Route path="users/:id/edit" element={<AdminUpdate />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;