import "./home.css";
import {ButtonKnowMoreHero, NumberStatsDisplay, TextComponent} from '../../Components';
import { numbersData, textdata, textdata2 } from "./data";


const Home = () => {
  return (
    <>
      <div className="home home-data-cont bg-home">
        <div className="home-data-subcont-right">
          <div className="inner-cont">
            <h1 className="hero-title-2">
            Work as Nurse in Germany
            </h1>
          </div>
          <ButtonKnowMoreHero text={"Book FREE COUNSELLING Session"} lgtext />
        </div>
      </div>
      <NumberStatsDisplay mode={'light'} data={numbersData}/>
      <TextComponent title={'About Orion'} mode={'dark'} data={textdata} textTitle />
      <TextComponent title={'Employment Opportunities'} mode={'light'} data={textdata2} textTitle={'For Nurses in Germany'} />
      
    </>
  );
};

export default Home;
