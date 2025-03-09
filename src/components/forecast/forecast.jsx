import {
  ForecastStyled,
  ForecastImageContainer,
  Temperature,
  Condition,
} from "./forecast.styled";

export const Forecast = ({ icon, kelvin, condition }) => {
  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const temperature = kelvin
    ? Math.round(kelvinToCelsius(kelvin).toFixed(2))
    : null;

  if (icon == null) {
    return (
      <div>
        <h1>no icon</h1>
      </div>
    );
  }

  return (
    <ForecastStyled>
      <ForecastImageContainer>
        <img src={icon} alt="Weather condition icon" />
      </ForecastImageContainer>
      <div>
        <Temperature>
          <p>{temperature}°</p>
        </Temperature>
        <Condition>
          <p>{condition}</p>
        </Condition>
      </div>
    </ForecastStyled>
  );
};
