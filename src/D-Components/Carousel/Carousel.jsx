import { ButtonKnowMoreHero } from "../../Components";
import "../../Pages/Home/home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const CarouselA = () => {
  return (
    <>
      <Carousel infiniteLoop>
       <SubCompCarousel bgImg={'bg-home'} />
       <SubCompCarousel bgImg={'bg-home1'} />
       <SubCompCarouselOpposite bgImg={'bg-home2'} />
      </Carousel>
    </>
  );
};


export const SubCompCarousel = ({ bgImg }) => {
  return (
    <div id="1" className={`home home-data-cont bg-home ${bgImg}`}>
    {/* <div id="1" className="home home-data-cont bg-home"> */}
      <div className="home-data-subcont-right">
        <div className="inner-cont">
          <h1 className="hero-title-2">Work as Nurse in Germany</h1>
        </div>
        <a className="main-href" href="#9">
          <ButtonKnowMoreHero text={"Book FREE COUNSELLING Session"} lgtext />
        </a>
      </div>
    </div>
  );
};
export const SubCompCarouselOpposite = ({ bgImg }) => {
  return (
    <div id="1" className={`home home-data-cont-left bg-home ${bgImg}`}>
    {/* <div id="1" className="home home-data-cont bg-home"> */}
      <div className="home-data-subcont-right">
        <div className="inner-cont">
          <h1 className="hero-title-2">Work as Nurse in Germany</h1>
        </div>
        <a className="main-href" href="#9">
          <ButtonKnowMoreHero text={"Book FREE COUNSELLING Session"} lgtext />
        </a>
      </div>
    </div>
  );
};
