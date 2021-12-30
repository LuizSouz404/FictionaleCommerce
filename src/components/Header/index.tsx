import Link from "next/link"

import styles from './styles.module.scss'
import { FaUser, FaShoppingBag } from 'react-icons/fa'

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <button><FaUser size={20}/>Login</button>

        <a href="/home">
          <img src="/logo.svg" alt="Up Shooper" />
        </a>

        <button>
          <FaShoppingBag size={20}/>
          <div className={styles.active}><span>10</span></div>
        </button>
      </div>
      <nav className={styles.navbar}>
        <Link href="estoque/">Todos</Link>
        <Link href="estoque/camisa">Camisas</Link>
        <Link href="estoque/casaco">Casacos</Link>
        <Link href="estoque/calça">Calças</Link>
        <Link href="estoque/acessorios">Acessórios</Link>
      </nav>
    </header>
  )
}