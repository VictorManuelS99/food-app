import { Link } from "react-router-dom";

import { Item, Wrapper } from "./styles";

export const Navbar = () => {
  return (
    <Wrapper>
      <Item selected>
        <Link to="/">Hot Dishes</Link>
      </Item>
      <Item>
        <Link to="/cold-dishes">Cold Dishes</Link>
      </Item>
      <Item>
        <Link to="/soup">Sopa</Link>
      </Item>
      <Item>
        <Link to="/grill">Grill</Link>
      </Item>
    </Wrapper>
  );
};
