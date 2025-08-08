import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import {
  FaUserCircle,
  FaTachometerAlt,
  FaUsers,
  FaChartPie,
  FaCogs,
  FaTrash,
  FaEnvelope,
  FaCalendarAlt, FaHome
} from "react-icons/fa";

const DashboardLayout = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const isSuperAdmin = user?.user_type === "super_admin";

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          minHeight: "100vh",
          backgroundColor: "#366000",
          color: "white",
          padding: "1rem",
        }}
      >
        <h4 className="text-white mb-4">YUCCA LTD</h4>
        <Nav className="flex-column">
          <NavLink to="/admin" className="nav-link text-white">
            <FaTachometerAlt className="me-2" /> Overview
          </NavLink>
          <NavLink to="/admin/users" className="nav-link text-white">
            <FaUsers className="me-2" /> Users
          </NavLink>
          <NavLink to="/admin/bookings" className="nav-link text-white">
            <FaCalendarAlt className="me-2" /> Bookings
          </NavLink>
          <NavLink to="/admin/services" className="nav-link text-white">
            <FaChartPie className="me-2" /> Services
          </NavLink>
          <NavLink to="/admin/messages" className="nav-link text-white">
            <FaEnvelope className="me-2" /> Messages
          </NavLink>
          
          <NavLink to="/admin/homepage/media" className="nav-link text-white">
          <FaHome className="me-2" />Home
          </NavLink>
        
         
         
          {isSuperAdmin && (
            <NavLink to="/admin/admins" className="nav-link text-white">
              <FaCogs className="me-2" /> Manage Admins
            </NavLink>
            
          )}
        </Nav>
      </div>

      {/* Main Content */}
      <div style={{ flexGrow: 1 }}>
        <Navbar expand="lg" className="px-3 d-flex justify-content-between" style={{backgroundColor:'#afc296ff'}}>
          <Container fluid className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <h5 className="me-3 mb-0">Welcome</h5>
              <FaUserCircle className="me-2" size={28} />
              <span className="fw-semibold">{user?.email}</span>
            </div>
            <Dropdown align="end">
              <Dropdown.Toggle variant="light" id="dropdown-user">
                Account
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate("/admin/profile")}>Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={onLogout} className="text-danger">
                  <FaTrash className="me-2" /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Navbar>

        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

// import React from "react";
// import '../../styles/dash.css'
// import { Outlet, NavLink, useNavigate } from "react-router-dom";
// import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
// import {
//   FaUserCircle,
//   FaTachometerAlt,
//   FaUsers,
//   FaChartPie,
//   FaCogs,
//   FaTrash,
//   FaEnvelope,
//   FaCalendarAlt,
//   FaHome,
// } from "react-icons/fa";

// const DashboardLayout = ({ user, onLogout }) => {
//   const navigate = useNavigate();
//   const isSuperAdmin = user?.user_type === "super_admin";

//   return (
//     <div className="d-flex">
//       {/* Sidebar */}
//       <div
//         style={{
//           width: "250px",
//           minHeight: "100vh",
//           backgroundColor: "#366000",
//           color: "white",
//           padding: "1rem",
//         }}
//       >
//         <h4 className="text-white mb-4">YUCCA LTD</h4>
//         <Nav className="flex-column">
//           <NavLink to="/admin" className="sidebar-link">
//             <FaTachometerAlt className="me-2" /> Overview
//           </NavLink>
//           <NavLink to="/admin/users" className="sidebar-link">
//             <FaUsers className="me-2" /> Users
//           </NavLink>
//           <NavLink to="/admin/bookings" className="sidebar-link">
//             <FaCalendarAlt className="me-2" /> Bookings
//           </NavLink>
//           <NavLink to="/admin/services" className="sidebar-link">
//             <FaChartPie className="me-2" /> Services
//           </NavLink>
//           <NavLink to="/admin/messages" className="sidebar-link">
//             <FaEnvelope className="me-2" /> Messages
//           </NavLink>

//           <h6 className="mt-4 text-uppercase text-white-50">Homepage Management</h6>
//           <NavLink to="/admin/homepage/intro" className="sidebar-link">
//             <FaHome className="me-2" /> Intro Section
//           </NavLink>
//           <NavLink to="/admin/homepage/sections" className="sidebar-link">
//             <FaHome className="me-2" /> Content Sections
//           </NavLink>
//           <NavLink to="/admin/homepage/media" className="sidebar-link">
//             <FaHome className="me-2" /> Media
//           </NavLink>

//           {isSuperAdmin && (
//             <NavLink to="/admin/admins" className="sidebar-link">
//               <FaCogs className="me-2" /> Manage Admins
//             </NavLink>
//           )}
//         </Nav>
//       </div>

//       {/* Main Content */}
//       <div style={{ flexGrow: 1 }}>
//         <Navbar bg="light" expand="lg" className="px-3">
//           <Container fluid className="d-flex justify-content-between align-items-center">
//             <div className="d-flex align-items-center">
//               <h5 className="me-3 mb-0">Welcome</h5>
//               <FaUserCircle className="me-2" size={28} />
//               <span className="fw-semibold">{user?.email}</span>
//             </div>

//             <Dropdown align="end">
//               <Dropdown.Toggle variant="light" id="dropdown-user">
//                 Account
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item onClick={() => navigate("/admin/profile")}>
//                   Profile
//                 </Dropdown.Item>
//                 <Dropdown.Divider />
//                 <Dropdown.Item onClick={onLogout} className="text-danger">
//                   <FaTrash className="me-2" /> Logout
//                 </Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </Container>
//         </Navbar>

//         <main className="p-4">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
