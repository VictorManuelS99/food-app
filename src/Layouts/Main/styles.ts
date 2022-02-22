import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.background.main};
  border-radius: 1rem;
  display: flex;
`;

export const Container = styled.div`
  padding: 1.5rem;
  width: calc(100% - 3rem - 104px);
`;
