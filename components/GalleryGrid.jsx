import { useState } from "react";
import styles from "../styles/GalleryGrid.module.css";

const GalleryGrid = () => {
  const [openImageViewer, setOpenImageViewer] = useState(false);
  const [expandedImgSrc, setExpandedImgSrc] = useState("");

  const openModal = (e) => {
    setOpenImageViewer(true);
    setExpandedImgSrc(e.target.src);
  };
  const closeModal = () => {
    setOpenImageViewer(false);
    setExpandedImgSrc("");
  };

  const imagesSources = [
    { source: "images/gallery-34.jpg" },
    { source: "images/gallery-31.jpg" },
    { source: "images/gallery-11.jpg" },
    { source: "images/gallery-1.jpg" },
    { source: "images/gallery-3.jpg" },
    { source: "images/gallery-6.jpg" },
    { source: "images/gallery-7.jpg" },
    { source: "images/gallery-5.jpg" },
    { source: "images/gallery-8.jpg" },
    { source: "images/gallery-9.jpg" },
    { source: "images/gallery-4.jpg" },
    { source: "images/gallery-10.jpg" },
    { source: "images/gallery-2.jpg" },
    { source: "images/gallery-12.jpg" },
    { source: "images/gallery-13.jpg" },
    { source: "images/gallery-14.jpg" },
    { source: "images/gallery-15.jpg" },
    { source: "images/gallery-16.jpg" },
    { source: "images/gallery-17.jpg" },
    { source: "images/gallery-18.jpg" },
    { source: "images/gallery-19.jpg" },
    { source: "images/gallery-20.jpg" },
    { source: "images/gallery-22.jpg" },
    { source: "images/gallery-23.jpg" },
    { source: "images/gallery-24.jpg" },
    { source: "images/gallery-21.jpg" },
    { source: "images/gallery-25.jpg" },
    { source: "images/gallery-26.jpg" },
    { source: "images/gallery-27.jpg" },
    { source: "images/gallery-28.jpg" },
    { source: "images/gallery-29.jpg" },
    { source: "images/gallery-30.jpg" },
    { source: "images/about-12.jpg" },
    { source: "images/about-14.jpg" },
    { source: "images/about-15.jpg" },
    { source: "images/gallery-32.jpg" },
    { source: "images/gallery-33.jpg" },
  ];

  return (
    <section className={styles.galleryGrid}>
      <article className="content-wrap">
        <div className={styles.grid}>
          {imagesSources.map((el, index) => {
            return (
              <a className={styles.item} key={index}>
                <img
                  src={el.source}
                  alt="Establecimiento Batalla de Sarandí"
                  onClick={openModal}
                />
              </a>
            );
          })}
        </div>
      </article>

      {openImageViewer && (
        <div className={styles.imgFullWidthContainer} onClick={closeModal}>
          <span className={styles.closebtn}>
            <i className="fas fa-times"></i>
          </span>
          <img
            src={expandedImgSrc}
            className={styles.expandedImg}
            alt="Batalla de Sarandi"
          />
        </div>
      )}
    </section>
  );
};

export default GalleryGrid;
