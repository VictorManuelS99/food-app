import { FC } from "react";

import { Text, Title } from "Components/Elements";
import { Aside } from "Components/Templates";
import { Search } from "Components/Groups";

import { Children, Container, Header, TitleContainer, Wrapper } from "./styles";

interface Props {
  children: React.ReactNode;
  title: string;
  aside?: boolean;
}

export const SecionLayout: FC<Props> = ({ children, title, aside }) => {
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Wrapper>
      <Container aside={aside}>
        <Header>
          <TitleContainer>
            <Title>{title}</Title>
            <Text>{date}</Text>
          </TitleContainer>
          <Search />
        </Header>
        <Children>{children}</Children>
      </Container>
      {aside && <Aside> </Aside>}
    </Wrapper>
  );
};
