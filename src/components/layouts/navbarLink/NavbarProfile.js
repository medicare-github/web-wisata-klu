import React from "react";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../../store/actions/authAction'


const NavbarProfile = (props) => {
  return (
    <li className="nav-item dropdown hidden-caret">
      <a
        className="dropdown-toggle profile-pic"
        data-toggle="dropdown"
        href="url"
        aria-expanded="false"
      >
        <div className="avatar-sm">
          <img
            src="../assets/img/profile.jpg"
            alt="img"
            className="avatar-img rounded-circle"
          />
        </div>
      </a>
      <ul className="dropdown-menu dropdown-user animated fadeIn">
        <div className="dropdown-user-scroll scrollbar-outer">
          <li>
            <div className="user-box">
              <div className="avatar-lg">
                <img
                  src="../assets/img/profile.jpg"
                  alt="img"
                  className="avatar-img rounded"
                />
              </div>
              <div className="u-text">
                <h4>Medicare</h4>
                <p className="text-muted">care@example.com</p>
                <a
                  href="profile.html"
                  className="btn btn-xs btn-secondary btn-sm"
                >
                  View Profile
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="url">
              My Profile
            </a>
            <a className="dropdown-item" href="url">
              Notifications
            </a>
            <div className="dropdown-divider" />
            {/* <li className="dropdown-item">
              <Link to='/'>Login</Link>
            </li> */}
            <div className="dropdown-divider" />
            <span className="dropdown-item">
              <Link to="" onClick={props.signOut} >Logout</Link>
            </span>
          </li>
        </div>
      </ul>
    </li>
  );
};

const mapDispatchToProps =(dispatch)=>{
  return{
    signOut: ()=>dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps) (NavbarProfile)