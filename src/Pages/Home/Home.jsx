import "./home.css";
import {
  NumberStatsDisplay,
  TextComponent,
  TextCardWithList,
  Form,
  SectionWithPhoto,
  ThreeCardSection,
  SingleCardWithIcons,
} from "../../Components";
import {
  CarouselA,
} from "../../D-Components";
import {
  numbersData,
  textdata,
  programDetailsData,
  programFeesData,
  dataAboutNursingProogram,
  whatWeOfferData,
} from "./data";

const Home = () => {
  return (
    <>
      <CarouselA />
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
      <NumberStatsDisplay mode={"dark"} data={numbersData} />

      <ThreeCardSection title={"Eligibility"} data={programDetailsData} />

      <SingleCardWithIcons title={"What We Offer"} data={whatWeOfferData} />

      <TextCardWithList
        title={"Program Structure & Fees"}
        data1={programFeesData}
      />
      <Form title={"Get in Touch"} />
    </>
  );
};

export default Home;
