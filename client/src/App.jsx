import "./App.css";
import Lesson from "./components/Lesson/Lesson"
import Footer from "./components/footer/Footer";
import Formation from "./components/formation";

const name = [
  { formation: "HTML" },
  { formation: "CSS" },
  { formation: "Javascript" },
  { formation: "React" },
  { formation: "Git" },
];

function App() {
  return (
    <div>
      <Lesson />
      <Formation name={name} />
      <Footer />
    </div>
  );
}

export default App;