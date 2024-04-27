import React from "react";
import { image } from "../data/data";

function About() {
  return ( <div id ="About"> 
  <h2>About me</h2>
  <p>I love football and table tennis.</p>
  <img src={image} alt="I made this" />

  </div>);
}

export default About;
