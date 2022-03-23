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

      <OurOfferings title={"Program Benefits"} data={whatWeOfferData} />
      {/* <SingleCardWithIcons title={"What We Offer"} data={whatWeOfferData} /> */}

      <ProgramFeesAndStructure
        title={"Program Offering"}
        data={programFeesData}
      />
      <NumberStatsDisplay mode={"dark"} data={numbersData} />

      {/* <TextCardWithList
        title={"Program Fees "}
        data1={programFeesData}
      /> */}

      <Form title={"Get in Touch"} />
    </>
  );
};

export default Home;
