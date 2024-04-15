import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Formation from "./components/formation/Formation";
import BannerLogo from "./components/banner_logo/BannerLogo";

const name = [
  { formation: "HTML" },
  { formation: "CSS" },
  { formation: "Javascript" },
  { formation: "React" },
  { formation: "Git" },
];

function App() {
  return (
    <>
      <BannerLogo />
      <Navbar />
      <Formation name={name} />
      <Footer />
    </>
  );
}

export default App;
