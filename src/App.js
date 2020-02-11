import React from "react";
import "./App.css";
import "./Schedule.css";
import Header from "./components/Header";

import ScheduleList from "./components/ScheduleList";

function App() {
  return (
    <div className="App">
      <Header />
      <ScheduleList />
    </div>
  );
}

export default App;
