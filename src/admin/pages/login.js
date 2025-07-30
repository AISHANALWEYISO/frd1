// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [error, setError] = useState(null);

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setError(null);
//     try {
//       const res = await axios.post('http://127.0.0.1:5000/api/v1/auth/login', form);
//       // Assuming backend returns token in res.data.token
//       localStorage.setItem('token', res.data.token);
//       navigate('/admin');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: 'auto', paddingTop: 50 }}>
//       <h2>Admin Login</h2>
//       {error && <div className="alert alert-danger">{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label>Email</label>
//           <input 
//             type="email" 
//             name="email" 
//             value={form.email} 
//             onChange={handleChange} 
//             className="form-control" 
//             required 
//           />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input 
//             type="password" 
//             name="password" 
//             value={form.password} 
//             onChange={handleChange} 
//             className="form-control" 
//             required 
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// src/admin/pages/Login.js

import React, { useState } from 'react';
import api from '../utils/api';
import { saveToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('http://127.0.0.1:5000/api/v1/auth/login', { email, password });
      saveToken(res.data.access_token);
      navigate('/admin'); // Navigate to AdminBoard
    } catch (err) {
      alert('Invalid login');
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Admin Login</h3>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="btn btn-success w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
