import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Formation from "./components/formation/Formation";
import CodeEditor from "./components/code_editor/CodeEditor";
import BannerLogo from "./components/banner_logo/BannerLogo";
import SearchBar from "./components/searchbar/Searchbar";

const name = [
  { formation: "HTML" },
  { formation: "CSS" },
  { formation: "Javascript" },
  { formation: "React" },
  { formation: "Git" },
];

const exempleDeCode = `
function sayHello() {
  console.log("Hello, world!");
}
`;

const javascript = "javascript";

function App() {
  return (
    <>
      <BannerLogo />
      <SearchBar/>
      <Navbar />
      <Formation name={name} />
	  <CodeEditor language={javascript}  codeString={exempleDeCode} />
      <Footer />
    </>
  );
}

export default App;
