import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import DarkModeProvider from "./context/ThemeContext";

// page components
import HomePage from "./pages/HomePage";
import GitPage from "./pages/git_page/GitPage";
import HTMLPage from "./pages/html_page/HTMLPage";
import CSSPage from "./pages/CSSPage";
import JavascriptPage from "./pages/js_page/JavascriptPage";
import ReactPage from "./pages/react_page/ReactPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/git",
        element: <GitPage />,
      },
      {
        path: "/html",
        element: <HTMLPage />,
      },
      {
        path: "/css",
        element: <CSSPage />,
      },
      {
        path: "/javascript",
        element: <JavascriptPage />,
      },
      {
        path: "/react",
        element: <ReactPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </React.StrictMode>
);
