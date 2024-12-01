import styles from "./nav.module.css"

export default function Nav() {
  return (
    <nav className={styles['navBar']} aria-label="Main menu">
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  )
}