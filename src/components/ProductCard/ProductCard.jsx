import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

function ProductCard({
  src,
  title,
  description,
  price,
  color,
  size,
  id,
  donna,
}) {
  return (
    <Card className={styles.cardProduct} style={{ width: "20rem" }}>
      <Card.Img className={styles.imgProduct} variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {size && <Card.Text>Donna/Uomo</Card.Text>}
        {color && <Card.Text>Bianco/Nero</Card.Text>}
        <div className={styles.containerBtnPrice}>
          <Card.Text>{price}</Card.Text>
          <Button className={styles.btnCardShop} variant="primary">
            <Link className={styles.linkBtn} to={"/shop/" + id}>
              VEDI
            </Link>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
