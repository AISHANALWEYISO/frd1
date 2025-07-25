import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const Products = () => {
  // You can add state and API calls here later for full CRUD
  return (
    <div>
      <h2>Manage Products</h2>
      <Button variant="success" className="mb-3">
        <FaPlus /> Add Product
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace with dynamic rows */}
          <tr>
            <td>1</td>
            <td>Sample Product</td>
            <td>Type A</td>
            <td>100</td>
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

export default Products;
