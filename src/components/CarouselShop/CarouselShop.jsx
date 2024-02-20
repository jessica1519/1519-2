import React from "react";
import HoverCarousel from "hover-carousel";
const MyImageCarousel = () => {
  const images = [
    "/static/images/imgCarosello/bianca-fronte.jpg",
    "/static/images/imgCarosello/bianca-retro.jpg",
    "/static/images/imgCarosello/nera-fronte.jpg",
    "/static/images/imgCarosello/nera-retro.jpg",
    "/static/images/imgCarosello/nera-copertina.jpg",
    "/static/images/imgCarosello/uomo-donna-fronte.jpg",
  ];

  return (
    <div>
      <HoverCarousel images={images} />
    </div>
  );
};

export default MyImageCarousel;
