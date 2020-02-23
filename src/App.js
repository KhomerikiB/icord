import React from "react";
import Header from "./layout/header";
import Footer from "./layout/footer/footer";
import { Route, withRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Speakers from "./pages/speakers/speakers";
import Welcome from "./pages/welcome/welcome";
import Nav from "./layout/nav/nav";
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
        </div>
      </div>
      <Route path="/" component={Footer} />
    </div>
  );
}

export default withRouter(App);
