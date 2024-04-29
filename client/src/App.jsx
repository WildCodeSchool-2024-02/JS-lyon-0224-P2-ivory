import { useContext } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";

import BannerLogo from "./components/banner_logo/BannerLogo";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Burger from "./components/burger/Burger";

// page components
import HomePage from "./pages/homepage/HomePage";
import GitPage from "./pages/git_page/GitPage";
import HTMLPage from "./pages/html_page/HTMLPage";
import CSSPage from "./pages/css_page/CssPage";
import JavascriptPage from "./pages/js_page/JavascriptPage";
import ReactPage from "./pages/react_page/ReactPage";
import ToggleButton from "./components/toggle_theme_button/ToggleThemeButton";

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
  const { themeMode } = useContext(ThemeContext);

  return (
    <div className={`${themeMode}`}>
      <ToggleButton />
      <BannerLogo />
      <Burger />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
