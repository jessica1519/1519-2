import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { products, felpe, gadgets } from "../../data/products";
import styles from "./ItemProduct.module.css";
import { Link } from "react-router-dom";
import CarouselGallery from "../CarouselGallery/CarouselGallery";
import CheckBox from "../CheckBox/CheckBox";
import { useState } from "react";
import { CartContext } from "../../store/shopping-cart-context";
import { useContext } from "react";

export default function ItemProduct({ product }) {
  const [genderSelected, setGenderSelected] = useState("Donna");
  function changeGender(gender) {
    setGenderSelected(gender);
  }
  const [colorSelected, setColorSelected] = useState("Bianco");
  function changeColor(color) {
    setColorSelected(color);
  }
  const [sizeSelected, setSizeSelected] = useState("S");
  function selectSize(size) {
    setSizeSelected(size);
  }
  console.log(sizeSelected);

  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className={styles.containerBtn}>
        {[...products, ...felpe, ...gadgets].map((el) => (
          <div key={el.title}>
            <Button className={styles.btnCardShop} variant="primary">
              <Link className={styles.linkCardShop} to={"/shop/" + el.id}>
                {el.title}
              </Link>
            </Button>
          </div>
        ))}
      </div>

      <div className={styles.contentItemProduct}>
        <CarouselGallery gallery={product.gallery}></CarouselGallery>
        <Card style={{ width: "18rem" }} className={styles.cardText}>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>

            {product?.size && (
              <CheckBox
                propsChangeFunction={changeGender}
                opzione1="Donna"
                opzione2="Uomo"
              ></CheckBox>
            )}

            <div className={styles.containerBtnSize}>
              {product?.size?.donna.map((el) => (
                <div key={el}>
                  <Button
                    onClick={() => selectSize(el)}
                    className={styles.btnSize}
                    variant="primary"
                  >
                    {el}
                  </Button>
                </div>
              ))}
            </div>
            {product?.color && (
              <CheckBox
                propsChangeFunction={changeColor}
                opzione1="Bianco"
                opzione2="Nero"
              ></CheckBox>
            )}

            <div className={styles.containerBtnPrice}>
              <Card.Text>{product.price}</Card.Text>
              <Button
                onClick={() =>
                  addToCart({
                    ...product,
                    color: colorSelected,
                    gender: genderSelected,
                    size: sizeSelected,
                  })
                }
                className={styles.btnCardShop}
                variant="primary"
              >
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
