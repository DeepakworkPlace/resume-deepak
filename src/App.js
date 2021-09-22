import React from "react";
import { Container, Grid } from "@material-ui/core";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/profile/Profile";
import Resume from "./pages/Resume/Resume";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./pages/Protfolio/Portfolio";

const App = () => {
  return (
    <div>
      <Container className="top_margin">
        <Grid container spacing={7}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs>
            <Router>
              <Header />
              <div className="main-content container_shadow">
                <Switch>
                  <Route path="/portfolio" component={Portfolio} />
                  <Route exact path="/" component={Resume} />
                </Switch>
              </div>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
