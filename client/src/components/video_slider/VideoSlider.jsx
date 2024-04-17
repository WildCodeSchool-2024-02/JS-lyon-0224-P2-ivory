import { useState } from "react";

import styles from "./VideoSliderStyle.module.css";


const data = [
  {
    index : 0,
    src : "https://www.youtube.com/embed/oEAuNzWXRjM?si=2d-_JLRZrXEPRyxV",
  },
  {
    index : 1,
    src : "https://www.youtube.com/embed/it1rTvBcfRg?si=RKDMqn8u4K1PGbBy" ,
  },
  {
    index : 2,
    src : "https://www.youtube.com/embed/salY_Sm6mv4?si=zWKq7c6SMmRSiftc" ,
  }
]


export default function VideoSlider() {
  const [dataIndex , setDataIndex] = useState(0);
  const handleClickBack = () => {
    if(dataIndex > 0){
      setDataIndex(dataIndex -1)
    }
    if (dataIndex === 0){
      setDataIndex(data.length -1);
    }
  }
  const handleClickNext = () => {
    if(dataIndex < data.length -1){
      setDataIndex(dataIndex + 1)
    }
    if (dataIndex === data.length -1){
      setDataIndex(0);
    }
  }

  return (
    <div className={styles.containerVideoSlider}>
      <button type="button" className={styles.previousButton} onClick={handleClickBack} alt='previous-button' >Previous</button>
      <div className={styles.containerVideo}>
            <iframe
              src={data[dataIndex].src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
      </div>
      <button type="button" className={styles.nextButton} onClick={handleClickNext} alt='next-button'>Next</button>
    </div>
  );
}
