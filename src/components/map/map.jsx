import { MapStyled } from "./map.styled";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export const Map = ({ lan, lon }) => {
  useEffect(() => {
    const map = L.map("map").setView([lan, lon], 13); // Replace with your latitude and longitude

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([lan, lon])
      .addTo(map) // Replace with your latitude and longitude
      .bindPopup("You are here")
      .openPopup();

    return () => {
      map.remove();
    };
  }, [lan, lon]);

  return (
    <MapStyled>
      <div id="map" style={{ height: "440px" }}></div>
    </MapStyled>
  );
};
