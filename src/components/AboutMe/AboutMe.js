import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutMe = () => {
  return (
    <div className="my-5" id="about">
      <h1 className="mb-5">About Me</h1>
      <Container>
        <Row>
          <Col sm={12} md={5}>
            <div>
              <img
                style={{
                  width: "386px",
                  height: "445px",
                  objectFit: "cover",
                }}
                className="img-fluid"
                src="https://i.ibb.co/BNLjp9D/IMG-0513.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col sm={12} md={7}>
            <p style={{ marginTop: "20px", textAlign: "justify" }}>

            Hi, I'm Abdulla Al Mamun from Dhaka, Bangladesh. I am a Web Developer having a solid understanding of front-end
              technology mainly focused on React.js. I have 2 years of experience in HTML and CSS. I have learned javascript.
               I can make web applications using React. I have knowledge about React, React router, Next.js, firebase authentication, bootstrap, react-bootstrap, tailwind, material-UI, Ant Design ,localization, socket.IO ,Netlify, Heroku. For Backend, I use node.js, express.js, and use MongoDB for the database.
               I made many web applications, and still, I'm learning more. I like this work and I have patient for this work. I have knowledge about computers from childhood. I am a motivated person but I love to hear from people who
              motivated others. I love to talk about technology and try to learn more. I believe learning means living.
            </p>

            <div style={{ textAlign: "left" }}>
              <button
                className="mt-3"
                style={{
                  padding: "5px 15px",
                  borderRadius: "10px",

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
                  href="https://drive.google.com/uc?export=download&id=15ar1US1LniS_m81ULc9CsCVwu3tILl2x"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
