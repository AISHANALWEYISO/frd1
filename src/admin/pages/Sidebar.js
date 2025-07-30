// import React from 'react';
// import { NavLink ,useNavigate } from 'react-router-dom';
// import { FaUserPlus, FaUsers, FaSeedling, FaConciergeBell, FaCalendarAlt, FaUser , FaSignOutAlt} from 'react-icons/fa';

// const Sidebar = () => {
//   const linkClass = ({ isActive }) => (isActive ? 'nav-link active text-white' : 'nav-link text-white');
//   const navigate = useNavigate();

// const logout = () => {
//   localStorage.removeItem('token');  // clear auth token
//   navigate('/login');                 // redirect to login page
// };

//   return (
//     <div className="bg-success text-white p-3" style={{ minHeight: '100vh', width: '250px' }}>
//       <h4 className="text-center mb-4">Admin Panel</h4>
//       <nav className="nav flex-column">
//         <NavLink to="/admin" end className={linkClass}>
//           <FaUser className="me-2" /> Dashboard
//         </NavLink>
//         <NavLink to="/admin/add-user" className={linkClass}>
//           <FaUserPlus className="me-2" /> Add User
//         </NavLink>
//         <NavLink to="/admin/show-user" className={linkClass}>
//           <FaUsers className="me-2" /> Show Users
//         </NavLink>
//         <NavLink to="/admin/products" className={linkClass}>
//           <FaSeedling className="me-2" /> Products
//         </NavLink>
//         <NavLink to="/admin/services" className={linkClass}>
//           <FaConciergeBell className="me-2" /> Services
//         </NavLink>
//         <NavLink to="/admin/bookings" className={linkClass}>
//           <FaCalendarAlt className="me-2" /> Bookings
//         </NavLink>
//         <NavLink to="/admin/farmers" className={linkClass}>
//           <FaUser className="me-2" /> Farmers
//         </NavLink>
//           <button onClick={logout} className="btn btn-danger mt-4 w-100">
//           <FaSignOutAlt className="me-2" /> Logout
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="bg-dark text-white p-3" style={{ minHeight: '100vh', width: '200px' }}>
      <h4>Admin Panel</h4>
      <ul className="nav flex-column">
        <li><Link className="nav-link text-white" to="dashboard">Dashboard</Link></li>
        <li><Link className="nav-link text-white" to="add-user">Add User</Link></li>
        <li><Link className="nav-link text-white" to="show-user">Show Users</Link></li>
           <Link className="nav-link text-white" to="/admin/products">Products</Link>
        <Link className="nav-link text-white" to="/admin/services">Services</Link>
        <Link className="nav-link text-white" to="/admin/bookings">Bookings</Link>
        <Link className="nav-link text-white" to="/admin/farmers">Farmers</Link>
        <li><button onClick={handleLogout} className="btn btn-outline-light mt-3">Sign Out</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;
