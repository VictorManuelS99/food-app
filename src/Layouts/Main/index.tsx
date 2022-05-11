import { FC, ReactNode } from "react";

import { Sidebar } from "Components/Templates";

import { Container, Wrapper } from "./styles";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <Container>{children}</Container>
    </Wrapper>
  );
};
