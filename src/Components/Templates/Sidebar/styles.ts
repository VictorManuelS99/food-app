import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  height: 100%;
  width: 104px;
  border-radius: 1rem;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0;
  padding: 0;

  & li:first-child {
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
  }
`;

interface ItemProps {
  isSelected?: boolean;
}

export const Item = styled.li<ItemProps>`
  padding: 0.75rem;
  padding-right: 1.5rem;
  width: calc(104px - 3rem);
  display: grid;
  place-items: center;
  position: relative;

  a {
    z-index: 1;
    border-radius: 0.5rem;

    :hover {
      background-color: ${({ theme }) => theme.colors.background.main};
    }
  }

  ${({ isSelected, theme }) =>
    isSelected &&
    `
    background-color: ${theme.colors.background.main};
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.75rem;


    :before {
      position: absolute;
      content: '';
      height: 25px;
      width: 25px;
      background: ${theme.colors.background.secondary};
      right: 0;
      bottom: 100%;
      border-radius: 0 0 10px 0;
      box-shadow: 0 17px 0 ${theme.colors.background.main};
    }

    :after {
      position: absolute;
      content: '';
      height: 25px;
      width: 25px;
      background: ${theme.colors.background.secondary};
      right: 0;
      top: 100%;
      border-radius: 0 10px 0px 0;
      box-shadow: 0 -17px 0 ${theme.colors.background.main};
    }
    & a{
      background-color: ${theme.colors.primary.main};
      box-shadow: 0px 8px 24px rgba(234, 124, 105, 0.32);
      
      :hover {
        background-color: ${theme.colors.primary.main};
      }

      svg{
        path{
          fill: ${theme.colors.button.selected};
        }
      } 
    }
    `}
`;
