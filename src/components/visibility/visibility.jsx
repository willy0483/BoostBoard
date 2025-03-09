import { VisibilityStyled } from "./visibility.styled";
import { DotLottie } from "@lottiefiles/dotlottie-web";
import { useEffect } from "react";

export const Visibility = () => {
  useEffect(() => {
    const dotLottie = new DotLottie({
      autoplay: true,
      loop: true,
      canvas: document.querySelector("#dotlottie-canvas-eye"),
      src: "src/assets/lottie/eyeAnimation.json",
    });
  }, []);

  return (
    <VisibilityStyled>
      <canvas
        id="dotlottie-canvas-eye"
        style={{ width: "170px", height: "145.7px" }}
      ></canvas>
      <div></div>
    </VisibilityStyled>
  );
};
