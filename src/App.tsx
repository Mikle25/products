import Router, { Routers } from "./router";
import Layout from "./layout";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme";

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
