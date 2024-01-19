import "./NavBar.css";
import {OrangeButton} from '../Buttons/Buttons'
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {aboutUs, ourPrograms, ourServices, studyAbroad} from './data'


const NavBar = ({ mobileMenuActive, handleMobileMenuActive }) => {
  const [aboutUsSubMenuDisplay, setAboutUsSubMenuDisplay] = useState(false);
  const [ourProgramsSubMenuDisplay, setOurProgramsSubMenuDisplay] =
    useState(false);
  const [ourServicesSubMenuDisplay, setOurServicesSubMenuDisplay] =
    useState(false);
  const [univProgramsSubMenuDisplay, setUnivProgramsSubMenuDisplay] =
    useState(false);
  const [studyAbroadSubMenuDisplay, setStudyAbroadSubMenuDisplay] =
    useState(false);
  const [nursingSubMenuDisplay, setNursingSubMenuDisplay] =
    useState(false);
  const [finternSubMenuDisplay, setFinternSubMenuDisplay] =
    useState(false);

  const handleChangeAboutUs = () => {
    setAboutUsSubMenuDisplay(!aboutUsSubMenuDisplay);
  };
  const handleChangeOurServices = () => {
    setOurServicesSubMenuDisplay(!ourServicesSubMenuDisplay);
  };
  const handleChangeOurPrograms = () => {
    setOurProgramsSubMenuDisplay(!ourProgramsSubMenuDisplay);
  };
  const handleChangeStudyAbroad = () => {
    setStudyAbroadSubMenuDisplay(!studyAbroadSubMenuDisplay);
  };
  const handleChangeUnivPrograms = () => {
    setUnivProgramsSubMenuDisplay(!univProgramsSubMenuDisplay);
  };
  const handleChangeNursing = () => {
    setNursingSubMenuDisplay(!nursingSubMenuDisplay);
  };
  const handleChangeFintern = () => {
    setFinternSubMenuDisplay(!finternSubMenuDisplay);
  };

  const handleReset = () => {
    setAboutUsSubMenuDisplay(false);
    setOurProgramsSubMenuDisplay(false);
    setOurServicesSubMenuDisplay(false);
    setUnivProgramsSubMenuDisplay(false);
    setStudyAbroadSubMenuDisplay(false);
    setNursingSubMenuDisplay(false);
    setFinternSubMenuDisplay(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    return () => {
      handleReset();
    };
  }, [pathname]);

  return (
    <nav>
      <div className="nav-logo-cont">
        <a href="https://www.orionedutech.com/">
          <img
            className="nav-cont"
            src="https://res.cloudinary.com/learnhat/image/upload/v1641191551/orion-new-website/logo_new_main_q47dby.jpg"
            alt="orion-logo"
          />
        </a>
      </div>
      <div className="nav-items-cont">
        <ul className="nav-items-list">
          <li className="nav-item tab-hide">
            <a href="https://www.orionedutech.com/">Home</a>
          </li>
          <li
            className="nav-item tab-hide"
            onMouseOver={handleChangeAboutUs}
            onMouseOut={handleChangeAboutUs}
          >
            {/* <Link
              to="/about-us"
            > */}
            About us
            {/* </Link> */}
            <SubMenu
              subMenuDisplay={aboutUsSubMenuDisplay}
              handleReset={handleReset}
              left={"42%"}
              data={aboutUs}
            />
          </li>

          {/*
          <li
            className="nav-item"
            onMouseOver={handleChangeOurServices}
            onMouseOut={handleChangeOurServices}
          >
            Our Services
            <SubMenu
              subMenuDisplay={ourServicesSubMenuDisplay}
              handleReset={handleReset}
              left={"47%"}
              data={ourServices}
            />
          </li>
          */}

          <li
            className="nav-item"
            onMouseOver={handleChangeOurPrograms}
            onMouseOut={handleChangeOurPrograms}
          >
            Our Services
            <ProgSubMenu
              subMenuDisplay={ourProgramsSubMenuDisplay}
              handleReset={handleReset}
              left={"52%"}
              data={ourPrograms}
              univsubMenuDisplay={univProgramsSubMenuDisplay}
              univHandleChange={handleChangeUnivPrograms}
              univhandleReset={handleReset}
              univleft={"100%"}
              nursingsubMenuDisplay={nursingSubMenuDisplay}
              nursingHandleChange={handleChangeNursing}
              nursinghandleReset={handleReset}
              nursingleft={"100%"}
              finternsubMenuDisplay={finternSubMenuDisplay}
              finternHandleChange={handleChangeFintern}
              finternhandleReset={handleReset}
              finternleft={"100%"}
            />
          </li>

          <li
            className="nav-item"
            onMouseOver={handleChangeStudyAbroad}
            onMouseOut={handleChangeStudyAbroad}
          >
            Study Abroad
            <StudyAbroadSubMenu
              subMenuDisplay={studyAbroadSubMenuDisplay}
              handleReset={handleReset}
              left={"62%"}
              data={studyAbroad}
              nursingsubMenuDisplay={nursingSubMenuDisplay}
              nursingHandleChange={handleChangeNursing}
              nursinghandleReset={handleReset}
              nursingleft={"100%"}
            />
          </li>

          {/*
          <li className="nav-item">
            <a 
              rel="noreferrer" href="https://orionedutech.in/corporate-social-responsibility">CSR</a>
          </li> */}
          
          {/*
          <li className="nav-item tab-hide">
            <Link to="/contact-us">Contact Us</Link>
        </li> */} 

          <li className="nav-item tab-hide">
            <a href="https://contact.orionedutech.com">Contact Us</a> 
          </li>

          {/*
          <li className="nav-item tab-hide">
            <Link to="/faq">FAQ</Link>
          </li>
          */}

          <a
            target="_blank"
            rel="noreferrer"
            href="https://play.google.com/store/apps/details?id=com.learnhath.OrionEdutech"
          >
            <OrangeButton text="Download App" login />
          </a>
          {/*
          <a
            // target="_blank"
            rel="noreferrer"
            href="https://pay.orionedutech.com/"
          >
            <OrangeButton text="Pay Now" login />
          </a> */}

          {/* 
          <a
            // target="_blank"
            rel="noreferrer"
            href="https://orionedutechfiles.s3.ap-south-1.amazonaws.com/fms/uploadImage/OrionEdutech_Sharod_Samman.docx"
          >
            <OrangeButton text="Sharod Samman" login />
          </a>
          */}

        </ul>
      </div>
      <button className="menu-btn" onClick={handleMobileMenuActive}>
        <i className={mobileMenuActive ? `fas fa-times` : `fas fa-bars`}></i>
      </button>
    </nav>
  );
};

