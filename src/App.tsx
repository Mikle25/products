import Router, { Routers } from "./router";
import Header from "./components/header";
import Layout from "./layout";
import { ThemeProvider } from "styled-components";
import vars from "./theme/theme";
import { GlobalStyle } from "./components/styles/GlobalStyle";

const App = () => {
  return (
    <ThemeProvider theme={vars}>
      <GlobalStyle />
      <Router>
        <Header />
        <Layout>
          <Routers />
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
