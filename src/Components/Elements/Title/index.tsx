import { FC, ReactNode } from "react";

import { StyledTitle } from "./styles";

interface Props {
  children: ReactNode;
}

export const Title: FC<Props> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};
