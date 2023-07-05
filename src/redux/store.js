import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from "./slices/potentialCountriesSlice";
import displayCountryReducer from "./slices/displayCountrySlice";
import loadingReducer from "./slices/loadingSlice";
export default configureStore({
  reducer: {
    potentialCountries: potentialCountriesReducer,
    displayedCountry: displayCountryReducer,
    loading: loadingReducer,
  },
});
