import { FC } from "react";

import { Icon } from "../Icon/Icon";

import { Wrapper } from "./styles";

interface Props {
  icon: FC;
  to: string;
}

export const SideBarBtn: FC<Props> = ({ icon, to }) => {
  return (
    <Wrapper to={to}>
      <Icon icon={icon} />
    </Wrapper>
  );
};
