import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import MenuLinks from "../components/MenuLinks";

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
        className={styles.menuMobile}
        style={{ top: open ? "0px" : "-100vh" }}
      >
        <ul onClick={() => setOpen(!open)}>
          <MenuLinks />
        </ul>
        <div className={styles.closeIcon} onClick={() => setOpen(!open)}>
          <i className="fas fa-times"></i>
        </div>
      </nav>
      <nav className={styles.menuDesktop}>
        <ul>
          <MenuLinks />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
