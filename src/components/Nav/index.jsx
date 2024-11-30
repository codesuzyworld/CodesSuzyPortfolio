import {NavLink} from "react-router-dom"
import styles from "./nav.module.css"

export default function Nav() {
  return (
    <nav className={styles['navBar']} aria-label="Main menu">
      <ul>
        <li>
          <NavLink 
            to="/"
            className={({ isActive }) => isActive ? styles.active : ""}
          >
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}