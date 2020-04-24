import React from "react";
import Header from "./layout/header";
import Footer from "./layout/footer/footer";
import { Route, withRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Speakers from "./pages/speakers/speakers";
import Welcome from "./pages/welcome/welcome";
import GeneralInformation from "./pages/generalInformation/general";
import StaticPage from "./pages/static/static";
import RegistrationForm from "./pages/registrationForm/registrationForm";
import { BrowserRouter } from "react-router";
import Nav from "./layout/nav/nav";
import {
  ProgramPlanning,
  ProgramScience,
  UsefulInformation,
  Registration,
  Venue,
  Abstracts,
  Accomodation,
  Tours,
  AboutGeorgia,
  Sponsors,
} from "./data";
function App(props) {
  props.history.listen((location, action) => {
    const mainNav = document.querySelector(".main-nav");
    mainNav.classList.remove("active");
  });
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <div className="main-content">
        <div className="home-row">
          <div className="home-col-1">
            <Route path="/" component={Nav} />
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/speakers" component={Speakers} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/general-information" component={GeneralInformation} />
          <Route
            path="/programming-plan"
            render={(props) => <StaticPage data={ProgramPlanning} {...props} />}
          />

          <Route
            path="/Scientific-Program"
            render={(props) => <StaticPage data={ProgramScience} {...props} />}
          />

          <Route
            path="/Useful-Information"
            render={(props) => (
              <StaticPage data={UsefulInformation} {...props} />
            )}
          />
          <Route
            path="/Registration"
            render={(props) => <StaticPage data={Registration} {...props} />}
          />
          <Route
            path="/Venue"
            render={(props) => <StaticPage data={Venue} {...props} />}
          />
          <Route
            path="/Abstracts"
            render={(props) => <StaticPage data={Abstracts} {...props} />}
          />
          <Route
            path="/Accomodation"
            render={(props) => <StaticPage data={Accomodation} {...props} />}
          />
          <Route
            path="/About-Georgia"
            render={(props) => <StaticPage data={AboutGeorgia} {...props} />}
          />
          <Route
            path="/Tours"
            render={(props) => <StaticPage data={Tours} {...props} />}
          />
          <Route
            path="/Sponsors"
            render={(props) => <StaticPage data={Sponsors} {...props} />}
          />
          <Route path="/Registration-form" component={RegistrationForm} />
        </div>
      </div>
      <Route path="/" component={Footer} />
    </div>
  );
}

export default withRouter(App);
