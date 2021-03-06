import "./3CardSection.css";
import { OrangeButtonLarge } from "../Buttons";

const ThreeCardSection = ({ title, data }) => {
  console.log(data[0].title);
  return (
    <>
      <div className="section-container bg-white">
        <div className="section-title-cont">
          <hr className="section-title-line" />
          <h3 className="section-title">{title}</h3>
        </div>
        <div className="card-holder">
          {data[0].data.map((item) => {
            return (
              <div className="only-card card-three-sec">
                <img src={item.image} alt="" />
                <div className="sub-card-three-sec" >
                  <p>{item.title}</p>
                  {item.data && (
                    <ul>
                      {item.data.map((item2) => (
                        <li><h4>{item2}</h4></li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="kno-more-btnn-cont">
          <a href="#9">
            <OrangeButtonLarge text={"Book Free Counselling Session"} />
          </a>
        </div>
      </div>
      
    </>
  );
};

export default ThreeCardSection;
