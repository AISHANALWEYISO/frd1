
import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import image2 from '../images/image2.jpg';
import ser from '../images/ser.jpg';
import goats from '../images/goats.jpg';
import postharvest from '../images/posthavest.jpg';
import man from '../images/man.jpg';
import food from '../images/food.jpg';
import irrigation from '../images/irrigation.jpg';
// import value from '../images/value.jpeg';


const Home = () => {
  const slideTexts = [
    {
      heading: (
        <Typewriter
          words={['Yucca Consulting Limited']}
          loop={1}
          cursor
          cursorStyle=""
          typeSpeed={70}
          deleteSpeed={0}
          delaySpeed={1000}
        />
      ),
      subtext: 'Cultivating a sustainable world',
    },
    {
      heading: 'Monitoring and evaluation of small-scale farming practices',
    
    },
    {
      heading: ' crop management and food resilience',
      
    },
  ];

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Carousel fade controls={false} indicators interval={2500}>
        {[image2, man, food].map((img, index) => (
          <Carousel.Item key={index}>
            <div
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '1400px',
                margin: 0,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                className="p-4 text-center"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: '10px',
                  maxWidth: '90%',
                  color: 'white',
                }}
              >
                <h1 className="fw-bold mb-3" style={{ fontSize: '3rem' }}>
                  {slideTexts[index].heading}
                </h1>
                <p className="fst-italic fs-4">{slideTexts[index].subtext}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Intro */}
     {/* Intro Section with image and overlapping text box */}
<Container fluid className="my-5">
  <Row className="align-items-center justify-content-center">
    <Col
      md={6}
      className="position-relative"
      style={{ zIndex: 2 }}
    >
      <div
        className="p-4"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '15px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          position: 'relative',
          marginLeft: '2rem',
          marginRight: '-4rem',
        }}
      >
        <h5 className="fst-italic mb-2" style={{ color: '#366000' }}>
          We are your agricultural partner
        </h5>
        <p style={{ fontSize: '1.1rem' }}>
          Empowering farmers, communities, organizations to adopt sustainable
          practices, technologies and innovations that drive economic growth,
          environmental stewardship and social well-being.
        </p>
      </div>
    </Col>
    <Col md={6}>
      <img
        src={irrigation} // You can use any image you'd like
        alt="Farming Support"
        className="img-fluid rounded-4"
        style={{
          maxHeight: '400px',
          objectFit: 'cover',
          width: '100%',
        }}
      />
    </Col>
  </Row>
</Container>


      {/* Dealers In */}
      <Container className="my-5 text-center">
        <h4 className="fw-bold" style={{ borderBottom: '3px solid #366000', display: 'inline-block', paddingBottom: '5px' }}>
          Dealers in
        </h4>
        <Row className="mt-4 g-4 justify-content-center">
          {[{ img: ser, title: 'Soil Fertility', text: 'Improves soil fertility through sustainable farming practices.' },
            { img: goats, title: 'Breeding Practices', text: 'Advises on best breeds for environment and goals.' },
            { img: postharvest, title: 'Post-harvest', text: 'Improves post-harvest processes to reduce loss and enhance quality.' }].map((item, idx) => (
              <Col md={4} sm={6} key={idx}>
                <Card className="p-3 h-100 rounded-3 border-0 shadow-sm animate__animated animate__fadeInUp">
                  <Card.Img variant="top" src={item.img} style={{ borderRadius: '20px', height: '180px', objectFit: 'cover' }} alt={item.title} />
                  <Card.Body>
                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>

{/* Our Interventions */}
<Container className="my-5 text-center">
  <h4
    className="fw-bold"
    style={{
      borderBottom: '3px solid #366000',
      display: 'inline-block',
      paddingBottom: '5px',
    }}
  >
    OUR INTERVENTIONS
  </h4>
  <Row className="mt-4 g-4 justify-content-center">
    {[{
      img: man,
      title: 'Strategic commodities',
      text: 'Provision of planting materials to boost productivity.',
    },
    {
      img: food,
      title: 'Promoting Food Security',
      text: 'Ensuring access to adequate food through innovations.',
    },
    {
      img: irrigation,
      title: 'Irrigation Access',
      text: 'Providing sustainable water solutions for farming.',
    }].map((item, i) => (
      <Col md={4} sm={6} key={i}>
        <Card className="border-0 h-100 shadow-sm">
          <Card.Img
            src={item.img}
            alt={item.title}
            style={{
              height: '250px',
              objectFit: 'cover',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px',
            }}
          />
          <div
            className="text-white text-start px-3 py-3"
            style={{
              backgroundColor: '#366000',
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
            }}
          >
            <h5 className="fw-bold mb-1">{item.title}</h5>
            <p className="mb-0">{item.text}</p>
          </div>
        </Card>
      </Col>
    ))}
  </Row>
</Container>


      {/* Partners */}
      <Container className="my-5 text-center">
        <h4 className="fw-bold" style={{ borderBottom: '3px solid #366000', display: 'inline-block', paddingBottom: '5px' }}>
          OUR PARTNERS
        </h4>
        <Row className="mt-4">
          <Col md={6} className="fw-bold">
            <p>BLESSED TREE PLANTER AND AGRO DISTRIBUTORS LTD</p>
            <p>NEST AGRO CONSULTING LTD</p>
          </Col>
          <Col md={6} className="fw-bold">
            <p>SPROUTING LILIES ENTERPRISES LTD</p>
            <p>TERICHA FARMERS COOPERATIVE</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;







