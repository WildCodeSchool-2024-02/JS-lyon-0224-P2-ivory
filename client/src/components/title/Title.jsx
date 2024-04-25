import PropTypes from "prop-types";
import styles from "./titleStyle.module.css";

/**
 * Composant pour afficher un titre.
 * @param {{ level: string, title: string }} props - Props du composant.
 * @param {string} props.title - Le texte à afficher.
 * @param {string} props.level - Niveau du titre (h1, h2, etc.).
 */

export default function Title({ level, title }) {
  const Tag = `h${level}`;
  return <Tag className={styles.title}>{title}</Tag>;
}

Title.propTypes = {
  level: PropTypes.oneOf(["1", "2", "3", "4", "5", "6"]).isRequired,
  title: PropTypes.string.isRequired,
};
