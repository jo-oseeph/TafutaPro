
import {   Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Services from './pages/Service';
import Contact from './pages/Contact';
import CategoryPage from "./pages/CategoryPage";


function App() {
  return (
  <>
      <Navbar />
      <main className="pt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services/:category" element={<CategoryPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
    </>
  );
}

export default App;
