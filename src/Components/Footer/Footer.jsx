import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-apna-blue">
      <footer className="bg-apna-blue">
        <div className="footer-box box-1">
          <img
            className="footer-logo"
            src="https://res.cloudinary.com/learnhat/image/upload/v1641191551/orion-new-website/logo_new_main_q47dby.jpg"
            alt=""
          />
          <div className="sub-content-box-icons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/OrionEdutech123"
            >
              <i class="fab fa-facebook-f fab-special"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/orion-edutech-pvt-ltd/ "
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/Orionedutech123"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCyu7fWw8L_FaRonKMgVu8-w"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </div>
          <div className="logo-contn">
            <img
              className="logo-skill-india"
              src="https://res.cloudinary.com/learnhat/image/upload/v1640674377/orion-new-website/unnamed_White_tpwamo.png"
              alt=""
            />
            <img
              className="logo-nsdc"
              src="https://res.cloudinary.com/learnhat/image/upload/v1640674377/orion-new-website/unnamed_White_2_ieeav9.png"
              alt=""
            />
          </div>
        </div>
        <div className="footer-box box-2">
        <div className="sub-content-box">
            <h5>Our Services</h5>
            <a
              rel="noreferrer"
              href="https://staffing.orionedutech.in/"
            >
              {" "}
              <p>Staffing - Corporate Alliance</p>
            </a>
            <a rel="noreferrer" href="https://study-abroad.orionedutech.com/">
              {" "}
              <p>Study Abroad</p>
            </a>
            <a
              rel="noreferrer"
              href="https://orionedutech.com/content-development"
            >
              {" "}
              <p>Content Development</p>
            </a>
            <a
              rel="noreferrer"
              href="https://orionedutech.com/international-business"
            >
              {" "}
              <p>International Business</p>
            </a>
          </div>
          
          <div className="sub-content-box">
            <h5>About Us</h5>
            <a rel="noreferrer" href="https://www.orionedutech.com/about-us">
              {" "}
              <p>Company Profile</p>
            </a>
            <a
              rel="noreferrer"
              href="https://www.orionedutech.com/about-us/awards-and-recognition"
            >
              {" "}
              <p>Award & Recognition</p>
            </a>
            <a
              rel="noreferrer"
              href="https://blog.orionedutech.com"
            >
              {" "}
              <p>Blog</p>
            </a>
          </div>
          
          
        </div>
        <div className="footer-box box-3">
          <div className="sub-content-box">
            <h5>Our Programs</h5>
            <a
              rel="noreferrer"
              href="https://www.orionedutech.com/skill-development"
            >
              {" "}
              <p>Skill Development</p>
            </a>
            <a
              rel="noreferrer"
              href="https://foreign-internship.orionedutech.com/"
            >
              {" "}
              <p>Foreign Internship</p>
            </a>
            <a
              rel="noreferrer"
              href="https://international-schooling.orionedutech.com/"
            >
              {" "}
              <p>International Schooling</p>
            </a>
            <a
              rel="noreferrer"
              href="/"
            >
              {" "}
              <p>Nursing Job (Germany)</p>
            </a>
            <a
              rel="noreferrer"
              href="https://manav-rachna.orionedutech.com/"
            >
              {" "}
              <p>University Programs - Manav Rachna</p>
            </a>
            <a
              rel="noreferrer"
              href="https://rayat-bahra.orionedutech.com/"
            >
              {" "}
              <p>University Programs - Rayat Bahra</p>
            </a>
          </div>
          <div className="sub-content-box">
            <a
              rel="noreferrer"
              href="https://www.orionedutech.com/corporate-social-responsibility"
            >
              {" "}
              <p>Corporate Social Responsibility</p>
            </a>
          </div>
          <div className="sub-content-box">
            <h5>Other Links</h5>
            <a
              rel="noreferrer"
              href="https://www.orionedutech.com/students-testimonials"
            >
              {" "}
              <p>Student Testimonials</p>
            </a>
            <a
              rel="noreferrer"
              href="https://www.orionedutech.com/feedback"
            >
              {" "}
              <p>Feedback</p>
            </a>
            <p>
              {" "}
              <Link to="/faq"> FAQ </Link> {" "}
            </p>
          </div>
        </div>
        <div className="footer-box box-4">
          <div className="sub-content-box">
            <h5>Corporate Office</h5>
            <p>Mani Casadona, <br/>Office No-5ES5,5th Floor,East Tower,<br/> Newtown, Kolkata. PIN: 700156,  <br/>Opposite of Ecospace Building <br/>PS: Technocity, PO: Karigori Bhavan, Newtown </p>
            {" "}
          </div>
          <div className="sub-content-box">
            <h5>Email</h5>
            <p>info@orionedutech.com</p>
          </div>
          <div className="logo-contn">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.learnhath.OrionEdutech"
            >
              <img
                className="logo-pstore"
                src="https://cdn.worldvectorlogo.com/logos/get-it-on-google-play.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </footer>
      <div className="footer-bar-cont">
        <div className="footer-bar">
          <div className="flex1">
            <p>© Orion Edutech Pvt. Ltd 2021 | All Rights Reserved</p>
          </div>
          <div className="flex2">
            <p>
              <Link to="/terms-and-conditions"> Terms & Conditions </Link> |{" "}
            </p>
            <p>
              {" "}
              <Link to="/refund-policy"> Refund Policy </Link> |{" "}
            </p>
            <p>
              <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
            </p>
            <p>Sitemap </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
