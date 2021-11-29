import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div id="skills">
      <Container>
        <div className="my-5">
          <h1>My Skills</h1>
        </div>
        <div>
          <Row>
            <Col sm={12}>
              <div
                className="d-flex justify-content-evenly"
                data-aos="fade-down"
              >
                <div>
                  <img
                    src="https://img.icons8.com/color/48/000000/html-5--v1.png"
                    alt=""
                  />
                  <h4>HTMl</h4>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/color/48/000000/css3.png"
                    alt=""
                  />
                  <h4>CSS</h4>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/color/48/000000/bootstrap.png"
                    alt=""
                  />
                  <h4>Bootstrap</h4>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/color/48/000000/javascript.png"
                    alt=""
                  />
                  <h4>JavaScript</h4>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/color/48/000000/react-native.png"
                    alt=""
                  />
                  <h4>React</h4>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col sm={12}>
              <div
                data-aos="fade-up"
                className="d-flex justify-content-evenly mt-4 "
                style={{ marginLeft: "8px" }}
              >
                <div>
                  <img
                    src="https://img.icons8.com/material-sharp/48/000000/github.png"
                    alt=""
                  />
                  <h4>Git</h4>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/color/48/000000/firebase.png"
                    alt=""
                  />
                  <h4>Firebase</h4>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/color/48/000000/material-ui.png"
                    alt=""
                  />
                  <h4>Material Ui</h4>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/color/48/000000/nodejs.png"
                    alt=""
                  />
                  <h4>Node js</h4>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/color/48/000000/mongodb.png"
                    alt=""
                  />
                  <h4>MongodB</h4>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
