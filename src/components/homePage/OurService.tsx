import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/Hooks";
const OurService = () => {
  const homepagedata = useAppSelector((state) => state?.homepage);
  // console.log("homepagedata",homepagedata)
  return (
    <div>
      <section className="core-services">
        <div className="container">
          <h2>Our Core Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="services-block">
            {homepagedata &&
              homepagedata.categoryData.map((items, index) => {
                return (
                  <div className="service-wrap" key={index}>
                    <Link to="">
                      <div className="img-wrap">
                        <img
                          src={
                            homepagedata.categoryImagePath + items.categoryIcon
                          }
                          alt="service"
                        />
                      </div>
                      <div className="service-info">{items.name}</div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurService;
