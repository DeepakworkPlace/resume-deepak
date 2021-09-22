import React from "react";
import { Typography } from "@material-ui/core";
import "./Profile.css";
import ProfileImg from "../../assetc/image/Deep.jpg";
import Timelinetemplate, { CustomSeparator } from "../Timeline/Timeline";
import resumeData from "../../utils/rData";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { TimelineItem, TimelineContent } from "@material-ui/lab";
import CustomButton from "../Button/CustomButton";
import GetAppIcon from "@material-ui/icons/GetApp";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          {""}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.fullname}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={ProfileImg} alt="" />
      </figure>
      <div className="profile_info">
        <Timelinetemplate icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />

          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </Timelinetemplate>
      </div>
      <div className="button">
        <CustomButton text={"Download Cv"} icon={<GetAppIcon />} />
      </div>
    </div>
  );
};
export default Profile;
