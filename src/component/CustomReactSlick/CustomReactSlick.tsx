import { ReactNode } from "react";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import "./CustomReactSlick.css";

interface CustomReactSlickProps {
  children: ReactNode;
  setting?: Settings;
  className?: string;
}

const CustomReactSlick = ({
  children,
  setting,
  className,
}: CustomReactSlickProps) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    ...setting,
  };

  return (
    <Slider className={`${className}`} {...settings}>
      {children}
    </Slider>
  );
};

export default CustomReactSlick;
