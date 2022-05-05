import { Input, Svg } from "Components/Elements";

import { Wrapper } from "./styles";

import { ReactComponent as SearchIcon } from "../../../Assets/Icons/Search.svg";

export const Search = () => {
  return (
    <Wrapper>
      <Svg iconComponent={SearchIcon} />
      <Input placeholder="Search for food, coffe, etc.." width="164px" />
    </Wrapper>
  );
};
