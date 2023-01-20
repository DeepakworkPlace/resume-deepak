import { Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import CustomButton from "../../components/Button/CustomButton";
import "./contact.css";
import { useEffect } from "react";

const Contact = () => {
  // const uniqueId = () => Date.now() * Math.random();
  const [userMessage, setUserMessage] = useState({
    id: new Date() * Math.random(),
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { name, email, phone, message } = userMessage;
  const [messageData, setMessageData] = useState([
    {
      id: 1,
      name: "Deepak Kumar",
      email: "deepak@gmail.com",
      phone: "9872793808",
      message: "I am hiring",
    },
  ]);

  // const [Message, setMessage] = useState("");

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setUserMessage({ ...userMessage, [name]: value });
  };

  useEffect(() => {
    localStorage.setItem("messageData", JSON.stringify(messageData));
  }, [messageData]);

  console.log(userMessage, "Helllllllll");
  const submitHandler = (e) => {
    e.preventDefault();
    // const { name, email, phone, message } = userMessage;
    setMessageData([...messageData, { userMessage }]);
    console.log("Hello Click", messageData);
  };

  return (
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
            <h6 className="section_title_text">Contact Me</h6>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  onChange={handleChanged}
                  value={name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="email"
                  label="E-Mail"
                  onChange={handleChanged}
                  value={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="phone"
                  label="Phone"
                  onChange={handleChanged}
                  value={phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="message"
                  label="Message"
                  multiline
                  value={message}
                  onChange={handleChanged}
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <CustomButton text="Submit" onClick={submitHandler} />
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
