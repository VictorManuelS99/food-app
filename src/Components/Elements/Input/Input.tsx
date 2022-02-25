import { FC } from "react";

import { Wrapper } from "./styles";

interface Props {
  placeholder: string;
  width?: string;
}

export const Input: FC<Props> = ({ placeholder, width }) => {
  return <Wrapper placeholder={placeholder} width={width} />;
};
