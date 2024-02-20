import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

function ProductCard({ src, title, description, price, color, size, id }) {
  return (
    <Card className={styles.cardProduct} style={{ width: "20rem" }}>
      <Card.Img variant="top" src={src} />
      <Card.Body
        style={{ lineHeight: "1rem" }}
        className={styles.alingCenterSmall}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {size && <Card.Text>Donna/Uomo</Card.Text>}
        {color && <Card.Text>Bianco/Nero</Card.Text>}
        <div className={styles.containerBtnPrice}>
          <Card.Text>{price}</Card.Text>
          <Button className={styles.btnCardShop} variant="primary">
            <Link className={styles.linkBtn} to={"/shop/" + id}>
              SEE MORE
            </Link>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
