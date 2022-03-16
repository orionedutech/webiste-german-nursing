/* eslint-disable */
import "./singleCardWithIcons.css";

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

const SingleCardWithIcons = ({ title, data }) => {
  return (
    <>
      <div className="section-container bg-gray-lite">
        <div className="section-title-cont">
          <hr className="section-title-line" />
          <h3 className="section-title">{title}</h3>
        </div>
        <div className="card-holder card-holder-single-card-with-icons">
          <div className="only-card wide-text-card single-card-with-icons">
            {data.map((item) => {
              return (
                <div className="item-1">
                  <h5 className="card-sub-title wc-title"></h5>
                  <ul className="p-text">
                    {item.data.map((itemin) => {
                      return (
                        <>
                          <li>{itemin.title}</li>
                          {itemin.data && (
                            <ul className="innerUlList">
                              {itemin.data.map((a) => {
                                return <li>{a}</li>;
                              })}
                            </ul>
                          )}
                        </>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
            <div className="item-2">
              {iconsData.map((item) => {
                return (
                  <div className="div-icon ">
                    <img className="gray-icons" src={item.icon} alt="" />
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCardWithIcons;
