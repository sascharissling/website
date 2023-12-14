import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
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
      <Wrapper>
        <Routes>
          <Route path="/" element={<PageMain />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
        <Footer />
        <Legal />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  height: 100vh;
  justify-items: center;
  align-content: center;
`;
