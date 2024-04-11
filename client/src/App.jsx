import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Lesson from "./components/Lesson/Lesson"
import Footer from "./components/footer/Footer";
import Formation from "./components/formation/Formation";

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
      <Navbar/>
      <Formation name={name} />
      <Footer />
    </div>
  );
}

export default App;
