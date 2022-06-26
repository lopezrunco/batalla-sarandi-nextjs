import Link from "next/link";
import styles from "../styles/LastNews.module.css";

const LastNews = ({ news }) => {
  return (
    <section className={styles.latestNews}>
      <article className="content-wrap">
        <div className={styles.flex}>
          <div className="title">
            <span className="top-title">
              Principales novedades del establecimiento
            </span>
            <h2>Novedades</h2>
            <div className={styles.separator}></div>
          </div>

          <div className={styles.newsFlex}>
            <div className={styles.flex}>
              {news.map((el, index) => {
                if (index < 3) {
                  return (
                    <div
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
                          <div className="btn btn-lg btn-secondary">
                            Leer más
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div className="view-more-btn">
            <Link href="/novedades">
              <span className="btn btn-lg btn-secondary">
                Ver todas las novedades
              </span>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default LastNews;
