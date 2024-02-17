import * as React from "react";
import Header from "../../components/Header/Header.jsx";
import CardHome from "../../components/CardHome/CardHome.jsx";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <Header></Header>
      <CardHome></CardHome>
    </div>
  );
}
export default Home;
