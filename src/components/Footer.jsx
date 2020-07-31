//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.

import React from "react";
import Reactdom from "react-dom";

let year = new Date().getFullYear();

function GetYear(){
  return(
    <footer>
    <p> Copyright @ {year} </p>
    </footer>
  )
}

export default GetYear;