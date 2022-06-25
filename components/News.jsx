import styles from "../styles/News.module.css";
import Link from "next/link";
import Image from "next/image";

const News = ({ news }) => {
  return (
    <section className={styles.container}>
      <span className={styles.subtitle}>
        Principales novedades del establecimiento
      </span>
      <h1 className={styles.title}>Novedades</h1>
      <div className={styles.news}>
        {news.map((el) => (
          // The passHref props force the Link component to pass the href prop down to the CustomLink child component.
          <Link passHref key={el.id} href={`/novedades/${el.name}`}>
            <div className={styles.new}>
              <span className={styles.cat}>{el.title}</span>
              <div className={styles.desc}>{el.desc}</div>
              {el.video ? (
                <video
                  src={`/images/${el.video}`}
                  autoPlay
                  muted
                  loop
                  className={styles.video}
                />
              ) : (
                <Image
                  src={`/images/${el.photo}`}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                  alt={el.title}
                />
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default News;
