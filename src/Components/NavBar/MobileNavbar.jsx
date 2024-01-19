import {OrangeButton} from '../Buttons/Buttons'
import "./MobileNavbar.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {aboutUs, ourPrograms, ourServices, studyAbroad} from './data'


 const MobileNavbar = ({ mobileMenuActive, handleMobileMenuActive }) => {
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
    setOurProgramsSubMenuDisplay(false);
    setOurServicesSubMenuDisplay(false);
    setUnivProgramsSubMenuDisplay(false);
    setStudyAbroadSubMenuDisplay(false);
  };
  const handleChangeOurServices = () => {
    setOurServicesSubMenuDisplay(!ourServicesSubMenuDisplay);
    setAboutUsSubMenuDisplay(false);
    setOurProgramsSubMenuDisplay(false);
    setUnivProgramsSubMenuDisplay(false);
    setStudyAbroadSubMenuDisplay(false);
  };
  const handleChangeOurPrograms = () => {
    setOurProgramsSubMenuDisplay(!ourProgramsSubMenuDisplay);
    setAboutUsSubMenuDisplay(false);
    setOurServicesSubMenuDisplay(false);
    setStudyAbroadSubMenuDisplay(false);
  };
  const handleChangeStudyAbroad = () => {
    setStudyAbroadSubMenuDisplay(!studyAbroadSubMenuDisplay);
    setOurProgramsSubMenuDisplay(false);
    setAboutUsSubMenuDisplay(false);
    setOurServicesSubMenuDisplay(false);
  };

  const handleChangeUnivPrograms = (event) => {
    setUnivProgramsSubMenuDisplay(!univProgramsSubMenuDisplay);
    event.stopPropagation();
  };
  const handleChangeNursing = (event) => {
    setNursingSubMenuDisplay(!nursingSubMenuDisplay);
    event.stopPropagation();
  };
  const handleChangeFintern = (event) => {
    setFinternSubMenuDisplay(!finternSubMenuDisplay);
    event.stopPropagation();
  };

  const handleReset = () => {
    setAboutUsSubMenuDisplay(false);
    setOurProgramsSubMenuDisplay(false);
    setOurServicesSubMenuDisplay(false);
    setUnivProgramsSubMenuDisplay(false);
    setStudyAbroadSubMenuDisplay(false);
  };


  return (
    <div className={mobileMenuActive ? "mobile-nav active" : "mobile-nav"}>
      <div className="mobile-nav-items">
        <ul className="mobile-nav-items-list">
          <li onClick={handleMobileMenuActive} className="nav-item-m">
            <a href="https://www.orionedutech.com/">Home</a>
          </li>

          <li
            onClick={handleChangeAboutUs}
            className="nav-item-m nav-item-icon-cont"
          >
            About Us
            {aboutUsSubMenuDisplay ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </li>
          <SubMenu
            subMenuDisplay={aboutUsSubMenuDisplay}
            handleReset={handleReset}
            data={aboutUs}
            handleMobileMenuActive={handleMobileMenuActive}
          />

          {/*
          <li
            onClick={handleChangeOurServices}
            className="nav-item-m nav-item-icon-cont"
          >
            Our Services
            {ourServicesSubMenuDisplay ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </li>
          <SubMenu
            subMenuDisplay={ourServicesSubMenuDisplay}
            handleReset={handleReset}
            data={ourServices}
            handleMobileMenuActive={handleMobileMenuActive}
          />
          */}

          <li
            onClick={handleChangeOurPrograms}
            className="nav-item-m nav-item-icon-cont"
          >
            Our Services
            {ourProgramsSubMenuDisplay ? (
              <i class="fas fa-chevron-up"></i>
            ) : (
              <i class="fas fa-chevron-down"></i>
            )}
          </li>
          <ProgSubMenu
            subMenuDisplay={ourProgramsSubMenuDisplay}
            handleReset={handleReset}
            data={ourPrograms}
            handleMobileMenuActive={handleMobileMenuActive}
            univsubMenuDisplay={univProgramsSubMenuDisplay}
            univHandleChange={handleChangeUnivPrograms}
            univhandleReset={handleReset}
            nursingsubMenuDisplay={nursingSubMenuDisplay}
            nursingHandleChange={handleChangeNursing}
            nursinghandleReset={handleReset}
            finternsubMenuDisplay={finternSubMenuDisplay}
            finternHandleChange={handleChangeFintern}
            finternhandleReset={handleReset}
          />

          <li
            onClick={handleChangeStudyAbroad}
            className="nav-item-m nav-item-icon-cont"
          >
            Study Abroad
            {studyAbroadSubMenuDisplay ? (
              <i class="fas fa-chevron-up"></i>
            ) : (
              <i class="fas fa-chevron-down"></i>
            )}
          </li>
          <StudyAbroadSubMenu
            subMenuDisplay={studyAbroadSubMenuDisplay}
            handleReset={handleReset}
            data={studyAbroad}
            handleMobileMenuActive={handleMobileMenuActive}
            nursingsubMenuDisplay={nursingSubMenuDisplay}
            nursingHandleChange={handleChangeNursing}
            nursinghandleReset={handleReset}
          />

          {/* 
          <li onClick={handleMobileMenuActive} className="nav-item-m">
            <a 
              rel="noreferrer" href="https://orionedutech.in/corporate-social-responsibility">CSR</a>
            </li> */} 

          {/* 
          <li onClick={handleMobileMenuActive} className="nav-item-m">
            <Link to="/contact-us">Contact Us</Link>
          </li> */} 
          <li className="nav-item tab-hide">
            <a href="https://contact.orionedutech.com">Contact Us</a> 
          </li>

          {/*
          <li onClick={handleMobileMenuActive} className="nav-item-m">
            <Link to="/faq">FAQ</Link>
          </li>
          */}

          <a
            className="nav-item-m"
            target="_blank"
            rel="noreferrer"
            href="https://play.google.com/store/apps/details?id=com.learnhath.OrionEdutech"
          >
            <OrangeButton text="Download App" />
          </a>

          {/* 
          <a
            className="nav-item-m"
            //target="_blank"
            rel="noreferrer"
            href="https://orionedutechfiles.s3.ap-south-1.amazonaws.com/fms/uploadImage/OrionEdutech_Sharod_Samman.docx"
          >
            <OrangeButton text="Sharod Samman" />
          </a> 
          */} 

        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar

const SubMenu = ({
  subMenuDisplay,
  handleReset,
  left,
  data,
  handleMobileMenuActive,
}) => {
  return (
    <div
    
      className={`mob-sub-menu ${subMenuDisplay ? "mob-active" : null}`}
      onClick={handleReset}
    >
      {data.map((item) => {
        return item.wlink ? (
          <a key={item.wlink}
            onClick={handleMobileMenuActive}
            rel="noreferrer"
            href={item.wlink}
            className={item.title=="University Programs" ? "mob-sub-menu-item-bold" : "mob-sub-menu-item"}
          >
            {item.title}
          </a>
        ) : (
          <Link key={item.wlink}
            onClick={handleMobileMenuActive}
            to={item.link}
            className={item.title=="University Programs" ? "mob-sub-menu-item-bold" : "mob-sub-menu-item"}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

const ProgSubMenu = ({
  subMenuDisplay,
  handleReset,
  left,
  data,
  handleMobileMenuActive,
  univsubMenuDisplay, univHandleChange, univhandleReset,
  nursingsubMenuDisplay, nursingHandleChange, nursinghandleReset,
  finternsubMenuDisplay, finternHandleChange, finternhandleReset,
}) => {
  return (
    <div
      className={`mob-sub-menu ${subMenuDisplay ? "mob-active" : null}`}
      onClick={handleReset}
    >
      {data.map((item) => {
        return item.submenutitle=="Foreign Internship" ? (
          <div>
          <li
            onClick={finternHandleChange}
            className={"nav-item-m nav-item-icon-cont"}
          >
          <Link
            onClick={finternsubMenuDisplay}
            to={item.link}
            className={"nested-mob-sub-menu-item"}
          >
            {item.submenutitle}
          </Link>
            {finternsubMenuDisplay ? (
              <i class="fas fa-chevron-up"></i>
            ) : (
              <i class="fas fa-chevron-down"></i>
            )}
          </li>
            <div
            className={`mob-sub-menu ${finternsubMenuDisplay ? "mob-active" : null}`}
            onClick={finternHandleChange}
            >
            {item.submenuitems.map((sitem) => {
                return (
                <a
                onClick={handleMobileMenuActive}
                rel="noreferrer"
                href={sitem.wlink}
                className={"mob-sub-menu-item"}
              >
                {sitem.title}
              </a>
                )
              })}
            </div>
          </div>
        ) :
        
        item.submenutitle=="Nursing Jobs Abroad" ? (
          <div>
          <li
            onClick={nursingHandleChange}
            className={"nav-item-m nav-item-icon-cont"}
          >
          <Link
            onClick={nursingsubMenuDisplay}
            to={item.link}
            className={"nested-mob-sub-menu-item"}
          >
            {item.submenutitle}
          </Link>
            {nursingsubMenuDisplay ? (
              <i class="fas fa-chevron-up"></i>
            ) : (
              <i class="fas fa-chevron-down"></i>
            )}
          </li>
            <div
            className={`mob-sub-menu ${nursingsubMenuDisplay ? "mob-active" : null}`}
            onClick={nursingHandleChange}
            >
            {item.submenuitems.map((sitem) => {
                return (
                <a
                onClick={handleMobileMenuActive}
                rel="noreferrer"
                href={sitem.wlink}
                className={"mob-sub-menu-item"}
              >
                {sitem.title}
              </a>
                )
              })}
            </div>
          </div>
        ) :
        
        item.submenutitle=="University Programs" ? (
          <div>
          <li
            onClick={univHandleChange}
            className={"nav-item-m nav-item-icon-cont"}
          >
          <Link
            onClick={univsubMenuDisplay}
            to={item.link}
            className={"nested-mob-sub-menu-item"}
          >
            {item.submenutitle}
          </Link>
            {univsubMenuDisplay ? (
              <i class="fas fa-chevron-up"></i>
            ) : (
              <i class="fas fa-chevron-down"></i>
            )}
          </li>
            <div
            className={`mob-sub-menu ${univsubMenuDisplay ? "mob-active" : null}`}
            onClick={univHandleChange}
            >
            {item.submenuitems.map((sitem) => {
                return (
                <a
                onClick={handleMobileMenuActive}
                rel="noreferrer"
                href={sitem.wlink}
                className={"mob-sub-menu-item"}
              >
                {sitem.title}
              </a>
                )
              })}
            </div>
          </div>
        ) :
        
        item.wlink ? (
          <a
            onClick={handleMobileMenuActive}
            rel="noreferrer"
            href={item.wlink}
            className={"mob-sub-menu-item"}
          >
            {item.title}
          </a>
        ) : (
          <Link
            onClick={handleMobileMenuActive}
            to={item.link}
            className={"mob-sub-menu-item"}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

const StudyAbroadSubMenu = ({
  subMenuDisplay,
  handleReset,
  left,
  data,
  handleMobileMenuActive,
  nursingsubMenuDisplay, nursingHandleChange, nursinghandleReset,
}) => {
  return (
    <div
      className={`mob-sub-menu ${subMenuDisplay ? "mob-active" : null}`}
      onClick={handleReset}
    >
      {data.map((item) => {
        return item.submenutitle=="Nursing Jobs Abroad" ? (
          <div>
          <li
            onClick={nursingHandleChange}
            className={"nav-item-m nav-item-icon-cont"}
          >
          <Link
            onClick={nursingsubMenuDisplay}
            to={item.link}
            className={"nested-mob-sub-menu-item"}
          >
            {item.submenutitle}
          </Link>
            {nursingsubMenuDisplay ? (
              <i class="fas fa-chevron-up"></i>
            ) : (
              <i class="fas fa-chevron-down"></i>
            )}
          </li>
            <div
            className={`mob-sub-menu ${nursingsubMenuDisplay ? "mob-active" : null}`}
            onClick={nursingHandleChange}
            >
            {item.submenuitems.map((sitem) => {
                return (
                <a
                onClick={handleMobileMenuActive}
                rel="noreferrer"
                href={sitem.wlink}
                className={"mob-sub-menu-item"}
              >
                {sitem.title}
              </a>
                )
              })}
            </div>
          </div>
        ) :
        
        item.wlink ? (
          <a
            onClick={handleMobileMenuActive}
            rel="noreferrer"
            href={item.wlink}
            className={"mob-sub-menu-item"}
          >
            {item.title}
          </a>
        ) : (
          <Link
            onClick={handleMobileMenuActive}
            to={item.link}
            className={"mob-sub-menu-item"}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};
