import { Link } from "react-router-dom";
import styles from "./CardResult.module.scss";
import nullImg from "../../../../assets/null.jpg";

const CardResult = ({ data }) => {
  return (
    <div className={styles.cardResult}>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <div className={styles.poster}>
            <Link to="/news">
              <img
                src={
                  data.poster_path === null
                    ? nullImg
                    : `https://image.tmdb.org/t/p/w92${data.poster_path}`
                }
                alt=""
              ></img>
            </Link>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.wrapperDetail}>
            <div className={styles.title}>
              <Link to="/news">
                <h2>{data.original_title || data.name}</h2>
              </Link>
              <p className={styles.releaseDate}>
                {data.release_date || data.first_air_date}
              </p>
            </div>
          </div>
          <div className={styles.overview}>
            <p className={styles.over}>{data.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardResult;
