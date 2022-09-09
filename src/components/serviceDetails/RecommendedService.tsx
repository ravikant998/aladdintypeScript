import React from 'react'
import { useAppSelector } from '../../store/Hooks'
import Slider from "react-slick";

import RecommendedServiceCard from './RecommendedServiceCard';
const RecommendedService = () => {
  const recommendedService=useAppSelector((state)=>state.recommendedService)
  // console.log("recommendedService",recommendedService)
  const settings = {
    // infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div>
        <div className="simple-sliders recommend">
    <div className="slider-heading">
        <h2>Recommended Services</h2>
    </div>
    <div className="slider-wrap">
    <Slider {...settings}>
            {recommendedService &&
              recommendedService.map((items, index) => {
                return <RecommendedServiceCard data={items} key={index} />;
              })}
          </Slider>
    </div>
</div>

    </div>
  )
}

export default RecommendedService