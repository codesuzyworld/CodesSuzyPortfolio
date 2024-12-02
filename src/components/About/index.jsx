import styles from "./about.module.css"

export default function About() {
      return(
        <section className={styles["about-me"]} id="about">
          <h2>About Me</h2>
          <div className={styles["about-me-container"]}>
          <article className={styles.past}>
            <div className={styles.pastContent}>
              <h1>
                PAST
              </h1>
              <p>
                I began my journey as an English Literature graduate.  I was introduced to the world of web design when I started my first job as a designer.
              </p>
            </div>

          </article>
          <article className={styles.now}>
            <div className={styles.nowContent}>
              <h1>
                NOW
              </h1>
              <p>
                Currently a Web Development student at Humber, and combining my creativity and programming skills to craft engaging digital experiences.
              </p>              
            </div>

          </article>
          </div>
        </section>
      )
    }