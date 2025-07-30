import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const Services = () => {
  return (
    <div>
      <h2>Manage Services</h2>
      <Button variant="success" className="mb-3">
        <FaPlus /> Add Service
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Service Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example static data */}
          <tr>
            <td>1</td>
            <td>Consulting</td>
            <td>Professional advice</td>
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

export default Services;
