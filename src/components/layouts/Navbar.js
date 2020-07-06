import React from "react";
import NavbarNotifications from "./navbarLink/NavbarNotifications";
// import SearchForm from "./navbarLink/SearchForm";
// import HiddenSearchForm from "./navbarLink/HiddenSearchForm";
import NavbarProfile from "./navbarLink/NavbarProfile";
import {connect} from 'react-redux'

 const Navbar =(props)=> {
  const {auth} =props;
  console.log(auth);
    return (
      <nav
        className="navbar navbar-header navbar-expand-lg"
        data-background-color="blue2"
      >
        <div className="container-fluid">
          {/* <SearchForm/> */}
          <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
            {/* <HiddenSearchForm/> */}
            <NavbarNotifications/>
            <NavbarProfile/>
          </ul>
        </div>
      </nav>
    );
 
}
const mapStateToProps =(state)=>{
  console.log(state)
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps) (Navbar)
