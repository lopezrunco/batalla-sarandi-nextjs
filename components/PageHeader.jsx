import Link from "next/link";
import styles from "../styles/PageHeader.module.css";

const PageHeader = ({ bgImage, title, page }) => {
  return (
    <section
      className={styles.pageHeader}
      style={{ backgroundImage: `url(${`/images/${bgImage}.jpg`})` }}
    >
      <article className={styles.overlay}>
        <div className="content-wrap">
          <div className={styles.wrapper}>
            <h2>{title}</h2>
            <div className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <i className="fas fa-chevron-right"></i>
              <a className={styles.active}>
                {page}
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PageHeader;
