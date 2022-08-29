import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Me from "./pages/Me";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Page404 from "./pages/404";
import Spot from "./pages/Spot";
import Places from "./pages/Places";
import Sent from "./pages/Sent";
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import {UserProvider} from "./context/user";

function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/spot" component={Spot} />
          <Route exact path="/place" component={Places} />
          <Route exact path="/me/profile" component={Me} />
          <Route exact path="/me/signup" component={Signup} />
          <Route exact path="/me/login" component={Login} />
          <Route exact path="/sent" component={Sent} />
          <Route path="*" component={Page404} />
        </Switch>
        <MobileNav />
      </UserProvider>
    </Router>
  );
}

export default App;
