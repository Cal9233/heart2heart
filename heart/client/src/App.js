import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/search/Search";
import Account from "./components/account/Account";
import Connections from "./components/account/Connections";
import Story from "./components/account/Story";
import Avatar from "./components/account/Avatar";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import ResetPassword from "./components/login/ResetPassword";
import UpdatePassword from "./components/login/UpdatePassword";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Profile from "./components/profile/Profile";
import FAQ from "./components/faq/FAQ";
import Landing from "./components/landing/Landing";
import SecureRoute from "./components/routes/SecureRoute";
import { Container } from "react-bootstrap";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Navigation />
        <Container
          id="container"
          className="pt-3 mb-5 d-flex flex-column align-items-center"
        >
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/updatepassword" component={UpdatePassword} />
            <Route exact path="/resetpassword" component={ResetPassword} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/profiles/:id" component={Profile} />
            <SecureRoute exact path="/account" component={Account} />
            <SecureRoute exact path="/connections" component={Connections} />
            <SecureRoute exact path="/story" component={Story} />
            <SecureRoute exact path="/avatar" component={Avatar} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </AppContextProvider>
  );
}

export default App;
