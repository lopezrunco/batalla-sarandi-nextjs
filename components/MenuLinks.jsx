import Link from "next/link";

const MenuLinks = () => {
  return (
    <>
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
    </>
  );
};

export default MenuLinks;
