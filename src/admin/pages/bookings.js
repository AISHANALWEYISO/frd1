import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Bookings = () => {
  return (
    <div>
      <h2>Manage Bookings</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Service</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example static booking */}
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Consulting</td>
            <td>2025-07-23</td>
            <td>Confirmed</td>
            <td>
              <Button variant="warning" size="sm" className="me-2"><FaEdit /></Button>
              <Button variant="danger" size="sm"><FaTrash /></Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Bookings;
