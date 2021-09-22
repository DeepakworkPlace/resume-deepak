import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import WorkIcon from "@material-ui/icons/Work";
import { Typography } from "@material-ui/core";
import "./Timeline.css";

const Timelinetemplate = ({ title, icon, children }) => {
  return (
    <div>
      <Timeline className="timeline">
        {/* Item Header */}
        <TimelineItem className="timeline_firstitem">
          <TimelineSeparator>
            <TimelineDot className="timeline_dot_header">
              {icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" className="timeline_header">
              {title}
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {children}
      </Timeline>
    </div>
  );
};

export const CustomSeparator = () => (
  <TimelineSeparator className="separator_padding">
    <TimelineDot variant="outlined" className="timeline_dot" />
    <TimelineConnector />
  </TimelineSeparator>
);

export default Timelinetemplate;
