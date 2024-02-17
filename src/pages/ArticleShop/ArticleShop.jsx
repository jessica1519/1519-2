import * as React from "react";
import Header from "../../components/Header/Header.jsx";
import styles from "./ArticleShop.module.css";
import ItemProduct from "../../components/ItemProduct/ItemProduct.jsx";
import { products, felpe, gadgets } from "../../data/products.js";
import Footer from "../../components/Footer/Footer.jsx";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart.jsx";

export default function ArticleShop() {
  const params = useParams();
  const productId = [...products, ...felpe, ...gadgets].find(
    (item) => item.id == params.articleId
  );

  return (
    <>
      <Header></Header>

      <ItemProduct product={productId}></ItemProduct>

      <Footer></Footer>
    </>
  );
}
