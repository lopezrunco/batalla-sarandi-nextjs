import { useState } from "react";
import Image from "next/image";
import { testimonials } from "../data";
import styles from "../styles/TestimonialsSlider.module.css";

const TestimonialsSlider = () => {
  const [actualSlide, setActualSlide] = useState(1);

  const nextSlide = () => {
    actualSlide === testimonials.length
      ? setActualSlide(1)
      : setActualSlide(actualSlide + 1);
  };
  const prevSlide = () => {
    actualSlide === 1
      ? setActualSlide(testimonials.length)
      : setActualSlide(actualSlide - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sliderWrapper}>
        {testimonials.map((el) => {
          if (el.id === actualSlide) {
            return (
              <div className={styles.card}>
                <div className={styles.leftArrow} onClick={prevSlide}>
                  <i className="fas fa-chevron-left"></i>
                </div>
                <div>
                  <p className={styles.comment}>{el.comment}</p>
                  <div className={styles.user}>
                    <Image
                      className={styles.avatar}
                      src={`/images/${el.avatar}`}
                      width="60"
                      height="60"
                      objectFit="cover"
                      alt="User avatar"
                    />
                    <div className={styles.info}>
                      <h3 className={styles.username}>{el.name}</h3>
                      <p className={styles.jobTitle}>{el.title}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.rightArrow} onClick={nextSlide}>
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
