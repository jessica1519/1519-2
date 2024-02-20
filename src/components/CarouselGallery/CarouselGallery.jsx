import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "./CarouselGallery.module.css";

export default function CarouselGallery({ gallery }) {
  return (
    <div className={styles.contenitorCarousel}>
      <Carousel>
        {gallery?.map((el) => (
          <div key={el}>
            <img src={el} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
