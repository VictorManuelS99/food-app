import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.background.main};
  border-radius: 1rem;
  display: flex;
`;

export const Container = styled.div`
  width: calc(100% - 104px);
`;
