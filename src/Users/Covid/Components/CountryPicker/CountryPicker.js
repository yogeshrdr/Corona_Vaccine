import React, { useState, useEffect } from "react";
import { fetchCountries } from "../../api";
import {  Select} from '@windmill/react-ui'

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <div className="w-4/5 xl:w-1/3 mb-10">
      <Select 
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, key) => (
          <option key={key} value={country}>
            {country}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default CountryPicker;
