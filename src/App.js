import React from "react";
import Category from "./Components/Category";
import Foods from "./Components/Foods";
import HeadlinesCards from "./Components/HeadlinesCards";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <HeadlinesCards/>
      <Foods/>
      <Category/>
      </div>
  );
}

export default App;
