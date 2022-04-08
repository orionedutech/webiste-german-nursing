import "./thankyouPage.css";

const ThankyouPage = () => {
  return (
    <div>
      <div className="section-container bg-white">
        <div className="section-title-cont">
          <hr className="section-title-line" />
          <h3 className="section-title">Thank you</h3>
        </div>
        <div className="card-holder" >
        <div className="card-landscape">
          <p className="form-submit-text">
            Your details have been submitted successfully. Our team will get
            back to you shortly.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ThankyouPage;
