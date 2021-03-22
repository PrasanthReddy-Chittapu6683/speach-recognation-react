import React from "react";

const CountryList = ({ countryList = [] }) => {
  return (
    <>
      {countryList && countryList.length ? (
        countryList.map((data, index) => {
          if (data) {
            return (
              <div key={data.name}>
                <h3>Country: {data.name}</h3>
                <p>Capital: {data.capital}</p>
                <p> Area: {data.area}</p>
                <p> Population: {data.population}</p>
                <p>Region: {data.region}</p>
              </div>
            );
          }
          return null;
        })
      ) : (
        <p>
          {" "}
          👀 Sorry we couldn't find the searched country in list.
          <br />
          Try some other country
        </p>
      )}
    </>
  );
};

export default CountryList;
