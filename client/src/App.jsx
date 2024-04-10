import "./App.css";
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
      <Formation name={name} />
      <Footer />
    </div>
  );
}

export default App;