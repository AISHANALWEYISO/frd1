import React from 'react';
import '../styles/products.css'
import prdimg from '../images/prdimg.jpeg';

import maizeImage from '../images/maise.jpeg';
import beansImage from '../images/beans.jpg';
import soyaImage from '../images/soya.jpeg';
import riceImage from '../images/rice.jpeg';

const Products = () => {
  const productData = [
    { name: 'Maize Seeds', image: maizeImage },
    { name: 'Beans Seeds', image: beansImage },
    { name: 'Soya Seeds', image: soyaImage },
    { name: 'Rice Seeds', image: riceImage },
  ];

  return (
    <div>
      <div className="banner-container">
        <img src={prdimg} alt="Products Banner" className="banner-image" />
        <div className="banner-text">Our Products</div>
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          {productData.map((product, index) => (
            <div key={index} className="col-md-3 col-sm-6 text-center mb-4">
              <div className="product-circle">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <h5 className="mt-3">{product.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

