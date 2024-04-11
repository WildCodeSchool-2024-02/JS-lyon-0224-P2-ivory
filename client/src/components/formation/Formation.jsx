import PropTypes from "prop-types";
import "./formation-style.css";


function Formation({ name }) {


    return (
    <div className="buttonFormations">
      {name.map((element, index) => (
        <button type="button" key={index.id}>{element.formation}</button>
      ))}
      
    </div>
  );
}
Formation.propTypes={
    name: PropTypes.arrayOf(
        PropTypes.shape({formation: PropTypes.string,
    })).isRequired
}

export default Formation