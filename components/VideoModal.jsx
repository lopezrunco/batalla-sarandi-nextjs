import { useState } from "react";
import styles from "../styles/VideoModal.module.css";

const VideoModal = ({ videoSrc, bgImgName, title, subtitle }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <section
      className={styles.video}
      style={{ backgroundImage: `url(${`/images/${bgImgName}`})` }}
    >
      <article className="content-wrap">
        <div className={styles.flex}>
          <div className={styles.playIcon}>
            <a onClick={handleClick}>
              <i className="fas fa-play"></i>
            </a>
          </div>
          <span className="top-title">{subtitle}</span>
          <h2>{title}</h2>
        </div>
      </article>

      {openModal && (
        <div className={styles.videoModal}>
          <div className={styles.closeIcon} onClick={handleClick}>
            <i className="fas fa-times"></i>
          </div>
          <iframe
            src={videoSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default VideoModal;
