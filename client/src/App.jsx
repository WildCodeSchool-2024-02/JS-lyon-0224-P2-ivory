import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import BannerLogo from "./components/banner_logo/BannerLogo";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Burger from "./components/burger/Burger";

// page components
import HomePage from "./pages/HomePage";
import GitPage from "./pages/git_page/GitPage";
import HTMLPage from "./pages/html_page/HTMLPage";
import CSSPage from "./pages/CSSPage";
import JavascriptPage from "./pages/JavascriptPage";
import ReactPage from "./pages/ReactPage";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="git" element={<GitPage />} />
        <Route path="html" element={<HTMLPage />} />
        <Route path="css" element={<CSSPage />} />
        <Route path="javascript" element={<JavascriptPage />} />
        <Route path="react" element={<ReactPage />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <>
      <BannerLogo />
      <Burger />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
