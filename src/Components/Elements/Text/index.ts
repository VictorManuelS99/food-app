import styled from "styled-components";

interface Props {
  weight?: "100" | "200" | "400" | "500" | "700";
  size?: "small" | "medium" | "large" | string;
}

export const Text = styled.p<Props>`
  all: unset;
  font-weight: ${({ weight }) => (weight ? weight : `400`)};
  font-size: ${({ size }) => (size ? size : `1rem`)};
  color: #E0E6E9;
`;
