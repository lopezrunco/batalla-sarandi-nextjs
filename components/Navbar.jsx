import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/images/logo-batalla-sdi.svg"
            width="300%"
            height="90%"
            alt="Establecimiento Batalla de Sarandí"
          />
        </Link>
      </div>
      <div className={styles.menuToggle} onClick={() => setOpen(!open)}>
        <i className="fa fa-bars"></i>
      </div>
      <nav
        id="menu"
        className={styles.menu}
        style={{ top: open ? "0px" : "-100vh" }}
      >
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link href="/galeria">Galería</Link>
          </li>
          <li>
            <Link href="/novedades">Novedades</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
        <div className={styles.closeIcon} onClick={() => setOpen(!open)}>
          <i className="fas fa-times"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
