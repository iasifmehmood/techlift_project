import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Slider />
        <div>
          <Layout />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
