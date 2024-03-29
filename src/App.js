import React from "react";
import Navbar from "./components/layouts/Navbar";
import Sidebar from "./components/layouts/Sidebar";
import Header from "./components/layouts/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateTours from "./components/tourisms/CreateTours";
import SignIn from "./components/auth/SignIn";
import Dashboard from "./components/dashboard/Dashboard";
import { connect } from "react-redux";
import DetailsTours from "./components/tourisms/DetailsTours";
import { SignUp } from "./components/auth/SignUp";
import Natural from "./components/pages/natural/Natural";
import Culture from "./components/pages/culture/Culture";
import Culinary from "./components/pages/culinary/Culinary";
import CreateCulinary from "./components/pages/culinary/CreateCulinary";
import CreateCulture from "./components/pages/culture/CreateCulture";
import NotIn from "./components/layouts/NotIn";
import EditTourism from "./components/tourisms/EditTourism";
import EditTourism2 from "./components/tourisms/EditTourism2";
import EditCulture from "./components/tourisms/EditCulture";
import EditCulinary from "./components/tourisms/EditCulinary";
const App = (props) => {
  const { auth } = props;
  return (
    <BrowserRouter>
      {auth.uid ? (
        <div className="wrapper">
          <div className="main-header">
            {auth.email==="cmedi2118@gmail.com" ?
            <Header /> : ""
          }
            <Navbar />
          </div>
          {
            auth.email==="cmedi2118@gmail.com" ? 
            <Sidebar /> :""
          }
          <div className="main-panel">
            <div className="content">
              <div className="content">
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/createtour" component={CreateTours} />
                  <Route path="/createCulinary" component={CreateCulinary} />
                  <Route path="/createCulinary" component={CreateCulinary} />
                  <Route path="/createCulture" component={CreateCulture} />
                  <Route path="/signin" component={SignIn} />
                  <Route path="/detail/:id" component={DetailsTours} />
                  <Route path="/edit/:id" component={EditTourism} />
                  <Route path="/edit1/:id" component={EditCulture} />
                  <Route path="/edit2/:id" component={EditTourism2} />
                  <Route path="/edit3/:id" component={EditCulinary} />
                  <Route path="/natural" component={Natural} />
                  <Route path="/culture" component={Culture} />
                  <Route path="/culinary" component={Culinary} />
                  <Route path="/cantIn" component={NotIn} />
                  {/* <Route path="/signup" component={SignUp} /> */}
                </Switch>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact="/signIn" component={SignIn} />
          <Route path="/createtour" component={CreateTours} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/detail/:id" component={DetailsTours} />
          <Route path="/edit/:id" component={EditTourism} />
          <Route path="/edit2/:id" component={EditTourism2} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      )}
    </BrowserRouter>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(App);
