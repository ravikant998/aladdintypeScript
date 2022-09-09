import React from 'react'
import Slider from "react-slick";
import { useAppSelector } from '../../store/Hooks';
import OtherServiceCard from './OtherServiceCard';

const OtherService = () => {
  const anotherService=useAppSelector((state)=>state.anotherService)
  // console.log("anotherService", anotherService)
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div>
        <div className="simple-sliders">
        <div className="slider-heading">
          <h2>Other Services from This Seller</h2>
        </div>
        <div className="slider-wrap">
          <Slider {...settings}>
            {anotherService &&
              anotherService.map((items, index) => {
                return <OtherServiceCard props={items} key={index} />;
              })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default OtherService