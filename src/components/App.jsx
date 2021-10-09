import React, { useState } from "react";

function App() {
  var [time, settime] = useState("TIME");
  function getTime() {
    setInterval(function () {
      settime(new Date().toLocaleTimeString());
    }, 1000);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
