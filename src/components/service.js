
// // import { Container, Row, Col, Card } from 'react-bootstrap';
// import { motion } from 'framer-motion';


// // Image imports
// import farm from '../images/farm managent.jpeg';
// import value from '../images/value.jpeg';
// import ser from '../images/ser.jpg';
// import goats from '../images/goats.jpg';
// import market from '../images/market work.jpg';
// import training from '../images/training.jpeg';

// const services = [
//   {
//     title: 'Soil Health Improvement',
//     description: 'We assess and improve soil fertility using eco-friendly approaches for sustainable farming.',
//     img: ser,
//   },
//   {
//     title: 'Farmer Training & Capacity Building',
//     description: 'Training programs that equip farmers with knowledge on modern and smart agriculture.',
//     img: training,
//   },
//   {
//     title: 'Value Chain Development',
//     description: 'We strengthen agricultural value chains from production to post-harvest to marketing.',
//     img: value,
//   },
//   {
//     title: 'Farmer Registration & Data Systems',
//     description: 'Digital farmer profiling and records for better service delivery and planning.',
//     img: farm,
//   },
//   {
//     title: 'Extension Services',
//     description: 'We offer agronomic and livestock advisory services both physically and digitally.',
//     img: goats,
//   },
//   {
//     title: 'Market Access Support',
//     description: 'Linking farmers to reliable markets to ensure profitability and reduce post-harvest losses.',
//     img: market,
//   },
// ];

// const Services = () => {
//   return (
//     <Container className="my-5">
//       {/* Animated Page Title */}
//       <motion.h2
//         className="text-center fw-bold mb-4"
//         style={{
//           borderBottom: '3px solid #366000',
//           display: 'inline-block',
//           paddingBottom: '5px',
//         }}
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//            We offer a wider range of services to support farmers and agribusiness
//       </motion.h2>

//       {/* Services Grid with Animations */}
//       <Row className="mt-4 g-4">
//         {services.map((service, index) => (
//           <Col md={4} sm={6} key={index}>
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Card className="h-100 border-0 shadow-sm rounded-4">
//                 <Card.Img
//                   variant="top"
//                   src={service.img}
//                   alt={service.title}
//                   style={{ height: '200px', objectFit: 'cover', borderRadius: '15px' }}
//                 />
//                 <Card.Body>
//                   <Card.Title className="fw-bold" style={{color:'#366000'}}>{service.title}</Card.Title>
//                   <Card.Text>{service.description}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </motion.div>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Services;

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Briefcase, BarChart, Globe, Gear, Droplet, Shield, Truck, Layers, People } from 'react-bootstrap-icons';
import Booking from './Booking';
const services = [
  {
    title: 'Crop Management',
    icon: <Briefcase size={40} color="#366000" />,
    description: 'Advising on crop selection, planting, irrigation, fertilization, and pest management.',
  },
  {
    title: 'Soil Analysis and Management',
    icon: <Layers size={40} color="#366000" />,
    description: 'Conducting soil tests, providing recommendations on soil health, and suggesting amendments.',
  },
  {
    title: 'Precision Agriculture',
    icon: <BarChart size={40} color="#366000" />,
    description: 'Implementing technologies like GPS, drones, and sensors to optimize crop yields and reduce waste.',
  },
  {
    title: 'Sustainability Consulting',
    icon: <Globe size={40} color="#366000" />,
    description: 'Guiding on sustainable practices, environmental assessments, and compliance with regulations.',
  },
  {
    title: 'Farm Management',
    icon: <Gear size={40} color="#366000" />,
    description: 'Providing advice on farm operations, financial planning, and risk management.',
  },
  {
    title: 'Irrigation Management',
    icon: <Droplet size={40} color="#366000" />,
    description: 'Designing and optimizing irrigation systems to conserve water and improve crop yields.',
  },
  {
    title: 'Pest and Disease Management',
    icon: <Shield size={40} color="#366000" />,
    description: 'Identifying pests and diseases, recommending control measures, and implementing IPM strategies.',
  },
  {
    title: 'Farm Mechanization',
    icon: <Truck size={40} color="#366000" />,
    description: 'Advising on farm equipment selection, maintenance, and optimization.',
  },
  {
    title: 'Market Analysis and Access',
    icon: <BarChart size={40} color="#366000" />,
    description: 'Providing market research, analysis, and guidance on improving marketability.',
  },
  {
    title: 'Capacity Building and Training',
    icon: <People size={40} color="#366000" />,
    description: 'Offering training and capacity-building programs for farmers and agricultural professionals.',
  },
];

const Services = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4" style={{ color: '#366000' }}>Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Card style={{ height: '100%', border: '1px solid #d0e2c5' }}>
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <div className="mb-3">{service.icon}</div>
                  <Card.Title style={{ color: '#366000' }}>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </div>
                <div className="mt-3">
                  <Link to="/booking">
                    <Button variant="success" style={{ backgroundColor: '#366000', borderColor: '#366000' }}>
                      Book Now
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
