import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Lesson from "./components/Lesson/Lesson"
import Footer from "./components/footer/Footer";
import Formation from "./components/formation/Formation";
import CodeEditor from "./components/code_editor/CodeEditor";

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
    <div>
      <Navbar/>
      <Lesson />
      <Formation name={name} />
	  <CodeEditor language={javascript}  codeString={exempleDeCode} />
      <Footer />
    </div>
  );
}

export default App;
