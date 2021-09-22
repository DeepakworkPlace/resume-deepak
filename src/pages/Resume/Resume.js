import React from "react";
import { TimelineItem, TimelineContent } from "@material-ui/lab";
import { Grid, Typography } from "@material-ui/core";
import Timelinetemplate, {
  CustomSeparator,
} from "../../components/Timeline/Timeline";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import "./Resume.css";
import resumeData from "../../utils/rData";
const Resume = () => {
  return (
    <div>
      <Grid container className="section text_pb">
        {/* About me */}
        <Grid item className="section_title text_mb">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.aboutme}
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
      <Grid container className=""></Grid>
      <Grid container className=""></Grid>
      <Grid container className=""></Grid>
    </div>
  );
};

export default Resume;
