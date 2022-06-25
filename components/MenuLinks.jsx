import Link from "next/link";

const MenuLinks = () => {
  return (
    <>
      <li>
        <Link href="/" passHref>Inicio</Link>
      </li>
      <li>
        <Link href="/nosotros" passHref>Nosotros</Link>
      </li>
      <li>
        <Link href="/galeria" passHref>Galería</Link>
      </li>
      <li>
        <Link href="/novedades" passHref>Novedades</Link>
      </li>
      <li>
        <Link href="/contacto" passHref>Contacto</Link>
      </li>
    </>
  );
};

export default MenuLinks;
