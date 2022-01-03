import Link from 'next/link';
import styles from './styles.module.scss';

type CategoryItemProps = {
  title: string,
  urlImage: string,
  urlLink: string
}

export function CategoryItem({ title, urlImage, urlLink }: CategoryItemProps) {
  return (
    <Link href={urlLink} passHref>
        <div className={styles.container}>
        <div className={styles.wrapper}>
        </div>
          <div className={styles.content}>
            <img src={urlImage} alt="Categoria camisa" />
          </div>
          <h1>{title}</h1>
        </div>
      </Link>
  )
}