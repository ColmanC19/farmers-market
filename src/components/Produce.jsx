import React from 'react';
import PropTypes from 'prop-types';
import '../Produce.css';

function Produce(props){
  return (
    <div className="produceCss">
      <h1>{props.month}</h1>

      <h2 className="hidden">{props.selection.map((crop)=>
          <li>{crop}</li>
      )}</h2>
      
      </div>
    );
  }

  Produce.propTypes = {
    month: PropTypes.string.isRequired,
    selection: PropTypes.string.isRequired,

  };

  export default Produce;
