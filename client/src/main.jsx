import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

// page components
import HomePage from "./pages/HomePage";
import GitPage from "./pages/GitPage";
import HTMLPage from "./pages/HTMLPage";
import CSSPage from "./pages/CSSPage";
import JavascriptPage from "./pages/JavascriptPage";
import ReactPage from "./pages/ReactPage";

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
		<RouterProvider router={router} />
	</React.StrictMode>
);

