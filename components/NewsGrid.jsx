import Link from "next/link";
import styles from "../styles/NewsGrid.module.css";
import { data } from "../data";

const NewsGrid = () => {
  return (
    <section className={styles.news}>
      <article className="content-wrap">
        <div className={styles.grid}>
          {data.map((el, index) => (
            <div
              key={index}
              className={styles.newItem}
              style={{
                backgroundImage: `url(${`/images/${el.photo}`})`,
              }}
            >
              {/* The passHref props force the Link component to pass the href prop down to the CustomLink child component. */}
              <Link passHref key={el.id} href={`/novedades/${el.name}`}>
                <div className={styles.infoHover}>
                  <h2 className={styles.cat}>{el.title}</h2>
                  <p className={styles.desc}>{el.desc}</p>
                  <div className="btn btn-lg btn-secondary">Leer más</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default NewsGrid;
