import Link from "next/link"

import styles from './styles.module.scss'
import { FaUser, FaShoppingBag } from 'react-icons/fa'

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <a href="/home">
          <img className={styles.logo} src="/logo.svg" alt="Up Shooper" />
        </a>

        <div className={styles.containerButtons}>
          <button className={styles.buttonBadge}>
            <FaShoppingBag size={16}/>
            <div className={styles.active}><span>10</span></div>
          </button>
          <button className={styles.buttonWithIcon}><FaUser size={16}/><span>Login</span></button>
        </div>
      </div>
    </header>
  )
}