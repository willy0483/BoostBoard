import styled from "styled-components";

export const SidebarStyled = styled.aside`
grid-area: sidebar;
background-color: ${(props) => props.theme.color.surface};
padding: 0 2rem;
display: flex;
flex-direction: column;
align-items: center;
`



export const SidebarHeader = styled.header`
display: flex;
justify-content: center;
align-items: center;
margin: 1rem 0;
div{
    width: 50px;
}
img{
    width: 100%;
    height: 100%;
    display: block;
}
h4{
    color: ${(props) => props.theme.color.white};
}
`