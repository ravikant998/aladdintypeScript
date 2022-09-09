import Slider from "react-slick";
import { useAppSelector } from "../../store/Hooks";
const BannerList = () => {
  const homepagedata = useAppSelector((state) => state?.homepage);
  // console.log("gethomepage",JSON.stringify(homepagedata))

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };
  return (
    <section className="banner">
      <Slider {...settings}>
        {homepagedata?.bannerData
          ? homepagedata?.bannerData?.map((items, index) => {
              return (
                <div className="container" key={index}>
                  <div className="banner-wrap">
                    <div className="banner-right"></div>
                    <div className="img-wrap">
                      <img
                        src={homepagedata.bannerImagePath + items.webImage}
                        alt="banner"
                      />
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </Slider>
    </section>
  );
};

export default BannerList;
