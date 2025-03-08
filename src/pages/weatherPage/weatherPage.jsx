import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../provider/locationProvider";

export const WeatherPage = () => {
  const location = useContext(LocationContext);

  useEffect(() => {
    console.log(location);
  }, [location]);

  //   const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}`;

  return (
    <div>
      <h1>weatherPage</h1>
      {location && location.latitude && location.longitude ? (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      ) : (
        <p>Location not available</p>
      )}
    </div>
  );
};
