import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">BATALLA DE SARANDI</Link>
      <ul>
        <li className={styles.listItem}>
          <Link href="/">Inicio</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/nosotros">Nosotros</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/galeria">Galería</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/novedades">Novedades</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/contacto">Contacto</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;