import PropTypes from 'prop-types';
import styles from "./textContentStyle.module.css";

/**
 * Composant pour afficher un texte.
 * @param {{ text: string }} props - Props du composant.
 * @param {string} props.text - Le texte à afficher.
 */

export default function TextContent({ text }) {
  return <p className={styles.text}>{text}</p>;
}

TextContent.propTypes = {
  text: PropTypes.string.isRequired
}
