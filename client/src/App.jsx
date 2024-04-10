import "./App.css";
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
    </div>
  );
}

export default App;
