import React from "react";

const NavbarNotifications = () => {
  return (
    <li className="nav-item dropdown hidden-caret">
      <a
        className="nav-link dropdown-toggle"
        href="url"
        id="notifDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className="fa fa-bell" />
        <span className="notification">4</span>
      </a>

      <ul
        className="dropdown-menu notif-box animated fadeIn"
        aria-labelledby="notifDropdown"
      >
        <li>
          <div className="dropdown-title">You have 4 new notification</div>
        </li>
        <li>
          <div className="notif-scroll scrollbar-outer">
            <div className="notif-center">
              <a href="url">
                <div className="notif-icon notif-primary">
                  <i className="fa fa-user-plus" />
                </div>
                <div className="notif-content">
                  <span className="block">New user registered</span>
                  <span className="time">5 minutes ago</span>
                </div>
              </a>
              <a href="url">
                <div className="notif-icon notif-success">
                  <i className="fa fa-comment" />
                </div>
                <div className="notif-content">
                  <span className="block">Rahmad commented on Admin</span>
                  <span className="time">12 minutes ago</span>
                </div>
              </a>
              <a href="url">
                <div className="notif-img">
                  <img src="../assets/img/profile2.jpg" alt="img" />
                </div>
                <div className="notif-content">
                  <span className="block">Reza send messages to you</span>
                  <span className="time">12 minutes ago</span>
                </div>
              </a>
              <a href="url">
                <div className="notif-icon notif-danger">
                  <i className="fa fa-heart" />
                </div>
                <div className="notif-content">
                  <span className="block">Farrah liked Admin</span>
                  <span className="time">17 minutes ago</span>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li>
          <a className="see-all" href="url">
            See all notifications
            <i className="fa fa-angle-right" />
          </a>
        </li>
      </ul>
    </li>
  );
};
export default NavbarNotifications;
