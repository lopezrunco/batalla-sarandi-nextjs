import style from "../styles/News.module.css";
import Link from "next/link";
import Image from "next/image";

const News = ({ news }) => {
  return (
    <div className={style.container}>
      <span className={style.subtitle}>
        Principales novedades del establecimiento
      </span>
      <h1 className={style.title}>Novedades</h1>
      <div className={style.news}>
        {news.map((el) => (
          <Link key={el.id} href={`/novedades/${el.name}`}>
            <>
              <h3>{el.title}</h3>
              <p>{el.desc}</p>
            </>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default News;
