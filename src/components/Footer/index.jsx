import styles from "./footer.module.css"

export default function Footer() {
  console.log("Footer component rendering");
    return(
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.contact}>
          <h1 className={styles.title}>Let's Keep in Touch</h1>
            <p className={styles.name}>Suzanna Lam</p>
            <div className={styles.location}>
                <i className="fa-solid fa-location-dot"></i>
              <p>Toronto, Canada</p>          
            </div>
            <a href="mailto:codessuzy@gmail.com" className={styles.email}>
              <i className="fa-solid fa-envelope"></i>
              <p>codessuzy@gmail.com</p>
            </a>        
          </div>

          <div className={styles.copyright}>
            <div className={styles.footerStack}>Website powered by JavaScript, React, and Express.js.</div>
            <div className={styles.footerStack}>Graphics made with Blender, Illustrator, and Photoshop.</div>
            <div>&copy; Copyright Suzanna Lam, 2024.</div>          
          </div>
        </div>


      </footer>
    )
  }