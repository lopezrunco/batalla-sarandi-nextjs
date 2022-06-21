import Image from "next/image";
import { testimonials } from "../data";
import styles from "../styles/Testimonials.module.css";

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Testimonials</h1>
      <div className={styles.wrapper}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.card}>
            <p className={styles.comment}>{testimonial.comment}</p>
            <div className={styles.person}>
              <Image
                className={styles.avatar}
                src={`/images/${testimonial.avatar}`}
                width="45"
                height="45"
                objectFit="cover"
                alt="User avatar"
              />
              <div className={styles.info}>
                <span className={styles.username}>{testimonial.name}</span>
                <span className={styles.jobTitle}>{testimonial.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
