import "./programFeesAndStructure.css";

const ProgramFeesAndStructure = ({ title, data }) => {
  return (
    <>
      <div className="section-container bg-white">
        <div className="section-title-cont">
          <hr className="section-title-line" />
          <h3 className="section-title">{title}</h3>
        </div>
        <div className="card-holder card-holder-program-offering ">
            {
                data[0].data.map(item => {
                    return (
                        <div className="only-card mini-text-card " >
                            {item.title}
                        </div>
                    )
                })
            }
        </div>
      </div>
    </>
  );
};

export default ProgramFeesAndStructure;
