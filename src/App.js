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

import Nav from "./layout/nav/nav";
import {
  ProgramPlanning,
  ProgramScience,
  UsefulInformation,
  Registration
} from "./data";
function App() {
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
            render={props => <StaticPage data={ProgramPlanning} {...props} />}
          />

          <Route
            path="/Scientific-Program"
            render={props => <StaticPage data={ProgramScience} {...props} />}
          />

          <Route
            path="/Useful-Information"
            render={props => <StaticPage data={UsefulInformation} {...props} />}
          />
          <Route
            path="/Registration"
            render={props => <StaticPage data={Registration} {...props} />}
          />
          <Route path="/Registration-form" component={RegistrationForm} />
        </div>
      </div>
      <Route path="/" component={Footer} />
    </div>
  );
}

export default withRouter(App);
