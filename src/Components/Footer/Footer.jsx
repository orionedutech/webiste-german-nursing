import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray">
      <footer>
        <div className="footer-box box-1">
          <img
            className="footer-logo"
            src="https://res.cloudinary.com/learnhat/image/upload/v1641191551/orion-new-website/logo_new_main_q47dby.jpg"
            alt=""
          />
          <div className="sub-content-box-icons">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/OrionEdutech123"><i class="fab fa-facebook-f fab-special"></i></a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/orion-edutech-pvt-ltd/ "><i class="fab fa-linkedin"></i></a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/Orionedutech123"><i class="fab fa-twitter"></i></a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCyu7fWw8L_FaRonKMgVu8-w"><i class="fab fa-youtube"></i></a>
            {/* <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.learnhath.OrionEdutech"><i class="fab fa-google-play"></i></a> */}
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
            {/*
            <div className="sub-content-box">
              <h5>Our Services</h5>
            <a target="_blank" rel="noreferrer" href="https://staffing.orionedutech.in/"> <p>Staffing - Corporate Alliance</p></a>
            <a target="_blank" rel="noreferrer" href="https://study-abroad.orionedutech.com/"> <p>Study Abroad</p> </a>
            <Link to="/content-development" > <p>Content Development</p></Link>
            <Link to="/international-business" > <p>International Business</p></Link>
            </div>
            */}
            <div className="sub-content-box">
              <h5>About Us</h5>
              <Link to="about-us" ><p>Company Profile</p></Link>
              <Link to="/about-us/awards-and-recognition" ><p>Award & Recognition</p></Link>
              <a target="_blank" rel="noreferrer" href="https://jobs.orionedutech.com"> <p>Jobs</p></a>
              <a target="_blank" rel="noreferrer" href="https://blog.orionedutech.com"> <p>Blog</p></a>
            </div>
            <div className="sub-content-box">
              <h5>Study Abroad</h5>
              <a target="_blank" rel="noreferrer" href="https://study-abroad.orionedutech.com/"> <p>Study Abroad</p> </a>
              <a target="_blank" rel="noreferrer" href="https://germannursing.orionedutech.in/"> <p>Nursing Jobs Abroad - Germany</p> </a>
            </div>
            <div className="sub-content-box">
              <h5>Other Links</h5>
              <p><Link to="/students-testimonials">Student Testimonials</Link></p>
              <p><a target="_blank" rel="noreferrer" href="http://compliance.orionedutech.com">Delhi Compliance</a></p>
              <p><Link to="/feedback">Feedback</Link></p>
            </div>
          </div>
        </div>
        

        <div className="footer-box box-3">
          <div className="sub-content-box">
            <h5>Our Services</h5>
            <a target="_blank" rel="noreferrer" href="https://www.orioncorporate.com/"> <p>Staffing - Corporate Alliance</p></a>
            {/* <Link to="/content-development" > <p>Content Development</p></Link> */}
            <a target="_blank" rel="noreferrer" href="https://www.orionsoftechcontentgrill.com/"> <p>Content Development</p></a>
            <Link to="/international-business" > <p>International Business</p></Link>
            <Link to="/skill-development"><p>Skill Development</p></Link>
            <Link to="/corporate-social-responsibility" ><p>Corporate Social Responsibility</p></Link>
            {/* <Link to="/foreign-internship"><p>Foreign Internship</p></Link> */}
            {/* <a target="_blank" rel="noreferrer" href="https://foreign-internship.orionedutech.com/"><p>Foreign Internship - TITP</p></a> */}
            {/* <a target="_blank" rel="noreferrer" href="https://skilled-worker.orionedutech.com/"><p>Foreign Internship - SSW</p></a> */}
            {/* <Link to="/international-schooling"><p>International Schooling</p></Link> */}
            {/*<a target="_blank" rel="noreferrer" href="https://international-schooling.orionedutech.com/"> <p>International Schooling</p> </a> */}
            <a target="_blank" rel="noreferrer" href="https://germannursing.orionedutech.in/"> <p>Nursing Jobs Abroad - Germany</p> </a>
            <a target="_blank" rel="noreferrer" href="https://manav-rachna.orionedutech.com/"> <p>University Programs - Manav Rachna</p> </a>
            {/*<a target="_blank" rel="noreferrer" href="https://rayat-bahra.orionedutech.com/"> <p>University Programs - Rayat Bahra</p> </a> */}
          </div>

          {/*
          <div className="sub-content-box">
            <h5><Link to="/corporate-social-responsibility" >Corporate Social Responsibility</Link></h5>
          </div>
          */}
        </div>


        <div className="footer-box box-4">
          <div className="sub-content-box">
            <h5>Corporate Office</h5>
            <p>Mani Casadona, <br/>Office No-5ES5,5th Floor,East Tower,<br/> Newtown, Kolkata. PIN: 700156,  <br/>Opposite of Ecospace Building <br/>PS: Technocity, PO: Karigori Bhavan, Newtown </p>
          </div>
          <div className="sub-content-box">
            <h5>Email</h5>
            <p>info@orionedutech.com</p>
          </div>

          {/*
          <div className="logo-contn">
            <a target="_blank"
            rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.learnhath.OrionEdutech">
            <img
              className="logo-pstore"
              src="https://cdn.worldvectorlogo.com/logos/get-it-on-google-play.svg"
              alt=""
            />
            </a>
          </div>
          */}
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
            <Link to="/refund-policy">Cancellation & Refund Policy </Link> |{" "}
          </p>
          <p>
            {" "}
            <Link to="/product-pricing">Product Pricing </Link> |{" "}
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
