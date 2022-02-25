import { FC, ReactNode } from "react";

import { SideBar } from "../../Components/Templates/Sidebar/SiderBar";

import { Container, Wrapper } from "./styles";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <SideBar />
      <Container>{children}</Container>
    </Wrapper>
  );
};
