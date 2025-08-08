import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { FaTrash, FaPlus } from 'react-icons/fa';
import { getToken } from '../utils/auth'; // JWT token utility

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', image: null });

  // Fetch products
  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/v1/products/', {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setProducts(response.data.products || []);
    } catch (error) {
      console.error('Failed to fetch products:', error.response?.data || error.message);
    }
  };

  // Add product
  const handleAddProduct = async () => {
    const formData = new FormData();
    formData.append('name', newProduct.name);
    formData.append('category', newProduct.category);
    if (newProduct.image) {
      formData.append('image', newProduct.image);
    }

    try {
      await axios.post('http://127.0.0.1:5000/api/v1/products/create', formData, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      fetchProducts();
      setShowAddModal(false);
      setNewProduct({ name: '', category: '', image: null });
    } catch (error) {
      console.error('Error adding product:', error.response?.data || error.message);
    }
  };

  // Delete product
  const handleDeleteProduct = async (productId) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      await axios.delete(`http://127.0.0.1:5000/api/v1/products/delete/${productId}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error.response?.data || error.message);
    }
  };

  // Load products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Product Management</h2>
      <Button className="mb-3" variant="success" onClick={() => setShowAddModal(true)}>
        <FaPlus /> Add Product
      </Button>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Image</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.product_id}>
                <td>{p.product_id}</td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>
                  {p.image ? (
                    <img
                      src={`http://127.0.0.1:5000/uploads/${p.image}`}
                      alt={p.name}
                      width="60"
                      height="60"
                      style={{ objectFit: 'cover', borderRadius: '5px' }}
                    />
                  ) : (
                    'No Image'
                  )}
                </td>
                <td>{new Date(p.created_at).toLocaleString()}</td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => handleDeleteProduct(p.product_id)}>
                    <FaTrash /> Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Add Product Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.files[0] })}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddProduct}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminProducts;
