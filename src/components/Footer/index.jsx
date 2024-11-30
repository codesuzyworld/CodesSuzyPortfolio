import styles from "./footer.module.css"

export default function Footer() {
  console.log("Footer component rendering");
    return(
      <footer className={styles.footer}>
        <div>&copy; Copyright Suzanna Lam, 2024.</div>
      </footer>
    )
  }