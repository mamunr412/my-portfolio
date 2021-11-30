import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel, Col, Container, Row } from "react-bootstrap";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className="pt-5" id="project">
      <h1 className="pb-3">My Projects</h1>
      <Container>
        <div className="mt-4">
          <Row>
            <Col sm={12} md={6} className="order-2 order-md-1">
              <div data-aos="fade-right">
                <div>
                  <h3 style={{ margin: "20px 0", textAlign: "left" }}>
                    MotorBike Shop
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    <span style={{ fontSize: "25px" }}>Features: </span>{" "}
                    Motorbike Shop Full-Stack website . Users can order Bikes
                    and check their previous order history with status (pending
                    or approved). This web- site has a functional admin panel
                    with restricted access (only admin can access) section where
                    admin can : <br />
                    1. Add Bike/product, 2. Delete any existing Bike/product, 3.
                    Update the state of customers order, 4 Normal users can give
                    us a review. <br />
                    <span style={{ fontSize: "25px" }}>
                      Technology Used:{" "}
                    </span>{" "}
                    HTML, CSS, Material Ui, Bootstrap, React, React- Router,
                    React- Hook-Form, Node.js, Express.js, Cors, Mongo DB,
                    Firebase, Heroku.
                  </p>
                </div>
                <div style={{ marginRight: "15px" }} className="mt-3">
                  <button
                    style={{
                      padding: "5px 15px",
                      borderRadius: "10px",
                      marginRight: "8px",
                      backgroundColor: "#2a323a",
                      border: "1px solid #d34445",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        fontSize: "22px",
                        color: "white",
                      }}
                      href="https://motorbike-shop-ef850.web.app/home"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Website
                    </a>
                  </button>
                  <button
                    style={{
                      padding: "5px 15px",
                      borderRadius: "10px",
                      marginRight: "8px",
                      backgroundColor: "#2a323a",
                      border: "1px solid #d34445",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        fontSize: "22px",
                        color: "white",
                      }}
                      href="https://github.com/mamunr412/Motorbike-shop-client-"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client Side Code
                    </a>
                  </button>
                  <button
                    style={{
                      padding: "5px 15px",
                      borderRadius: "10px",
                      marginRight: "8px",
                      marginTop: "16px",
                      backgroundColor: "#2a323a",
                      border: "1px solid #d34445",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        fontSize: "22px",
                        color: "white",
                      }}
                      href="https://github.com/mamunr412/MotorBike-shop-server"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Server Side Code
                    </a>
                  </button>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} className="order-1 order-md-2">
              <div className="mt-4" data-aos="fade-left">
                <Carousel fade>
                  <Carousel.Item>
                    <img
                      style={{
                        width: "569px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                      className="d-block w-100 img-fluid"
                      src=" https://i.ibb.co/vcGR4zL/motor.png"
                      alt="First slide"
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{
                        width: "569px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                      className="d-block w-100 img-fluid"
                      src="https://i.ibb.co/8dN3rH6/motor-2.png"
                      alt="Second slide"
                    />

                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{
                        width: "569px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                      className="d-block w-100 img-fluid"
                      src="https://i.ibb.co/j8JsyQG/motor-3.png"
                      alt="Third slide"
                    />

                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{
                        width: "569px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                      className="d-block w-100 img-fluid"
                      src="https://i.ibb.co/WxNcsPK/motor-4.png"
                      alt="Third slide"
                    />

                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{
                        width: "569px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                      className="d-block w-100 img-fluid"
                      src="https://i.ibb.co/NL6ZzRL/motor-5.png"
                      alt="Third slide"
                    />

                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-4">
          <Row>
            <Col sm={12} md={6} className="order-2 order-md-1">
              <div data-aos="fade-right">
                <div>
                  <h3 style={{ margin: "20px 0", textAlign: "left" }}>
                    Path friend Tour
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    <span style={{ fontSize: "25px" }}>Features: </span> An
                    online Travel/tour Full-stack website . Users can order any
                    destination check their previous order history. This website
                    has a functional admin panel section where <br /> 1.
                    Logged-in user can buy any package 2. Add new Tour
                    destination for the users 3. Also, the user can delete any
                    existing destination. <br />
                    <span style={{ fontSize: "25px" }}>Technology Used: </span>•
                    HTML, CSS, Bootstrap, React, React- Router, React Hook-Form,
                    Node.js, Express.
                  </p>
                </div>
                <div style={{ marginRight: "15px" }} className="mt-3">
                  <button
                    style={{
                      padding: "5px 15px",
                      borderRadius: "10px",
                      marginRight: "8px",
                      backgroundColor: "#2a323a",
                      border: "1px solid #d34445",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        fontSize: "22px",
                        color: "white",
                      }}
                      href="https://pathfriend-tour.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Website
                    </a>
                  </button>
                  <button
                    style={{
                      padding: "5px 15px",
                      borderRadius: "10px",
                      marginRight: "8px",
                      backgroundColor: "#2a323a",
                      border: "1px solid #d34445",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        fontSize: "22px",
                        color: "white",
                      }}
                      href="https://github.com/mamunr412/Pathfriend-tour-client-"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client Side Code
                    </a>
                  </button>
                  <button
                    style={{
                      padding: "5px 15px",
                      borderRadius: "10px",
                      marginRight: "8px",
                      marginTop: "16px",
                      backgroundColor: "#2a323a",
                      border: "1px solid #d34445",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        fontSize: "22px",
                        color: "white",
                      }}
                      href="https://github.com/mamunr412/Pathfriend-tour-server"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Server Side Code
                    </a>
                  </button>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} className="order-1 order-md-2">
              <div className="mt-4" data-aos="fade-left">
                <Carousel fade>
                  <Carousel.Item>
                    <img
                      style={{
                        width: "569px",
                        height: "300px",
                      }}
                      className="d-block w-100 img-fluid"
                      src="https://i.ibb.co/0jwm32F/path.png"
                      alt="First slide"
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{
                        width: "569px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                      className="d-block w-100 img-fluid"
                      src="https://i.ibb.co/W52qCd1/path-2.png"
                      alt="Second slide"
                    />

                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{
                        width: "569px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                      className="d-block w-100 img-fluid"
                      src="https://i.ibb.co/yFfQZhm/path-3.png"
                      alt="Third slide"
                    />

                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{
                        width: "569px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                      className="d-block w-100 img-fluid"
                      src="https://i.ibb.co/ZhW6Tgf/path-4.png"
                      alt="Third slide"
                    />

                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-4">
          <Row>
            <Col sm={12} md={6} className="order-2 order-md-1">
              <div data-aos="fade-right">
                <div>
                  <h3 style={{ margin: "20px 0", textAlign: "left" }}>
                    Vision Eye Hospital
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    <span style={{ fontSize: "25px" }}>Features: </span> An
                    online Eye Hospital. 1. User can see all services; 2. After
                    login user can see all details of clicked services. 3. Also
                    after login users can see our best doctor’s list and Health
                    tips.
                    <br />
                    <span style={{ fontSize: "25px" }}>Technology Used: </span>
                    HTML5, CSS3, React Bootstrap, react, React Router, firebase,
                    netlify.
                  </p>
                </div>
                <div
                  style={{ marginRight: "15px", textAlign: "left" }}
                  className="mt-3"
                >
                  <button
                    style={{
                      padding: "5px 15px",
                      borderRadius: "10px",
                      marginRight: "8px",
                      backgroundColor: "#2a323a",
                      border: "1px solid #d34445",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        fontSize: "22px",
                        color: "white",
                      }}
                      href="https://vission-ey-hospital.web.app/home"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Website
                    </a>
                  </button>
                  <button
                    style={{
                      padding: "5px 15px",
                      borderRadius: "10px",
                      marginRight: "8px",
                      backgroundColor: "#2a323a",
                      border: "1px solid #d34445",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        fontSize: "22px",
                        color: "white",
                      }}
                      href="https://github.com/mamunr412/VISSIO_EYE-HOSPITAL"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} className="order-1 order-md-2">
              <div className="mt-4" data-aos="fade-left">
                <Carousel fade>
                  <Carousel.Item>
                    <img
                      style={{
                        width: "569px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                      className="d-block w-100 img-fluid"
                      src="https://i.ibb.co/yVfGfHt/vision-1.png"
                      alt="First slide"
                    />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{
                        width: "569px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                      className="d-block w-100 img-fluid"
                      src="https://i.ibb.co/qpT8HDd/vision-2.png"
                      alt="Second slide"
                    />

                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      style={{
                        width: "569px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                      className="d-block w-100 img-fluid"
                      src="https://i.ibb.co/Sd5qmvn/vision-3.png"
                      alt="Third slide"
                    />

                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
