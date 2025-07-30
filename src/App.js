import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/contact';
import Services from './components/service';
import Products from './components/products';
import OurTeam from './components/team';
import Nav from './components/nav';
import Footer from './components/footer';
import Booking from './components/Booking';

import Adminboard from './admin/adminboard';
import AddUser from './admin/pages/AddUser';
import ShowUsers from './admin/pages/ShowUsers';

function AppWrapper() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Nav />}
      <div className={!isAdminRoute ? 'container mt-4' : 'p-0'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/our-team" element={<OurTeam />} /> 
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/booking" element={<Booking />} /> {/* Fixed duplicate route */}

          {/* Admin dashboard route */}
          <Route path="/admin" element={<Adminboard />}>
            <Route index element={<h2>Welcome to Admin Dashboard</h2>} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="show-user" element={<ShowUsers />} />
          </Route>
        </Routes>
      </div>
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;

