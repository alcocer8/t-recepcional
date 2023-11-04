import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Routes";

import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={Routes} />
    </ThemeProvider>
  </React.StrictMode>
);
