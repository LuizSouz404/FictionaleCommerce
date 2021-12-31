import Image from 'next/image';
import { Carousel } from '../components/Carousel';
import { Header } from "../components/Header";

import styles from './styles.module.scss';


export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.content}>
        <div className={styles.advisor}>
          <Image layout="fill" src='/images/banner-discount.png'/>
        </div>

        <div className={styles.carousel}>
          <Carousel />
        </div>
      </main>
    </>
  )
}
