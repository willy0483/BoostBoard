import {
  VisibilityStyled,
  VisibilityImageContainer,
  VisibilityLvl,
  VisibilityName,
} from "./visibility.styled";

export const Visibility = ({ icon, number }) => {
  return (
    <VisibilityStyled>
      <VisibilityImageContainer>
        <img src={icon} alt="Visibility condition icon" />
      </VisibilityImageContainer>
      <div>
        <VisibilityLvl>
          <p>
            {number >= 1000
              ? `${(number / 1000).toFixed(1)} km`
              : `${number} m`}
          </p>
        </VisibilityLvl>
        <VisibilityName>
          <p>Visibility</p>
        </VisibilityName>
      </div>
    </VisibilityStyled>
  );
};
