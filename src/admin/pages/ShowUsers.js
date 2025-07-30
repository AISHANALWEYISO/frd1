// // import {React,useEffect} from 'react'
// import {Table} from 'react-bootstrap'
// import axios from 'axios'
// import React, { useState, useEffect } from 'react';



// const ShowUsers = () => {
//     const [users, setUsers] = useState([]);
//     useEffect(() => {
//     axios.get('http://127.0.0.1:5000/api/v1/auth/register')
//       .then(res => setUsers(res.data))
//       .catch(err => console.error(err));
//   }, []);
//   return (
//     <div>
//         <div className="p-4">
//       <h4>All Users</h4>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Password</th>
//             <th>Contact</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((u, index) => (
//             <tr key={u.id}>
//               <td>{index + 1}</td>
//               <td>{u.name}</td>
//               <td>{u.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//     </div>
//   )
// }

// export default ShowUsers
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';

const ShowUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:5000/api/v1/admin/users');
      setUsers(res.data);
    } catch (err) {
      setError('Failed to fetch users');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async id => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      await axios.delete(`http://127.0.0.1:5000/api/v1/admin/users/${id}`);
      setMessage('User deleted successfully!');
      fetchUsers();
    } catch (err) {
      setError('Failed to delete user');
    }
  };

  return (
    <div>
      <h2>All Users</h2>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <Table striped bordered hover>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>User Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center">No users found</td>
            </tr>
          )}
          {users.map(({ id, first_name, last_name, email, contact, usertype }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{first_name} {last_name}</td>
              <td>{email}</td>
              <td>{contact}</td>
              <td>{usertype}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => handleDelete(id)}>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ShowUsers;
