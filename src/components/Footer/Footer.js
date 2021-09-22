import React from "react";
import { Typography } from "@material-ui/core";
import resumeData from "../../utils/rData";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div sticky="bottom" className="footer">
        <div className="footer_left">
          <Typography>{resumeData.name}</Typography>
          {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
            </a>
          ))}
        </div>
        <div className="footer_right">
          <Typography className="footer_copyryt_text">
            Developer and Design by {""}
            <a href="/" target="_blank">
              Deepak Kumar
            </a>
            <br />
            Clone idea from{" "}
            <a href="https://themeforest.net/user/templates" target="_blank">
              Travonline.
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
