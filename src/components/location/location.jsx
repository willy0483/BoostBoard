import { useEffect } from "react";
import { LocationStyled, CountryName, Country } from "./location.styled";
import { DotLottie } from "@lottiefiles/dotlottie-web";

export const Location = ({ country, name }) => {
  useEffect(() => {
    const dotLottie = new DotLottie({
      autoplay: true,
      loop: true,
      canvas: document.querySelector("#dotlottie-canvas"),
      src: "src/assets/lottie/locationAnimation.json",
    });
  }, []);

  return (
    <LocationStyled>
      <canvas id="dotlottie-canvas" style={{ width: "190px", height: "162px" }}></canvas>
      <div>
        <Country>
          <p>{country}</p>
        </Country>
        <CountryName>
          <p>{name}</p>
        </CountryName>
      </div>
    </LocationStyled>
  );
};
