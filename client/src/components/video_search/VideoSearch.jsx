import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import VideoSlider from "../video_slider/VideoSlider";

/**
 * Transforme les URLs des vidéos pour les adapter au format embarqué.
 * @param {Array} videos - Liste des vidéos récupérées avec l'API, où chaque vidéo est un objet contenant `id`, `url`, et `title`.
 * @returns {Array} La liste des vidéos avec les URLs modifiées pour intégrer le segment `/embed`.
 */
function transformVideoUrls(videos) {
  return videos.map((video) => {
    const embedUrl = video.url.replace("/video/", "/embed/video/");
    return { ...video, url: embedUrl };
  });
}

/**
 * Composant pour afficher un slider de vidéos.
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Array} props.videos - Tableau d'objets vidéo, chacun contenant `id`, `url` modifiée, et `title`.
 * @returns {JSX.Element} Un élément JSX qui affiche un slider avec les vidéos fournies.
 */

export default function VideoSearch({ videoIds }) {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const responses = await Promise.all(
        videoIds.map((id) =>
          axios.get(
            `https://api.dailymotion.com/video/${id}?fields=id,url,title`
          )
        )
      );
      const fetchedVideos = responses.map((res) => res.data);
      const transformedVideos = transformVideoUrls(fetchedVideos);
      setVideos(transformedVideos);
    } catch (error) {
      console.error("Error while retrieving videos", error);
      setVideos([]);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div>
      {videos.length > 0 ? (
        <VideoSlider videos={videos} />
      ) : (
        <p>Video not found</p>
      )}
    </div>
  );
}

VideoSearch.propTypes = {
  videoIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};
