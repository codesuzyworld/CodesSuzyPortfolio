import styles from "./hero.module.css"

export default function Hero() {
    console.log("Hero component rendering"); 
      return(
        <section className={styles["hero"]}>
            <h1 className={styles["hero-title"]}>Hello!</h1>
            <h2 className={styles["hero-subtitle"]}>I'm <span className={styles["hero-subtitle-name"]}>Suzanna Lam</span></h2>
            <div className={styles["role-container"]}>
                <p className={styles["role-green"]}>Web Developer</p>
                <p className={styles["role-beige"]}>Web Designer</p>
                <p className={styles["role-pink"]}>Graphics Designer</p>
            </div>
            <p className={styles["hero-description"]}> I specialize in crafting compelling brand identities and intuitive websites. My expertise extends to 2D and 3D design that add depth and engagement to digital experiences.</p>
        </section>
      )
    }