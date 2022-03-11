import "./home.css";
import {ButtonKnowMoreHero, NumberStatsDisplay, TextComponent, TextCardWithList, Form} from '../../Components';
import { numbersData, textdata, textdata2, programDetailsData, programFeesData, hii } from "./data";


const Home = () => {
  return (
    <>
      <div id="1" className="home home-data-cont bg-home">
        <div className="home-data-subcont-right">
          <div className="inner-cont">
            <h1 className="hero-title-2">
            Work as Nurse in Germany
            </h1>
          </div>
          <a className="main-href" href="#9">
          <ButtonKnowMoreHero text={"Book FREE COUNSELLING Session"} lgtext /></a>
        </div>
      </div>
      <NumberStatsDisplay mode={'light'} data={numbersData}/>
      <TextComponent title={'About Nursing Program in Germany'} mode={'light'} data={textdata2}  />
      <TextComponent title={'About Orion'} mode={'dark'} data={textdata} textTitle />
      <TextCardWithList title={'Program Details'} data1={programDetailsData} />
      <TextCardWithList title={'Program Structure & Fees'} data1={programFeesData} singleCard  />
      <Form title={'Get in Touch'}/>
      
    </>
  );
};

export default Home;
