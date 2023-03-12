import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.inner}>
        <li>
          <span>
            Overview
            <span></span>
          </span>
        </li>
        <li>
          <span>
            Media
            <span></span>
          </span>
        </li>
        <li>
          <span>
            Fandom
            <span></span>
          </span>
        </li>
        <li>
          <span>
            Share
            <span></span>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Header;
