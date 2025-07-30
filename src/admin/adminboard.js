import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../admin/pages/Sidebar";
import AddUser from "../admin/pages/AddUser";
import ShowUsers from "../admin/pages/ShowUsers";
import { Routes, Route } from 'react-router-dom';
import Products from '../admin/pages/products'



const Adminboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100 p-4">
        <Routes>
          <Route path="/" element={<h2>Welcome to the Admin Dashboard</h2>} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/show-users" element={<ShowUsers />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
};

export default Adminboard;