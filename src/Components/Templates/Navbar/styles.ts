import styled from "styled-components";

export const Wrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0;
`;

interface ItemProps {
  selected?: boolean;
}

export const Item = styled.li<ItemProps>`
  & a {
    text-decoration: none;
    font-weight: 600;
    font-size: 0.875rem;
    transition: 1s;

    color: ${({ theme, selected }) =>
      selected ? theme.colors.primary.main : theme.colors.text.main};

    border-bottom: ${({ selected }) => (selected ? "2px solid" : "none")};
  }
`;
