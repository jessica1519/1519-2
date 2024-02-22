import React from "react";
import HoverCarousel from "hover-carousel";
import styles from "./CarouselShop.module.css";
const MyImageCarousel = () => {
  const images = [
    "/static/images/imgCarosello/1.jpg",
    "/static/images/imgCarosello/2.jpg",
    "/static/images/imgCarosello/3.jpg",
    "/static/images/imgCarosello/4.jpg",
    "/static/images/imgCarosello/5.jpg",
    "/static/images/imgCarosello/6.jpg",
    "/static/images/imgCarosello/7.jpg",
    "/static/images/imgCarosello/8.jpg",
    "/static/images/imgCarosello/9.jpg",
    "/static/images/imgCarosello/10.jpg",
    "/static/images/imgCarosello/11.jpg",
    "/static/images/imgCarosello/12.jpg",
  ];

  return (
    <div>
      <HoverCarousel images={images} />
    </div>
  );
};

export default MyImageCarousel;
