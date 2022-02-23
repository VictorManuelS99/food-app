import { FC } from "react";

import { Text } from "../../Components/Elements/Text/Text";
import { Title } from "../../Components/Elements/Title/Title";
import { Aside } from "../../Components/Templates/Aside.tsx/Aside";

import { Children, Container, Header, Wrapper } from "./styles";

interface Props {
  children: React.ReactNode;
  title: string;
  aside?: boolean;
}

export const SecionLayout: FC<Props> = ({ children, title, aside }) => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>{title}</Title>
          <Text>Tuesday, 2 Feb 2021</Text>
        </Header>
        <Children>{children}</Children>
      </Container>
      {aside && <Aside> </Aside>}
    </Wrapper>
  );
};
