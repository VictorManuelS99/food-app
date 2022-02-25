import styled from "styled-components";

interface Props {
  width?: string;
}

export const Wrapper = styled.input<Props>`
  all: none;
  padding: 0;
  border: 0;
  outline: none;
  background-color: transparent;
  ${({ width }) => width && `width: ${width}`};
  color: #abbbc2;
  font-size: 0.875rem;

  &::placeholder {
    color: #abbbc2;
  }

  ::marker {
    color: #abbbc2;
  }
`;
