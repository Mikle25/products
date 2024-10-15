import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { ColorModeScript } from "@chakra-ui/react";
import { theme } from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </Provider>
  </React.StrictMode>
);
