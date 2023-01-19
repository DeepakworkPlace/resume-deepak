import { Grid, TextField } from "@material-ui/core";
import React from "react";
import CustomButton from "../../components/Button/CustomButton";
import "./contact.css";

const Contact = () => {
  return (
    // <div className="name">
    <Grid
      container
      spacing={5}
      className="section text_pb text_pt"
      style={{ padding: 50 }}
    >
      {/* Contact Form */}
      <Grid item xs={12} lg={12}>
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
                <TextField fullWidth name="phone" label="Phone" />
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
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <CustomButton
                  className="hello"
                  text="Submit"
                  style={{
                    width: "30%",
                    padding: 10,
                    fontSize: 20,
                    fontWeight: 800,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    // </div>
  );
};

export default Contact;
