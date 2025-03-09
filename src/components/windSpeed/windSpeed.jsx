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
          <p>{SpeedMs}</p>
        </Speed>
        <Ms>
          <p>Ms</p>
        </Ms>
      </div>
    </WindSpeedStyled>
  );
};
