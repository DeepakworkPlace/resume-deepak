import React from "react";
import {
  TimelineItem,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import { Grid, Paper, TextField, Typography } from "@material-ui/core";
import Timelinetemplate, {
  CustomSeparator,
} from "../../components/Timeline/Timeline";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import "./Resume.css";
import resumeData from "../../utils/rData";
import rData from "../../utils/rData";
import CustomButton from "../../components/Button/CustomButton";
const Resume = () => {
  return (
    <div>
      <Grid container className="section text_pb" style={{ padding: 50 }}>
        {/* About me */}
        <Grid item className="section_title text_mb">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.Aboutme}
          </Typography>
        </Grid>
      </Grid>
      {/* Resume */}
      <Grid container className="section">
        <Grid item className="section_title text_mb">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="rtimeline">
            {/* Working */}
            <Grid item sm={12} md={6}>
              <Timelinetemplate icon={<WorkOutlineIcon />} title="Experience">
                {resumeData.experience.map((exp) => (
                  <TimelineItem>
                    <CustomSeparator />
                    <TimelineContent className="timline_cont">
                      <Typography className="timeline_title">
                        {exp.title}
                      </Typography>
                      <Typography className="timeline_date" variant="caption">
                        {exp.date}
                      </Typography>
                      <Typography className="timeline_desc" variant="body2">
                        {exp.descrption}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timelinetemplate>
            </Grid>
            {/* Education */}
            <Grid item sm={12} md={6}>
              <Timelinetemplate icon={<WorkOutlineIcon />} title="Education">
                {resumeData.education.map((edu) => (
                  <TimelineItem>
                    <CustomSeparator />
                    <TimelineContent className="timline_cont">
                      <Typography className="timeline_title">
                        {edu.title}
                      </Typography>
                      <Typography className="timeline_date" variant="caption">
                        {edu.date}
                      </Typography>
                      <Typography className="timeline_desc" variant="body2">
                        {edu.descrption}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timelinetemplate>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Services */}
      <Grid container className="section text_pb">
        <Grid item className="section_title text_mb">
          <span></span>
          <h6 className="section_title_text">My Services</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {rData.services.map((service) => (
              <Grid item sm={12} md={3}>
                <div className="service">
                  <icon className="service_icon">{service.icon}</icon>
                  <Typography className="service_title" variant="h6">
                    {service.title}
                  </Typography>
                  <Typography className="service_desc" variant="body2">
                    {service.descrption}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Skills */}
      <Grid container className="section greybg text_pb">
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={3}>
            {rData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skill_title">
                    {skill.title}
                  </Typography>
                  {skill.descrption.map((e) => (
                    <Typography variant="body2" className="skill_desc">
                      <TimelineDot variant="outlined" className="skill_dot" />
                      {e}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Contact */}
      <Grid container spacing={5} className="section text_pb text_pt">
        {/* Contact Form */}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title text_mb">
              <span></span>
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="name" label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="email" label="E-Mail" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="meassage"
                    label="Message"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text="Submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Contact Information */}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title text_mb">
              <span></span>
              <h6 className="section_title_text">Contact Information</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography className="contactinfo_item">
                    <span>Address:-</span>
                    {rData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactinfo_item">
                    <span>E-mail:-</span>
                    {rData.email}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactinfo_item">
                    <span>Phone:-</span>
                    {rData.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactinfo_item">
                    <span>Skype:-</span>
                    {rData.skype}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container className="contactinfo_s_container">
                {Object.keys(rData.socials).map((key) => (
                  <Grid item className="contactinfo_social">
                    <a href={rData.socials[key].link}>
                      {rData.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Resume;
