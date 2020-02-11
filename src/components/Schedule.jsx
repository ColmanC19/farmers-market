import React from 'react';
import PropTypes from 'prop-types';


function Schedule(props){
  return (
    <div className="scheduleCss">
      <h1>{props.day}</h1>
      <h2>{props.location}</h2>
      <h2>{props.hours}</h2>
      <h2>{props.booth}</h2>
      </div>
    );
  }

  Schedule.propTypes = {
    day: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
    booth: PropTypes.string.isRequired
  };

  export default Schedule;
