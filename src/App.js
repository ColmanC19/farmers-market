import React from "react";
import "./App.css";
import "./Schedule.css";
import "./Produce.css";
import Header from "./components/Header";
import ProduceList from "./components/ProduceList";
import ScheduleList from "./components/ScheduleList";

function App() {
  return (
    <div className="App">
      <Header />
      <ScheduleList />
      <p className = "pTag">Here's the monthly schedule </p>
      <ProduceList />
    </div>
  );
}

export default App;