export default NavBar;

const SubMenu = ({ subMenuDisplay, handleReset, left, data }) => {
  return (
    <div
      className={`sub-menu ${subMenuDisplay ? "active" : null}`}
      style={{ position: "absolute", left: left }}
      onMouseLeave={handleReset}
    >
      {data.map((item) => {
        return item.wlink ? ( <a rel="noreferrer" href={item.wlink} className={item.title=="University Programs" ? "sub-menu-item-bold" : "sub-menu-item"} >{item.title}</a> ) : (
          <Link to={item.link} className={item.title=="University Programs" ? "sub-menu-item-bold" : "sub-menu-item"}>
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

const ProgSubMenu = ({ subMenuDisplay, handleReset, left, data, univsubMenuDisplay, univHandleChange, univhandleReset, univleft,
                      nursingsubMenuDisplay, nursingHandleChange, nursinghandleReset, nursingleft, 
                      finternsubMenuDisplay, finternHandleChange, finternhandleReset, finternleft}) => {
  return (
    <div
      className={`sub-menu ${subMenuDisplay ? "active" : null}`}
      style={{ position: "absolute", left: left }}
      onMouseLeave={handleReset}
    >
      {data.map((item) => {
        return item.submenutitle=="Foreign Internship" ? (
          <li
              className={"nested-sub-menu-item"}
              onMouseOver={finternHandleChange}
              onMouseOut={finternHandleChange}
              >
              <Link to={item.link} className={"sub-menu-item-bold"}>
                {item.submenutitle}
              </Link>
              <div 
              className={`nested-sub-menu ${finternsubMenuDisplay ? "active" : null}`}
              style={{ position: "absolute", left: finternleft }}
              onMouseLeave={finternhandleReset}
              >
              {item.submenuitems.map((sitem) => {
                return (<a rel="noreferrer" href={sitem.wlink} className={"sub-menu-item"}>
                  {sitem.title}
                </a>)
              })}
              </div>
          </li>
            ) :

        item.submenutitle=="Nursing Jobs Abroad" ? (
          <li
              className={"nested-sub-menu-item"}
              onMouseOver={nursingHandleChange}
              onMouseOut={nursingHandleChange}
              >
              <Link to={item.link} className={"sub-menu-item-bold"}>
                {item.submenutitle}
              </Link>
              <div 
              className={`nested-sub-menu ${nursingsubMenuDisplay ? "active" : null}`}
              style={{ position: "absolute", left: nursingleft }}
              onMouseLeave={nursinghandleReset}
              >
              {item.submenuitems.map((sitem) => {
                return (<a rel="noreferrer" href={sitem.wlink} className={"sub-menu-item"}>
                  {sitem.title}
                </a>)
              })}
              </div>
          </li>
            ) :
        
        item.submenutitle=="University Programs" ? (
          <li
              className={"nested-sub-menu-item"}
              onMouseOver={univHandleChange}
              onMouseOut={univHandleChange}
              >
              <Link to={item.link} className={"sub-menu-item-bold"}>
                {item.submenutitle}
              </Link>
              <div 
              className={`nested-sub-menu ${univsubMenuDisplay ? "active" : null}`}
              style={{ position: "absolute", left: univleft }}
              onMouseLeave={univhandleReset}
              >
              {item.submenuitems.map((sitem) => {
                return (<a rel="noreferrer" href={sitem.wlink} className={"sub-menu-item"}>
                  {sitem.title}
                </a>)
              })}
              </div>
          </li>
            ) : 
        
        item.wlink ? (
          <a rel="noreferrer" href={item.wlink} className={"sub-menu-item"}>
            {item.title}
          </a>
        ) : (
          <Link to={item.link} className={"sub-menu-item"}>
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

const StudyAbroadSubMenu = ({ subMenuDisplay, handleReset, left, data, nursingsubMenuDisplay, nursingHandleChange, nursinghandleReset, nursingleft}) => {
  return (
    <div
      className={`sub-menu ${subMenuDisplay ? "active" : null}`}
      style={{ position: "absolute", left: left }}
      onMouseLeave={handleReset}
    >
      {data.map((item) => {
        return item.submenutitle ? (
          <li
              className={"nested-sub-menu-item"}
              onMouseOver={nursingHandleChange}
              onMouseOut={nursingHandleChange}
              >
              <Link to={item.link} className={"sub-menu-item-bold"}>
                {item.submenutitle}
              </Link>
              <div
              className={`nested-sub-menu ${nursingsubMenuDisplay ? "active" : null}`}
              style={{ position: "absolute", left: nursingleft }}
              onMouseLeave={nursinghandleReset}
              >
              {item.submenuitems.map((sitem) => {
                return (<a rel="noreferrer" href={sitem.wlink} className={"sub-menu-item"}>
                  {sitem.title}
                </a>)
              })}
              </div>
          </li>
            ) : 
        
        item.wlink ? (
          <a rel="noreferrer" href={item.wlink} className={"sub-menu-item"}>
            {item.title}
          </a>
        ) : (
          <Link to={item.link} className={"sub-menu-item"}>
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

