import Search from "../Search/Search";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>
          <span className={styles.highlight}>MEME</span> Generator{" "}
        </h1>

        <p className={styles.description}>
          Browse the most popular meme templates and share the laughs with
          others
        </p>

        <Search />

        <p className={styles.searchInfo}>
          Search for a template or <a href="#templates">browse templates</a>
        </p>
      </div>
    </div>
  );
}
