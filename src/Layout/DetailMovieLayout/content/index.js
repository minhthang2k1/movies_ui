import { Link } from "react-router-dom";

import styles from "./Content.module.scss";

function Content() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.custombg}>
        <div className={styles.singleColumn}>
          <section className={styles.imageInner}>
            <div className={styles.poterWrapper}>
              <div className={styles.poster}>
                <div className={styles.imgContent}>
                  <img
                    className={styles.posterContent}
                    src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xCCtPOoJH1VktSJCHetuzEWkDj6.jpg"
                    alt="thang"
                  />
                </div>
                <div className={styles.zoom}>
                  <Link className={styles.noClick}>
                    <span className={styles.fullscreen}></span>
                    Expand
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.headerPosterWrapper}>
              <section className={styles.headerPoster}>
                <div className={styles.titlePoster}>
                  <h2>
                    <Link>Luther: The Fallen Sun </Link>
                    <span>(2023)</span>
                  </h2>
                  <div className={styles.facts}>
                    <span className={styles.certification}>15 </span>
                    <span className={styles.release}>02/24/2023 (GB)</span>
                    <span className={styles.genres}>
                      <Link>Thriller</Link>
                    </span>
                    <span className={styles.runtime}>2h 9m</span>
                  </div>
                </div>
                <ul className={styles.actions}>
                  <li className={styles.chart}>
                    <div className={styles.consensus}>
                      <div className={styles.outerRing}>
                        <div className={styles.scoreChart}>
                          <div className={styles.percent}>
                            <span className={styles.iconPercent}>71%</span>
                          </div>
                          <canvas
                            height="75"
                            width="75"
                            style={{ height: "60px", width: "60px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.text}>
                      User
                      <br />
                      Score
                    </div>
                  </li>
                  <li>
                    <Link>
                      <span className={styles.list}></span>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link>
                      <span className={styles.favorite}></span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className={styles.watchlists}></span>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span className={styles.rating}></span>
                    </Link>
                  </li>
                  <li className={styles.video}>
                    <Link>
                      <span className={styles.play}></span>
                      Play Trailer
                    </Link>
                  </li>
                </ul>
                <div className={styles.headerInfo}>
                  <h3>Overview</h3>
                  <div className={styles.overview}>
                    <p>
                      A gruesome serial killer is terrorizing London while
                      brilliant but disgraced detective John Luther sits behind
                      bars. Haunted by his failure to capture the cyber
                      psychopath who now taunts him, Luther decides to break out
                      of prison to finish the job by any means necessary.
                    </p>
                  </div>
                  <ol className={styles.people}>
                    <li className={styles.profile}>
                      <p>
                        <Link>Jamie Payne</Link>
                      </p>
                      <p className={styles.character}>Director</p>
                    </li>
                    <li className={styles.profile}>
                      <p>
                        <Link>Jamie Payne</Link>
                      </p>
                      <p className={styles.character}>Director</p>
                    </li>
                  </ol>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Content;
