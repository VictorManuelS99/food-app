import { SideBarBtn, Logo } from "Components/Elements";

import { Item, List, Wrapper } from "./styles";

import { ReactComponent as HomeIcon } from "Assets/Icons/Home.svg";
import { ReactComponent as DashboardIcon } from "Assets/Icons/Dashboard.svg";
import { ReactComponent as SettingsIcon } from "Assets/Icons/Setting.svg";

import { useMatchLocation } from "Hooks";

const Sidebar = () => {
  return (
    <Wrapper>
      <List>
        <Item>
          <Logo />
        </Item>
        <Item {...useMatchLocation("/")}>
          <SideBarBtn icon={HomeIcon} to={"/"} />
        </Item>
        <Item {...useMatchLocation("/dashboard")}>
          <SideBarBtn icon={DashboardIcon} to={"/dashboard"} />
        </Item>
        <Item {...useMatchLocation("/settings")}>
          <SideBarBtn icon={SettingsIcon} to={"/settings"} />
        </Item>
      </List>
    </Wrapper>
  );
};

export default Sidebar;
