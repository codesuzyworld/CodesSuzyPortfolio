import styles from "./contacts.module.css"

export default function Contacts() {
    return (
        <section className={styles["contacts"]} id="contacts">
            <h2>Get in Touch</h2>

            <div className={styles.contactContainer}> 

            </div>
                <div className={styles.github}>
                    <div className={styles.pastContent}>
                    <h1>
                        GITHUB
                    </h1>
                    <p>
                        I began my journey as an English Literature graduate.  I was introduced to the world of web design when I started my first job as a designer.
                    </p>
                </div>
            </div>

        </section>
    )
}