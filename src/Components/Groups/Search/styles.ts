import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.light};
  padding: 0.875rem;
  display: flex;
  gap: 0.5rem;
  border-radius: 0.5rem;
`;
