import Slider from "react-slick";
import styles from './styles.module.scss';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CategoryItem } from "../CategoryItem";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  initialSlide: 1,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
}

export function Carousel() {
  return (
    <div className={styles.container}>
      <h2>
        Categoria
      </h2>
      <Slider {...settings}>
        <CategoryItem title="Camisa" urlImage="/images/camisa.png" urlLink="#" />
        <CategoryItem title="Casaco" urlImage="/images/casaco-claro.png" urlLink="#" />
        <CategoryItem title="Calça" urlImage="/images/calca.png" urlLink="#" />
        <CategoryItem title="Bermudas" urlImage="/images/camisa-de-manga.png" urlLink="#" />
        <CategoryItem title="Acessorios" urlImage="/images/camisa.png" urlLink="#" />
      </Slider>
    </div>
  )
}