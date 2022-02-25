import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

interface PropsContainer {
  aside?: boolean;
}

export const Container = styled.div<PropsContainer>`
  width: ${({ aside }) => (aside ? "calc(100% - 409px)" : "100%")};
  padding: 1rem;
  padding-bottom: 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Children = styled.div`
  height: calc(100% - 61px - 1.5rem);
`;
