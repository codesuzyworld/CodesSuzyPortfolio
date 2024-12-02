import styles from "./header.module.css"
import Nav from "../Nav"

export default function Header() {
    return (
        <header>
        <h1 className={styles.logo}>Suzanna Lam</h1>
        <Nav />
        </header>
    );
  }
