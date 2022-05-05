import { FC } from "react";

import styled from "styled-components";

interface Props {
  iconComponent: FC;
  color?: string;
}

export const Svg: FC<Props> = ({ iconComponent, color }) => {
  const Astyled = styled(iconComponent)`
    path {
      fill: ${color};
    }
  `;
  return <Astyled />;
};
