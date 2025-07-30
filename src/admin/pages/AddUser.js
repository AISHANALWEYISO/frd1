// import React from 'react'
// import {Form,Button,Alert} from 'react-router-dom'
// import {Form,Button,Alert} from 'react-bootstrap'
import React, { useState } from 'react';
import axios from 'axios'; // only if you're using axios to submit data
import { Form, Button, Alert } from 'react-bootstrap';


const AddUser = () => {
    const [form, setForm] = useState({ name: '', email: '', contact: '', password: '',usertype: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:5000/api/v1/auth/register', form);
      setMessage('User added successfully!');
      setForm({ name: '', email: '', contact: '', password: '',usertype:''});
    } catch (err) {
      setMessage('Error adding user');
    }
  };
  return (
  <div className="p-4">
      <h4>Add User</h4>
      {message && <Alert variant="info">{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={form.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
        </Form.Group>

         <Form.Group className="mb-3">
          <Form.Label>Contact</Form.Label>
          <Form.Control type="contact" name="contact" value={form.contact} onChange={handleChange} required />
        </Form.Group>

         <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={form.password} onChange={handleChange} required />
        </Form.Group>

          <Form.Group className="mb-3">
          <Form.Label>usertype</Form.Label>
          <Form.Control  name="usertype" value={form.usertype} onChange={handleChange} required />
        </Form.Group>

        <Button type="submit" variant="primary">Add User</Button>
      </Form>
    </div>
  )
}

export default AddUser