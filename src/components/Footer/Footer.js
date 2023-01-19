import React from "react";
import { Typography } from "@material-ui/core";
import Data from "../../utils/rData";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div sticky="bottom" className="footer">
        <div className="footer_left">
          <Typography>{Data.name}</Typography>
          {Object.keys(Data.socials).map((key) => (
            <Link href={Data.socials[key].link} target="_blank">
              {Data.socials[key].icon}
            </Link>
          ))}
        </div>
        <div className="footer_right">
          <Typography className="footer_copyryt_text" style={{ color: "#fff" }}>
            Developer and Design by {""}
            <a href="/" target="_blank" >
              Deepak Kumar
            </a>

          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
