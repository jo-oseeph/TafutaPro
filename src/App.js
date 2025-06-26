
import {   Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Services from './pages/Service';
import Contact from './pages/Contact';
import CategoryPage from "./pages/CategoryPage";
import ProviderProfile from "./pages/ProviderProfile";
import ProviderDashboard from "./pages/ProviderDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";


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
          <Route path="/Signup" element={<Signup />} />
          <Route path="/services/:category" element={<CategoryPage />} />
          <Route path="/provider/:id" element={<ProviderProfile />} />
          <Route path="/provider-dashboard" element={<ProviderDashboard />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          
     
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
