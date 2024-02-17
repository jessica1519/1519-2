import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./CardHome.module.css";
import { Link } from "react-router-dom";

export default function CardHome() {
  return (
    <Card className={styles.card}>
      {/*<Card.Header className={styles.titleCard}>#1519</Card.Header>*/}

      <Card.Text className={styles.textCard}>
        Il brand nasce dall’esigenza di creare qualcosa di nuovo, autentico ed
        originale, che permetta alle persone di esprimere la propria arte ed
        identità.
      </Card.Text>
      <Button className={styles.btnCard}>
        <Link className={styles.linkBtnCard} to="/shop">
          CATALOGO
        </Link>
      </Button>
    </Card>
  );
}
