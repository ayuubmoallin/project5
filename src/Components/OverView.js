import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  const currentDisplay = useSelector(selectDisplay);
  console.log("CURRENT DISPLAY OVEVIEW", currentDisplay);
  return (
    <div className="stack">
      <table className="overview-table">
        <tbody>
          <tr>
            <td>Country Name:</td>
            <td>{currentDisplay.name.official}</td>
          </tr>
          <tr>
            <td>Capital:</td>
            {currentDisplay.capital.map((e, i) => (
              <td key={e}>{e}</td>
            ))}
          </tr>
          <tr>
            <td>Population:</td>
            <td>{currentDisplay.population}</td>
          </tr>
          {/* More properties could be added according to the dummy data object provided */}
        </tbody>
      </table>
    </div>
  );
};

export default Overview;
