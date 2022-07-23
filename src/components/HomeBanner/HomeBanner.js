import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const HomeBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div style={{ height: "350px", backgroundColor: "#2a323a" }}>
      <div className="pt-5 ">
        <h1 style={{ color: "white" }}>Welcome</h1>
        <h2 style={{ color: "white" }}>
          I am <span style={{ color: "#00ffc5" }}>Abdulla Al Mamun</span>
        </h2>
        <h3 style={{ color: "white" }} data-aos="zoom-in">
          Hire me as Front-End Developer (React)
        </h3>
      </div>
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
          href="https://drive.google.com/uc?export=download&id=1JXTTNXCiApuUpWiPN9bd_dhe-11SNZMD"
          target="_blank"
          rel="noreferrer"
        >
        Download  Resume
        </a>
      </button>
    </div>
  );
};

export default HomeBanner;
