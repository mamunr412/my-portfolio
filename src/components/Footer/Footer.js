import React, { useEffect, useState } from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const [result, setResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wgpdk3g",
        "template_rrkfd0i",
        form.current,
        "user_F9oneRhwaIIjkbEjSTFY3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };
  setTimeout(() => {
    setResult(false);
  }, 5000);

  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <div className="mt-5" style={{ backgroundColor: "#2a323a" }} id="contact">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <div className="pt-5" style={{ color: "white", textAlign: "left" }}>
              <h3 data-aos="zoom-in">I am available</h3>
              <h5 className="my-3">
                Email :
                <span style={{ color: "#00ffc5" }}> mamunr412@mail.com</span>
              </h5>
              <h5>
                Phone : <span style={{ color: "#00ffc5" }}>01406762707</span>
              </h5>
              <div className="mt-4">
                <a
                  style={{ marginRight: "15px" }}
                  href="https://www.facebook.com/abdulahal.mamun.50767/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    style={{ fontSize: "40px", color: "white" }}
                    class="fab fa-facebook"
                  ></i>
                </a>
                <a
                  style={{ marginRight: "15px" }}
                  href="https://github.com/mamunr412?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    style={{ fontSize: "40px", color: "white" }}
                    class="fab fa-github"
                  ></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/abdullah-al-mamun-47a0aa16a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    style={{ fontSize: "40px", color: "white" }}
                    class="fab fa-linkedin"
                  ></i>
                </a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="pt-5" style={{ color: "white" }}>
              <h4 style={{ textAlign: "left" }}>Let me hear from you</h4>
              <div style={{ textAlign: "left" }}>
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    style={{
                      width: "90%",
                      height: "40px",
                      borderRadius: "5px",
                      paddingLeft: "10px",
                    }}
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                  />
                  <br />
                  <br />

                  <input
                    style={{
                      width: "90%",
                      height: "40px",
                      borderRadius: "5px",
                      paddingLeft: "10px",
                    }}
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                  />
                  <br />
                  <br />
                  <textarea
                    style={{
                      width: "90%",
                      height: "80px",
                      borderRadius: "5px",
                      paddingLeft: "10px",
                    }}
                    name="message"
                    placeholder=" Write Meassage"
                  />

                  <br />
                  <input
                    style={{
                      padding: "5px 15px",
                      color: "white",
                      borderRadius: "10px",
                      backgroundColor: "#2a323a",
                      border: "1px solid #d34445",
                    }}
                    type="submit"
                    value="Send"
                  />
                </form>

                {result && <p>Your meassage Successfully Send</p>}
              </div>
            </div>
          </Col>

          <Col sm={12} md={12}>
            <div>
              <h6 style={{ color: "white" }} className="mt-5">
                Copyright by Ⓒ Mamun
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
