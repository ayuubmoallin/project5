import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";

const OptionDisplay = () => {
  const currentPotentials = useSelector(selectPotentials);
  const dispatch = useDispatch();

  return (
    <div className="stack">
      {currentPotentials.map((country, index) => (
        <h2
          key={country.name.official}
          className="country-option"
          onClick={() => {
            dispatch(setDisplayCountry(currentPotentials[index]));
          }}
        >
          {country.name.common}
        </h2>
      ))}
    </div>
  );
};

export default OptionDisplay;
