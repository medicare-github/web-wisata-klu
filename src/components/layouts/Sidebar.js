import React, { Component } from "react";
// import ProfileLink from "./sidebarLink/ProfileLink";
import ContentLink from "./sidebarLink/ContentLink";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar sidebar-style-2">
        <div className="sidebar-wrapper scrollbar scrollbar-inner">
          <div className="sidebar-content">
            {/* <div className="user"> */}
              {/* <div className="avatar-sm float-left mr-2">
                <img
                  src="../assets/img/profile.jpg"
                  alt="img"
                  className="avatar-img rounded-circle"
                />
              </div> */}
              {/* <div className="info">
                <a
                  data-toggle="collapse"
                  href="#collapseExample"
                  aria-expanded="true"
                >
                  <span>
                    Medicare
                    <span className="user-level">Administrator</span>
                    <span className="caret" />
                  </span>
                </a> */}
                {/* <div className="clearfix" /> */}
                {/* <ProfileLink/> */}
              {/* </div> */}
            {/* </div> */}
            <ContentLink/>
          </div>
        </div>
      </div>
    );
  }
}
