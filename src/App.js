import React from "react";
import { Route, Routes } from "react-router-dom";

//STYLE imports
import GlobalStyles from "./GlobalStyles";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import theme from "./utils/theme";

//COMPONENTS import
import Footer from "./components/Footer";
import PageMain from "./components/PageMain";
import Impressum from "./pages/Impressum";
import Legal from "./components/Legal";
import MusicProducer from "./pages/MusicProducer";
// import WebDeveloper from "./pages/WebDeveloper";

//STYLE start

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

//STYLE end

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Routes>
          <Route path="/" element={<PageMain />} />
          <Route path="/impressum" element={<Impressum />} />
          {/* <Route path="/webdev" element={WebDeveloper} /> */}
          <Route path="/prod" element={<MusicProducer />} />
        </Routes>
        <Footer />
        <Legal />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
