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
// import Booking from './components/booking'
import Footer from './components/footer';
import Booking from './components/Booking';
// for an admin dash board
import Login from './admin/pages/login';
import AdminBoard from './admin/adminboard';
import Dashboard from './admin/pages/dashboard';
import AddUser from './admin/pages/AddUser';
import ShowUsers from './admin/pages/ShowUsers';
import Farmers from './admin/pages/farmers'
import Bookings from './admin/pages/bookings'
import Product from './admin/pages/products'
import Service from './admin/pages/services'

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
          <Route path="/booking" element={<Booking />} />          

          {/* Admin dashboard and nested routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/*" element={<AdminBoard />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="show-user" element={<ShowUsers />} />
          <Route path="products" element={<Product />} />
          <Route path="services" element={<Service />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="farmers" element={<Farmers />} />

        
          

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

