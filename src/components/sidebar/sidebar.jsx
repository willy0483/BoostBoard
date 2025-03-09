import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaWallet,
  FaTh,
  FaBolt,
  FaClock,
  FaServer,
  FaChartBar,
  FaChevronLeft,
  FaChevronRight,
  FaCloud,
  FaHome,
} from "react-icons/fa";

import {
  SidebarStyled,
  Logo,
  MenuItem,
  IconWrapper,
  Label,
  CollapseButton,
} from "./sidebar.styled";

export const Sidebar = ({ getLocation }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SidebarStyled $collapsed={collapsed}>
      <Logo>{!collapsed && "BoostBoard"}</Logo>

      <MenuItem>
        <NavLink to="/">
          <IconWrapper $collapsed={collapsed}>
            <FaHome />
          </IconWrapper>
          <Label $collapsed={collapsed}>Home</Label>
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink to="/dashboard">
          <IconWrapper $collapsed={collapsed}>
            <FaTh />
          </IconWrapper>
          <Label $collapsed={collapsed}>Dashboard</Label>
        </NavLink>
      </MenuItem>

      <MenuItem onClick={() => getLocation()}>
        <NavLink to="/weather">
          <IconWrapper $collapsed={collapsed}>
            <FaCloud />
          </IconWrapper>
          <Label $collapsed={collapsed}>Weather</Label>
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink to="/thor-stake">
          <IconWrapper $collapsed={collapsed}>
            <FaBolt />
          </IconWrapper>
          <Label $collapsed={collapsed}>Thor</Label>
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink to="/pending-liquidity">
          <IconWrapper $collapsed={collapsed}>
            <FaClock />
          </IconWrapper>
          <Label $collapsed={collapsed}>Pending</Label>
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink to="/your-wallet">
          <IconWrapper $collapsed={collapsed}>
            <FaWallet />
          </IconWrapper>
          <Label $collapsed={collapsed}>Wallet</Label>
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink to="/thornode">
          <IconWrapper $collapsed={collapsed}>
            <FaServer />
          </IconWrapper>
          <Label $collapsed={collapsed}>Thornode</Label>
        </NavLink>
      </MenuItem>

      <MenuItem>
        <NavLink to="/stats">
          <IconWrapper $collapsed={collapsed}>
            <FaChartBar />
          </IconWrapper>
          <Label $collapsed={collapsed}>Stats</Label>
        </NavLink>
      </MenuItem>

      <CollapseButton onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
      </CollapseButton>
    </SidebarStyled>
  );
};
