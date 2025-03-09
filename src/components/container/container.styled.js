import styled from "styled-components";

export const ContainerStyled = styled.div`
background-color: ${(props) => props.theme.color.primary};
height: 100vh;
border-bottom-left-radius: 16px;
border-top-left-radius: 16px;
padding: 1rem;
`