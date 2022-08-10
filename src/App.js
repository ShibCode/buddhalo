import React from "react";

import Header from "./Layout/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Layout/Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
