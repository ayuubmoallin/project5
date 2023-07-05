import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
import { selectLoading, setLoading } from "../redux/slices/loadingSlice";
import axios from "axios";

const Weather = () => {
  const display = useSelector(selectDisplay);
  const latitude = display.capitalInfo.latlng[0];
  const longitude = display.capitalInfo.latlng[1];
  const [weather, setWeather] = useState(null);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setLoading(true));
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: `${latitude},${longitude}` },
      headers: {
        "X-RapidAPI-Key": "eccd594cd8msh3a6150f49fe2b7cp1c7026jsn0b7563908f68",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((response) => {
        dispatch(setLoading(false));

        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="weather">
      <table className="overview-table">
        {isLoading ? (
          <tr>Loading...</tr>
        ) : (
          <>
            <tr>
              <td>Conditions: </td>
              <td>{weather?.current?.condition?.text} </td>
            </tr>
            <tr>
              <td>Temperature: </td>
              <td>{weather?.current?.temp_f} F</td>
            </tr>
            <tr>
              <td>Feels Like: </td>
              <td>{weather?.current?.feelslike_f} F</td>
            </tr>
            <tr>
              <td>Humidity: </td>
              <td>{weather?.current?.humidity}%</td>
            </tr>
          </>
        )}
      </table>
    </div>
  );
};

export default Weather;
