import { FC } from "react";
import { Wrapper } from "./styles";

interface Props {
  children: React.ReactNode;
}

export const Aside: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
