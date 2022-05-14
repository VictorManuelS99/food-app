import { FC } from "react";

import { Wrapper } from "./styles";

interface Props {
  title: string;
}

export const Dishes: FC<Props> = ({ title }) => {
  return (
    <Wrapper>
      <h3 className="title">{title}</h3>
    </Wrapper>
  );
};
