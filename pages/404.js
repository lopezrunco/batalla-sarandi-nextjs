import Link from "next/link"
import styles from "../styles/PageNotFound.module.css"

const PageNotFound = () => {
  return (
    <section className={styles.pageNotFound}>
      <article className={styles.overlay}>
        <div className="content-wrap">
          <div className={styles.flex}>
            <h2>404</h2>
            <div className="separator"></div>
            <h4>Página no encontrada</h4>
            <p>La página que busca no existe o ha sido eliminada.</p>
            <Link href="/" >
              <span className="btn btn-lg btn-secondary">
                Volver a Inicio
              </span>
            </Link>
          </div>
        </div>
      </article>
    </section>
  )
}

export default PageNotFound
