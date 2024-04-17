import PropTypes from 'prop-types';
import styles from "./titleStyle.module.css"

/**
 * Composant pour afficher un titre.
 * @param {{ text: string }} props - Props du composant.
 * @param {string} props.text - Le texte à afficher.
*/

export default function Title({ title }) {
	return (
			<h2 className={styles.titleH2}>{title}</h2>
	)
}

Title.propTypes = {
	title: PropTypes.string.isRequired
}
