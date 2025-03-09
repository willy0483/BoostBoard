import {
  WindSpeedStyled,
  WindSpeedImageContainer,
  Speed,
  Ms,
} from "./windSpeed.styled";

export const WindSpeed = ({ SpeedMs, icon }) => {
  if (SpeedMs == undefined) {
    return (
      <div>
        <p>no data</p>
      </div>
    );
  }

  return (
    <WindSpeedStyled>
      <WindSpeedImageContainer>
        <img src={icon} alt="wind icon" />
      </WindSpeedImageContainer>
      <div>
        <Speed>
          <p>{SpeedMs}Ms</p>
        </Speed>
        <Ms>
          <p>Wind</p>
        </Ms>
      </div>
    </WindSpeedStyled>
  );
};
