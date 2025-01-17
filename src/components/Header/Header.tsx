import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/">
        <h2>
          <span className={styles.highlight}>MEME</span> Generator
        </h2>
      </Link>

      <span className={styles.pageName}>Editor</span>
    </header>
  );
}
