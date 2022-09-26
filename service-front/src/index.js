import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./context/user";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <NotificationsProvider>
          <App />
        </NotificationsProvider>
      </MantineProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
