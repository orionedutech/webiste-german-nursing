import "./ourOfferings.css";

const iconsData = [
  {
    icon: "https://res.cloudinary.com/learnhat/image/upload/v1647332718/orion-new-website/german-nursing-p/icons-what-we-offer/Group_3178_2x_uhces8.png",
    text: "Get Well Paid",
  },
  {
    icon: "https://res.cloudinary.com/learnhat/image/upload/v1647332743/orion-new-website/german-nursing-p/icons-what-we-offer/noun-clock-1243336_2x_qew5i8.png",
    text: "Standard Working Hours",
  },
  {
    icon: "https://res.cloudinary.com/learnhat/image/upload/v1647332757/orion-new-website/german-nursing-p/icons-what-we-offer/Group_3179_2x_rvkhbr.png",
    text: "Paid Annual Leave",
  },
  {
    icon: "https://res.cloudinary.com/learnhat/image/upload/v1647332772/orion-new-website/german-nursing-p/icons-what-we-offer/Group_3180_2x_oyqele.png",
    text: "Social Security & Support",
  },
];


const OurOfferings = ({ title, data }) => {
  return (
    <div className="section-container bg-apna-blue">
      <div className="section-title-cont">
        <hr className="section-title-line" />
        <h3 className="section-title cl-white">{title}</h3>
      </div>
      <div className="card-holder">
        {iconsData.map((item) => {
          return <OfferingCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default OurOfferings;

const OfferingCard = ({ item }) => {
  return (
    <div className="only-card offer-card">
      <div className="cont-offer-img-card" >
      <img className='offer-card-img' src={item.icon} alt="" />
      </div>
      <p className="offer-card-title" >{item.text}</p>
    </div>
  );
};
