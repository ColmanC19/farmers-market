
import React from "react";
function Header(){
var headerStyles = {

  fontFamily: 'monospace',
  textAlign: 'center',
  borderBottom: '2px solid #fff',
  marginBottom: '10px',
  borderTop: '2px solid #fff',
  marginTop: '10px',
  color: 'blue'
}


return (
  <div style={headerStyles}>
  <h1> Farmer's Market Circuit </h1>
  </div>
);
}




export default Header
