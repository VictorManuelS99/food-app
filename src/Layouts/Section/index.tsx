import { FC } from "react";

import { Text } from "../../Components/Elements/Text/Text";
import { Title } from "../../Components/Elements/Title/Title";
import { Search } from "../../Components/Groups/Search/Search";
import { Aside } from "../../Components/Templates/Aside/Aside";

import { Children, Container, Header, TitleContainer, Wrapper } from "./styles";

interface Props {
  children: React.ReactNode;
  title: string;
  aside?: boolean;
}

export const SecionLayout: FC<Props> = ({ children, title, aside }) => {
  return (
    <Wrapper>
      <Container aside={aside}>
        <Header>
          <TitleContainer>
            <Title>{title}</Title>
            <Text>Tuesday, 2 Feb 2021</Text>
          </TitleContainer>
          <Search />
        </Header>
        <Children>{children}</Children>
      </Container>
      {aside && <Aside> </Aside>}
    </Wrapper>
  );
};
