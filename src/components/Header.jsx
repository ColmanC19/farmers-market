
import React from "react";
function Header(){
var headerStyles = {

  fontFamily: 'monospace',
  fontSize: '24px',
  textAlign: 'center',
  borderBottom: '2px solid #fff',
  marginBottom: '10px',
  borderTop: '2px solid #fff',
  marginTop: '10px',
  color: 'black',
  backgroundColor: "#f9ea8f",
  backgroundImage: "linear-gradient(315deg, #f9ea8f 0%, #aff1da 74%)"
}


return (
  <div style={headerStyles}>
  <h1> <a href="#">Farmer's Market Circuit</a> </h1>
  </div>
);
}




export default Header
