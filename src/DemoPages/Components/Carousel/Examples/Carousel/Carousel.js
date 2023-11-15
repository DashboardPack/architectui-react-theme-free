import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import image1 from "../../../../../assets/utils/images/dropdown-header/abstract1.jpg";
import image2 from "../../../../../assets/utils/images/dropdown-header/abstract2.jpg";
import image3 from "../../../../../assets/utils/images/dropdown-header/abstract3.jpg";

const items = [
  {
    id: 1,
    src: image1,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    id: 2,
    src: image2,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    id: 3,
    src: image3,
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const CarouselDefault = () => <UncontrolledCarousel items={items} />;

export default CarouselDefault;
