import * as React from "react";
import Header from "../../components/Header/Header.jsx";
import styles from "./Shop.module.css";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import { products, gadgets, felpe } from "../../data/products.js";
import IntroTextShop from "../../components/IntroTextShop/IntroTextShop.jsx";
import MyImageCarousel from "../../components/CarouselShop/CarouselShop.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function Shop() {
  return (
    <>
      <Header></Header>
      <MyImageCarousel></MyImageCarousel>
      <IntroTextShop></IntroTextShop>
      <div className={styles.containerCardShop}>
        {products.map((el) => (
          <ProductCard {...el} key={el.id} />
        ))}

        {felpe.map((el) => (
          <ProductCard {...el} key={el.id}></ProductCard>
        ))}
        {gadgets.map((el) => (
          <ProductCard {...el} key={el.id}></ProductCard>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
}
