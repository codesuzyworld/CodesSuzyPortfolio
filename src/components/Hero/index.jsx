import styles from "./hero.module.css"


export default function Hero() {
      return(
        <section className={styles["hero"]}>
          <div className={styles["hero-container"]}>
            <div className={styles["hero-text-container"]}>
              <h1 className={styles["hero-title"]}>Hello!</h1>
              <h2 className={styles["hero-subtitle"]}>I'm <span className={styles["hero-subtitle-name"]}>Suzanna Lam</span></h2>
              <div className={styles["role-container"]}>
                  <p className={styles["role-green"]}>Web Developer</p>
                  <p className={styles["role-beige"]}>Web Designer</p>
                  <p className={styles["role-pink"]}>Graphics Designer</p>
              </div>
              <p className={styles["hero-description"]}> I specialize in crafting compelling brand identities and intuitive websites. My expertise extends to 2D and 3D design that add depth and engagement to digital experiences.</p>
              <div className={styles["social-icons"]}>
                <a href="https://github.com/codesuzyworld">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/codessuzy/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>

                <a 
                className={styles["resume-button"]}
                href="https://drive.google.com/file/d/1PqS-086DfnKIoJA70cy7sCCHMyl2tHK5/view?usp=sharing">
                  Resume
                </a>

              </div>
            </div>
          </div>

        </section>
      )
    }