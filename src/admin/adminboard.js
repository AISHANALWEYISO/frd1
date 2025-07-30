<<<<<<< HEAD
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../admin/pages/Sidebar";
import AddUser from "../admin/pages/AddUser";
import ShowUsers from "../admin/pages/ShowUsers";
import { Routes, Route } from 'react-router-dom';
import Products from '../admin/pages/products'
=======
// import React from 'react';
// import { Routes, Route, Navigate} from 'react-router-dom';
// import Sidebar from '../admin/pages/Sidebar';
// import AddUser from '../admin/pages/AddUser';
// import ShowUsers from '../admin/pages/ShowUsers';
// import Products from '../admin/pages/products';
// import Services from '../admin/pages/services';
// import Bookings from '../admin/pages/bookings';
// import Farmers from '../admin/pages/farmers';

// const DashboardHome = () => (
//   <div>
//     <h2>Welcome to the Admin Dashboard</h2>
//   </div>
// );

// const Adminboard = () => {


// // Inside Adminboard component:
// const token = localStorage.getItem('token');
// if (!token) {
//   // redirect to login if no token
//   return <Navigate to="/login" replace />;
// }

//   return (
//     <div className="d-flex">
//       <Sidebar />
//       <main className="w-100 p-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
//         <Routes>
//           <Route path="/" element={<DashboardHome />} />
//           <Route path="add-user" element={<AddUser />} />
//           <Route path="show-user" element={<ShowUsers />} />
//           <Route path="products" element={<Products />} />
//           <Route path="services" element={<Services />} />
//           <Route path="bookings" element={<Bookings />} />
//           <Route path="farmers" element={<Farmers />} />
//         </Routes>
//       </main>
//     </div>
//   );
// };

// export default Adminboard;
// src/admin/AdminBoard.js
>>>>>>> 8da101011cdfe3362edf8b8012cca9d97b5e2c07

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import { isAuthenticated } from './utils/auth';

const AdminBoard = () => {
  if (!isAuthenticated()) return <Navigate to="/admin/login" replace />;

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
        <Outlet />
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Adminboard;
=======
export default AdminBoard;
>>>>>>> 8da101011cdfe3362edf8b8012cca9d97b5e2c07
