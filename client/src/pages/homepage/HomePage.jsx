import "./homePageStyle.module.css";
import { Link } from "react-router-dom";

const formation = [
  {
    name: "HTML",
    link: "/html",
  },
  {
    name: "CSS",
    link: "/css",
  },
  {
    name: "JavaScript",
    link: "/javascript",
  },
  {
    name: "React",
    link: "/react",
  },
  {
    name: "Git",
    link: "/git",
  },
];

function HomePage() {
  return (
    <div className="buttonFormations">
      {formation.map((element, index) => (
        <Link to={element.link} key={index.id}>
          <button type="button">{element.name}</button>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
