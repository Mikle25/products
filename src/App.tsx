import Router, { Routers } from "./router";
import Layout from "./layout";
import { ChakraProvider, theme } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          <Routers />
        </Layout>
      </Router>
    </ChakraProvider>
  );
};

export default App;
