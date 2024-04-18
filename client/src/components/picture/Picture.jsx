import PropTypes from "prop-types";
import styles from "./pictureStyle.module.css";

/**
 * Composant pour afficher une image.
 * @param {{ src: string, alt: string }} props - Props du composant.
 * @param {string} props.src - Source de l'image.
 * @param {string} props.alt - Texte alternatif pour l'image.
 */

export default function Picture({ src, alt }) {
  return <img src={src} alt={alt} className={styles.picture} />;
}

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
