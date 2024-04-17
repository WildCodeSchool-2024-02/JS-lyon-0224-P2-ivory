import { BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";
import "./App.css";

import BannerLogo from "./components/banner_logo/BannerLogo";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// page components
import HomePage from "./pages/HomePage";
import GitPage from "./pages/GitPage";
import HTMLPage from "./pages/HTMLPage";
import CSSPage from "./pages/CSSPage";
import JavascriptPage from "./pages/JavascriptPage";
import ReactPage from "./pages/ReactPage";


// import Formation from "./components/formation/Formation";
// import CodeEditor from "./components/code_editor/CodeEditor";

// const name = [
//   { formation: "HTML" },
//   { formation: "CSS" },
//   { formation: "Javascript" },
//   { formation: "React" },
//   { formation: "Git" },
// ];

// const exempleDeCode = `
// function sayHello() {
//   console.log("Hello, world!");
// }
// `;

// const javascript = "javascript";

function App() {
  return (
	<Router>
	  <Routes>
	    <Route path="/" element={<Layout />}>
	      <Route index element={<HomePage />} />
	  	  <Route path="git" element={<GitPage />} />
          <Route path="html" element={<HTMLPage />} />
          <Route path="css" element={<CSSPage />} />
          <Route path="javascript" element={<JavascriptPage />} />
          <Route path="react" element={<ReactPage />} />
	    </Route>
	  </Routes>
	</Router>
  );
}

function Layout() {
  return (
    <>
      <BannerLogo />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
