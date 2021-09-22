import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, withRouter } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import resumeData from "../../utils/rData";
import CustomButton from "../Button/CustomButton";
import { Telegram } from "@material-ui/icons";
import "./Header.css";

const Header = (props) => {
  const pathName = props?.location?.pathName;

  return (
    <Navbar expand="lg" className="header">
      <Nav.Link as={NavLink} to="/">
        <Navbar.Brand className="header_home">
          <HomeIcon />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName == "/portfolio" ?  "header_link_active" : "header_link"
            }
          >
            Protfolio
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton text={"Hire Me"} icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
