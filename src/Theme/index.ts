import styled, { createGlobalStyle, DefaultTheme } from "styled-components";

import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
      html, body{
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }
`;

export const Root = styled.div`
  max-width: 100%;
  height: calc(100vh - 2rem);
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem;
`;

export const theme: DefaultTheme = {
  colors,
};
