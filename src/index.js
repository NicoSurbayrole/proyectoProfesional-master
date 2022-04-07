import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./resources/theme";

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>
</BrowserRouter>,
  document.getElementById("root")
);
