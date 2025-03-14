import styled from "styled-components";

export const NotFoundPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  h1 {
    font-size: 3rem;
    color: ${(props) => props.theme.color.accent};
  }
`;
