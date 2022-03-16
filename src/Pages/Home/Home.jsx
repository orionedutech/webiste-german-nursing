import "./home.css";
import {
  ButtonKnowMoreHero,
  NumberStatsDisplay,
  TextComponent,
  TextCardWithList,
  Form,
  SectionWithPhoto,
  ThreeCardSection,
  SingleCardWithIcons,
} from "../../Components";
import {ProgramFeesAndStructure} from '../../D-Components'
import {
  numbersData,
  textdata,
  programDetailsData,
  programFeesData,
  dataAboutNursingProogram,
  whatWeOfferData
} from "./data";

const Home = () => {
  return (
    <>
      <div id="1" className="home home-data-cont bg-home">
        <div className="home-data-subcont-right">
          <div className="inner-cont">
            <h1 className="hero-title-2">Work as Nurse in Germany</h1>
          </div>
          <a className="main-href" href="#9">
            <ButtonKnowMoreHero text={"Book FREE COUNSELLING Session"} lgtext />
          </a>
        </div>
      </div>
      <NumberStatsDisplay mode={"light"} data={numbersData} />
      <SectionWithPhoto
        title={"About Nursing Program in Germany"}
        data={dataAboutNursingProogram}
      />
      <TextComponent
        title={"About Orion"}
        mode={"dark"}
        data={textdata}
        textTitle
      />

      <ThreeCardSection title={"Eligibility"} data={programDetailsData} />

      <SingleCardWithIcons title={"What We Offer"} data={whatWeOfferData} />
      
      <ProgramFeesAndStructure
        title={"Program Structure & Fees"}
        data={programFeesData}
      />
      <TextCardWithList
        title={"Program Structure & Fees"}
        data1={programFeesData}
        
      />
      <Form title={"Get in Touch"} />
    </>
  );
};

export default Home;
