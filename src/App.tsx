import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Footer from "./components/Footer";
import Legal from "./components/Legal";
import PageMain from "./components/PageMain";
import Impressum from "./pages/Impressum";
import theme from "./utils/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Routes>
          <Route path="/" element={<PageMain />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
        <Footer />
        <Legal />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;
`;
