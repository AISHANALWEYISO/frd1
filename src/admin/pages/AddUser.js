// // import React from 'react'
// // import {Form,Button,Alert} from 'react-router-dom'
// // import {Form,Button,Alert} from 'react-bootstrap'
// import React, { useState } from 'react';
// import axios from 'axios'; // only if you're using axios to submit data
// import { Form, Button, Alert } from 'react-bootstrap';


// const AddUser = () => {
//     const [form, setForm] = useState({ first_name: '',last_name: '', email: '', contact: '', password: ''  });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://127.0.0.1:5000/api/v1/auth/register', form);
//       setMessage('User added successfully!');
//       setForm({ first_name: '',last_name: '', email: '', contact: '', password: '' });
//     } catch (err) {
//       setMessage('Error adding user');
//     }
//   };
//   return (
//   <div className="p-4">
//       <h4>Add User</h4>
//       {message && <Alert variant="info">{message}</Alert>}
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>first_name</Form.Label>
//           <Form.Control type="text" first_name="first_name" value={form.first_name} onChange={handleChange} required />
//         </Form.Group>

//          <Form.Group className="mb-3">
//           <Form.Label>last_name</Form.Label>
//           <Form.Control type="text" last_name="last_name" value={form.last_name} onChange={handleChange} required />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
//         </Form.Group>

//          <Form.Group className="mb-3">
//           <Form.Label>Contact</Form.Label>
//           <Form.Control type="contact" name="contact" value={form.contact} onChange={handleChange} required />
//         </Form.Group>

//          <Form.Group className="mb-3">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" name="password" value={form.password} onChange={handleChange} required />
//         </Form.Group>

//           <Form.Group className="mb-3">
//           <Form.Label>usertype</Form.Label>
//           <Form.Control  name="usertype" value={form.usertype} onChange={handleChange} required />
//         </Form.Group>

//         <Button type="submit" style={{backgroundColor:'#366000'}}>Add User</Button>
//       </Form>
//     </div>
//   )
// }

// export default AddUser

import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {

  const [form, setForm] = useState({ name: '', email: '', contact: '', password: '' });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    try {
      await axios.post('http://127.0.0.1:5000/api/v1/auth/register', form);
      setMessage('User added successfully!');
      setForm({ name: '', email: '', contact: '', password: '',usertype:''});
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add user');
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact</label>
          <input name="contact" value={form.contact} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} className="form-control" required />
        </div>
        <button className="btn btn-primary" type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
