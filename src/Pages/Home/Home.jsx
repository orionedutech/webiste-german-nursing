import "./home.css";
import {
  NumberStatsDisplay,
  TextComponent,
  // TextCardWithList,
  Form,
  SectionWithPhoto,
  ThreeCardSection,
} from "../../Components";
import {
  CarouselA,
  OurOfferings,
  ProgramFeesAndStructure,
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
      <TextComponent
        title={"About Orion"}
        mode={"dark"}
        data={textdata}
        textTitle
      />
      <SectionWithPhoto
        title={"About Nursing Program in Germany"}
        data={dataAboutNursingProogram}
      />

      <NumberStatsDisplay mode={"dark"} data={numbersData} />

      <ThreeCardSection title={"Eligibility"} data={programDetailsData} />

      <OurOfferings title={"What We Offer"} data={whatWeOfferData} />
      {/* <SingleCardWithIcons title={"What We Offer"} data={whatWeOfferData} /> */}

      <ProgramFeesAndStructure
        title={"Program Offering"}
        data={programFeesData}
      />
      {/* <TextCardWithList
        title={"Program Fees "}
        data1={programFeesData}
      /> */}
      <Form title={"Get in Touch"} />
    </>
  );
};

export default Home;
