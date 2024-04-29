import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./VideoSliderStyle.module.css";

/**
 * Composant pour afficher un slider.
 * @param {{ videos: {id: string, url: string, title: string}[] }} props - Props du composant contenant un tableau de vidéos.
 */

export default function VideoSlider({ videos }) {
  const [dataIndex, setDataIndex] = useState(0);

  const handleClickBack = () => {
    setDataIndex(dataIndex > 0 ? dataIndex - 1 : videos.length - 1);
  };

  const handleClickNext = () => {
    setDataIndex(dataIndex < videos.length - 1 ? dataIndex + 1 : 0);
  };

  return (
    <div className={styles.containerVideoSlider}>
      <button
        type="button"
        className={styles.previousButton}
        onClick={handleClickBack}
        aria-label="previous-button"
      >
        Previous
      </button>
      <div className={styles.containerVideo}>
        <iframe
          src={videos[dataIndex].url}
          title={videos[dataIndex].title}
          allowFullScreen
          allow="autoplay; fullscreen"
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
      </div>
      <button
        type="button"
        className={styles.nextButton}
        onClick={handleClickNext}
        aria-label="next-button"
      >
        Next
      </button>
    </div>
  );
}

VideoSlider.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
