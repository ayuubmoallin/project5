import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Symbols = () => {
  const currentDisplay = useSelector(selectDisplay);

  return (
    <div className="symbols">
      <div className="stack">
        <h2>Flag:</h2>
        {currentDisplay.flags && (
          <img
            src={currentDisplay.flags.png}
            alt="Country Flag"
            className="symbol-image"
          />
        )}
      </div>
      <div className="stack">
        <h2>Coat of Arms:</h2>
        {currentDisplay.coatOfArms && (
          <img
            src={currentDisplay.coatOfArms.png}
            alt="Coat of Arms"
            className="symbol-image"
          />
        )}
      </div>
    </div>
  );
};

export default Symbols;
