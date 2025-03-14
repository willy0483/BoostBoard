import styled from "styled-components";

export const SidebarStyled = styled.div`
  width: ${({ $collapsed }) => ($collapsed ? "60px" : "250px")};
  height: 100vh;
  background: ${(props) => props.theme.color.primary};
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  transition: width 0.3s ease;
  border-bottom-right-radius: 16px;
  border-top-right-radius: 16px;
  margin-right: 1rem;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`;

export const MenuItem = styled.div`
  cursor: pointer;
  transition: all 0.2s;
  a {
    display: flex;
    align-items: center;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 10px;
    text-decoration: none;
    background-color: transparent;
    color: ${(props) => props.theme.color.white};

    &:hover {
      background-color: ${(props) => props.theme.color.secondary};
    }
    &.active {
      background-color: ${(props) => props.theme.color.secondary};
      color: ${(props) => props.theme.color.accent};
    }
  }

  div {
    width: 18px;
    height: 18px;
  }
`;

export const IconWrapper = styled.div`
  font-size: 18px;
  margin-right: ${({ $collapsed }) => ($collapsed ? "0" : "15px")};
`;

export const Label = styled.span`
  display: ${({ $collapsed }) => ($collapsed ? "none" : "inline")};
`;

export const CollapseButton = styled.button`
  margin-top: auto;
  padding: 10px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;
