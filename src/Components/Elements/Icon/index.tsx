import { FC } from "react";

import { Svg } from "../Svg";

interface Props {
  icon: FC;
  color?: string;
}

export const Icon: FC<Props> = ({ icon, color }) => {
  return <Svg iconComponent={icon} color={color} />;
};
