import React from "react";
import Header from "./Header";
import ServeFooter from "./ServeFooter";
import ServeMain from "./ServeMain";
import "./styles.css";

function Serve() {
  return (
    <div>
      <Header />
      <ServeMain />
      <ServeFooter />
    </div>
  );
}

export default Serve;
