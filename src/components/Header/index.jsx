import styles from "./header.module.css"
import Nav from "../Nav"

export default function Header() {
    console.log("Header component rendering"); // Add this line
    return (
        <header>
        <h1 className={styles.logo}>Suzanna Lam</h1>
        <Nav />
        </header>
    );
  }
