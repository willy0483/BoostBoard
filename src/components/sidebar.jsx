import { SidebarStyled, SidebarHeader } from "./sidebar.styled";
import logo from "../assets/png/logo.png";

export const Sidebar = () => {
  return (
    <SidebarStyled>
      <SidebarHeader>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <h4>BoostBoard</h4>
      </SidebarHeader>
    </SidebarStyled>
  );
};
