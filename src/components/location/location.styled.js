import styled from "styled-components";

export const LocationStyled = styled.section`
  width: 220px;
  height: 300px;
  position: relative;
  text-align: center;
  padding: 25px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.color.secondary};
`


export const LocationImageContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

export const Country = styled.div`
  margin-top: 15px;
  p {
    color: ${(props) => props.theme.color.light};
    font-size: 2.8em;
    font-weight: bold;
  }
`;

export const CountryName = styled.div`
  p {
    color:rgb(209, 209, 209);
    font-size: 1.3em;
    margin-top: 8px;
  }
`;