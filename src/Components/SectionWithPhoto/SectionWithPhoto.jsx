import "./sectionWithPhoto.css";

const SectionWithPhoto = ({ title, data }) => {
  return (
    <>
      <div className="section-container">
        <div className="section-title-cont">
          <hr className="section-title-line" />
          <h3 className="section-title">{title}</h3>
        </div>

        <div className="card-holder card-holder-img-section">
          <div className="con-t1">
            <img
              className="somewh-img"
              src="https://res.cloudinary.com/learnhat/image/upload/v1647332496/orion-new-website/german-nursing-p/1_2x_lmrf4a.png"
              alt=""
            />
          </div>
          <div className="con-t2">
            {data.map((item) => {
              return <p className="p-text comp-text ">{item}</p>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWithPhoto;
