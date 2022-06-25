import { useState } from "react";
import styles from "../styles/HomeSlider.module.css";
import { sliderData } from "../data";

const Intro = () => {
  const [actualSlide, setActualSlide] = useState(1);

  const nextSlide = () => {
    actualSlide === sliderData.length
      ? setActualSlide(1)
      : setActualSlide(actualSlide + 1);
  };
  const prevSlide = () => {
    actualSlide === 1
      ? setActualSlide(sliderData.length)
      : setActualSlide(actualSlide - 1);
  };

  return (
    <div className={styles.container}>
      {sliderData.map((el) => {
        if (el.id === actualSlide) {
          return (
            <div key={el.id}>
              <div
                className={styles.sliderContainer}
                style={{
                  backgroundImage: `url(${`/images/slider-${actualSlide}.jpg`})`,
                }}
              >
                <div className={styles.caption}>
                  <div>
                    <p>{el.subtitle}</p>
                    <div className={styles.separtor}></div>
                    <h2>{el.title}</h2>
                  </div>
                  <div className={styles.controllers}>
                    <button onClick={prevSlide}>
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button onClick={nextSlide}>
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                  <div className={styles.position}>
                    {sliderData.map((el, index) => {
                      if (index + 1 === actualSlide) {
                        return (
                          <div
                            className={styles.positionDotActive}
                            key={el.id}
                          ></div>
                        );
                      } else {
                        return (
                          <div className={styles.positionDot} key={el.id}></div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Intro;
