import React, { useEffect, useState } from "react";
import Overview from "./OverView";
import Weather from "./Weather";
import Symbols from "./Symbols";

const MainDisplay = () => {
  const [view, setView] = useState("Overview");
  return (
    <div>
      <div className="stack">
        <div className="tab-select">
          <button onClick={() => setView("Overview")}>Overview</button>
          <button onClick={() => setView("Weather")}>
            Current Weather at Capital
          </button>
          <button onClick={() => setView("Symbols")}>Symbols</button>
        </div>
        {view === "Overview" && <Overview />}
        {view === "Weather" && <Weather />}
        {view === "Symbols" && <Symbols />}
      </div>
    </div>
  );
};

export default MainDisplay;
