import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.contentFooter}>
        <strong>
          Site feito com ❤️ por <a href="https://www.instagram.com/august_souz/">LS Desenvolvimento de sistemas</a> 
        </strong>
      </div>
    </footer>
  )
}