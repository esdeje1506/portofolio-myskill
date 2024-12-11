import ReactGA from "react-ga";
import "./App.css";
import { Component } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";
import Portofolio from "./Components/Portofolio";

let data = null;
$.ajax({
  url: "/resumeData.json",
  dataType: "json",
  async: false, // Sinkron agar data tersedia sebelum rendering
  success: (response) => {
    data = response.main;
  },
  error: (error) => {
    console.error("Error fetching JSON:", error);
  },
});

function App() {
  ReactGA.initialize("UA-110570651-1");
  ReactGA.pageview(window.location.pathname);
  if (!data) {
    return <div>Error loading data</div>;
  }
  return (
    <div className="App">
      <Header data={data} />
      <About data={data} />
      <Resume data={data} />
      <Portofolio data={data} />
      <Contact data={data} />
      <Footer data={data} />
    </div>
  );
}

export default App;
