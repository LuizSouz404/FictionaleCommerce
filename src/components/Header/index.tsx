import Link from "next/link"

import styles from './styles.module.scss'
import { FaUser, FaShoppingBag, FaHeart } from 'react-icons/fa'
import { useAuth } from "../../context/AuthContext"

export function Header() {

  const {user, loginUser, logoutUser} = useAuth();

  async function handleSubmit(event: any) {
    event.preventDefault();

    user ? logoutUser() : await loginUser({email: "luiz@dev.io"});
  }

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <a href="/home">
          <img className={styles.logo} src="/logo.svg" alt="Up Shooper" />
        </a>

        <div className={styles.containerButtons}>
          <button className={styles.buttonBadge}>
            <FaShoppingBag size={20}/>
            <div className={styles.active}><span>10</span></div>
          </button>
          <button className={styles.buttonBadge}>
            <FaHeart size={20}/>
            <div className={styles.active}><span>10</span></div>
          </button>
          {user ? (
            <button onClick={event => handleSubmit(event)} style={{backgroundImage: `url(/pp.jfif)`}} className={styles.buttonWithIcon}>

            </button>
          ) : (
            <button onClick={event => handleSubmit(event)} className={styles.buttonWithIcon}>
              <FaUser size={25}/>
            </button>
          )}
        </div>
      </div>
    </header>
  )
}