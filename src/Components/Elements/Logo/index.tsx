import { Wrapper } from "./styles";

import LogoIcon from "../../../Assets/logo.svg";

export const Logo = () => {
  return (
    <Wrapper>
      <img src={LogoIcon} alt="logo" />
    </Wrapper>
  );
};
