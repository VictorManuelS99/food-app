import { useMatchLocation } from "../../../Hooks/useMatchLocation";

import { SideBarBtn } from "../../Elements/SideBarBtn/SideBarBtn";
import { Logo } from "../../Elements/Logo/Logo";

import { Item, List, Wrapper } from "./styles";

import { ReactComponent as HomeIcon } from "../../../Assets/Icons/Home.svg";
import { ReactComponent as DashboardIcon } from "../../../Assets/Icons/Dashboard.svg";
import { ReactComponent as SettingsIcon } from "../../../Assets/Icons/Setting.svg";

export const SideBar = () => {

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
