import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { MainLayout } from "Layouts/Main";
import Routes from "Routes";

import { GlobalStyle, Root, theme } from "./Theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Root>
          <MainLayout>
            <Routes />
          </MainLayout>
        </Root>
      </ThemeProvider>
    </Router>
  );
}

export default App;
