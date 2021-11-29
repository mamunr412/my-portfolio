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
              I am a Web Developer having a solid understanding of front-end
              technology mainly focused on React. Now let’s talk about how I
              choose web development as my career. In the early year of my
              graduation, I found interest in coding. I learn DSA and start
              doing problem-solving on many online platforms. As a beginner, I
              was trying various programming languages like C, C++, Java,
              Python, JavaScript, and a couple of technology. After 3 years in
              2019, I became a moderator of my departmental programming club
              called Euclid Programming Club. I helped many of my university
              juniors to learn to code. It was really fun and actually helping
              others is the best way of learning. One day, a friend of mine came
              to show me a problem with his website project that he was working
              on. It was PHP and I have no idea about PHP. Then I was thinking
              that as I know JavaScript and it is used to build websites so let
              try it out. I start learning React and it was quite fun and easy.
              I am a motivated person but I love to hear from people who
              motivated others. I love to talk about technology and try to learn
              more. I believe learning means living.
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
