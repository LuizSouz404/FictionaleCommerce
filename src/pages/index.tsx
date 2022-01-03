import Image from 'next/image';
import { Carousel } from '../components/Carousel';
import { Footer } from '../components/Footer';
import { Header } from "../components/Header";

import { BiSupport } from 'react-icons/bi'
import styles from './styles.module.scss';
import { FaMoneyBillAlt, FaTruck } from 'react-icons/fa';


export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.content}>
        <div className={styles.containerAdvisor}>
          <h2 className={styles.titleAdvisor}>Em destaque</h2>
          <div className={styles.contentAdvisor}>
            <Image layout="fill" src='/images/banner-discount.png'/>
            <button className={styles.buttonAdvisor}>Ver produtos</button>
          </div>
        </div>

        <div className={styles.carousel}>
          <Carousel />
        </div>


        <div className={styles.containerProducts}>
          <a>
            <div>
              <FaMoneyBillAlt size={50}/>
              <strong>Facilidade no pagamento</strong>
              <span>Pagamento por Pix, cartão de credito</span>
            </div>
          </a>
          <a>
            <div>
              <FaTruck size={50}/>
              <strong>Frete grátis</strong> 
              <span>Frete grátis para comprar acima de R$200</span>
            </div>
          </a>
          <a>
            <div>
              <BiSupport size={50}/>
              <strong>Suporte rápido e direto com o cliente</strong>
              <span>Suporte direto pelo whatsapp para maior agilidade</span>
            </div>
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}
