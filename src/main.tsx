import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Global, ThemeProvider } from "@emotion/react";
import { GlobalStyles } from "./styles/GlobalStyles.tsx";
import { theme } from "./styles/theme.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <BrowserRouter basename="/calendar">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
