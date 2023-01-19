import React from "react";
import { Typography } from "@material-ui/core";
import "./Profile.css";
import ProfileImg from "../../assetc/image/Deepak.jpeg";
import Timelinetemplate, { CustomSeparator } from "../Timeline/Timeline";
import resumeData from "../../utils/rData";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { TimelineItem, TimelineContent } from "@material-ui/lab";
import CustomButton from "../Button/CustomButton";
import GetAppIcon from "@material-ui/icons/GetApp";
import MyResumeData from '../../assetc/Deepak-Kumar.pdf'

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          {""}
          <a href={link} rel="noreferrer" target="_blank">
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
        <Typography className="name" style={{ fontSize: 22 }}>{resumeData.fullname}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={ProfileImg} alt="" />
      </figure>
      <div className="profile_info">
        <Timelinetemplate icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Designation" text={resumeData.title} />
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
      <a href={MyResumeData} rel="noreferrer" download="DeepakResume" target='_blank' className="button">
        <CustomButton text={"Download Cv"} icon={<GetAppIcon />} />
      </a>
    </div>
  );
};
export default Profile;
