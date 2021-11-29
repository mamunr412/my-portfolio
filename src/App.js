import React, { useEffect, useState } from "react";
import "./App.css";
import HashLoader from "react-spinners/HashLoader";
import Home from "./components/Home/Home";

function App() {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);

  return (
    <div className="App">
      <Home></Home>
      {/* {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <HashLoader color={"D0021B"} loading={loading} size={150} />
        </div>
      ) : (
        
      )} */}
    </div>
  );
}

export default App;
