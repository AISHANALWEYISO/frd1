// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';

// const Footer = () => {
//   return (
//     <footer className="text-white py-4 mt-5" style={{background:'#192618'}}>
//       <Container>
//         <Row>
        
//           <Col md={6}>
//             <h3>Useful Links</h3>
//             <ul className="list-unstyled">
//               <li><a href="/story" className="text-white">our story</a></li>
//               <li><a href="/services" className="text-white">Services</a></li>
//               <li><a href="/contact" className="text-white">Contact</a></li>

//             </ul>
//           </Col>

        
//           <Col md={6} style={{marginRight:'5cm'}}>
//             <h5>Contact Us</h5>
//             <p>Email: <a href="yuccan.consult.ac@gmail.com" className="text-white"> yuccan.consult.ac@gmail.com</a></p>
//             <p>Phone: +256-705570825</p>
//             <p>Address: Namutumba district, 100120. Iganga </p>
//           </Col>
//         </Row>

//         {/* Bottom Footer */}
//         <Row className="mt-3">
//           <Col className="text-center">
//             <small>&copy; {new Date().getFullYear()} Yucca Consulting Limited. All rights reserved.</small>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-white py-4 " style={{ background: '#192618' }}>
      <Container className='mt-1'>
        {/* Useful Links & Contact Info side by side */}
        <Row className="justify-content-center">
          <Col md={5}>
            <h5>Useful Info</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white">Our Story</a></li>
              <li><a href="/services" className="text-white">Services</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </Col>

          <Col md={5} style={{marginLeft:''}}>
            <h5>Contact Us</h5>
            <p>Email: <a href="mailto:yuccan.consult.ac@gmail.com" className="text-white">yuccan.consult.ac@gmail.com</a></p>
            <p>Phone: +256-705570825</p>
            <p>Address: Namutumba district, 100120. Iganga</p>
          </Col>
        </Row>

        {/* Bottom Footer */}
        <Row className="mt-3">
          <Col className="text-center">
            <small>&copy; {new Date().getFullYear()} Yucca Consulting Limited. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

