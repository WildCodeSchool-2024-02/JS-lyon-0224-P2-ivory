import PropTypes from "prop-types";
import { useState } from "react";
import "./formation-style.css";

function Formation({ name }) {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(!show);
  }

  return (
    <div className="buttonFormations">
      {name.map((element, index) => (
        <button type="button" key={index.id} onClick={handleClick}>
          {element.formation}
        </button>
      ))}
    </div>
  );
}
Formation.propTypes = {
  name: PropTypes.arrayOf(PropTypes.shape({ formation: PropTypes.string }))
    .isRequired,
};

export default Formation;
