import "./counsForm.css";
import { useEffect, useState } from "react";
import axios from "axios";
// import { OrangeButtonLarge } from "../../../utils/buttons/Buttons";
import { OrangeButtonLarge } from "../Buttons";
import {  useNavigate } from "react-router-dom";

const Form = ({ title, page }) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const baseUrl =
    "https://orionedutech.co.in/apis/learnhat_two/Germannursingprogram/sendMailGerManNursingProgram";
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userphone, setUserphone] = useState("");
  const [city, setCity] = useState("");
  const [course, setCourse] = useState("");
  const [formComplete, setFormComplete] = useState(null);

  const submitDataStudyabroad = async () => {
    try {
      if (!username || !useremail || !userphone || !city || !course) {
        setFormComplete(false);
      } else {
        setFormComplete(true);

        const response = await axios.post(
          `${baseUrl}`,
          JSON.stringify({
            username: username,
            useremail: useremail,
            userphone: userphone,
            usercity: city,
            usercourse: course,
          })
        );
        if (response.data.emailSend) {
          setStatus(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (status) {
      navigate("/thankyou");
    }
  }, [status, navigate]);

  return (
    <div className="section-container bg-gray-lite" id="9">
      <div className="section-title-cont">
        <hr className="section-title-line" />
        <h3 className="section-title ">{title}</h3>
      </div>

      <div className="card-holder">
        <div className="form-box">
          <input
            type="text"
            placeholder="Name"
            name=""
            id=""
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="text"
            placeholder="Email ID"
            name=""
            id=""
            onChange={(e) => setUseremail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            name=""
            id=""
            maxLength={10}
            onChange={(e) => setUserphone(e.target.value)}
          />
          <input
            type="text"
            placeholder={"Your City"}
            name=""
            id=""
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder={"Course"}
            name=""
            id=""
            onChange={(e) => setCourse(e.target.value)}
          />

          <div className="form-submit-button" onClick={submitDataStudyabroad}>
            <OrangeButtonLarge text={"Submit"} />
          </div>

          {formComplete === false ? (
            <p className="center">Please fill all the fields and try again</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Form;
